import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { link } = req.query;
  if (!link) {
    res.status(400).send('Missing "link" query parameter.');
    return;
  }
  try {
    const redirectResponse = await fetch(link, { method: 'HEAD', redirect: 'manual' });
    const location = redirectResponse.headers.get('location');
    if (!location) {
      res.status(400).send('No redirect location found. ¿Es un enlace válido de Strava?');
      return;
    }
    const match = location.match(/activities\/(\d+)/);
    const activityId = match ? match[1] : null;
    if (!activityId) {
      res.status(400).send('No se pudo extraer el ID de actividad.');
      return;
    }

    let activityName = '';
    try {
      const activityPageResponse = await fetch(location);
      if (activityPageResponse.ok) {
        const html = await activityPageResponse.text();
        const titleMatch = html.match(/<title>(.*?)<\/title>/);
        if (titleMatch && titleMatch[1]) {
          // Extraer el nombre de la actividad, que suele estar antes de " | Strava"
          activityName = titleMatch[1].split('|')[0].trim();
        }
      }
    } catch (e) {
      console.error('Error fetching activity name, falling back to ID', e);
    }

    const gpxUrl = `https://www.strava.com/activities/${activityId}/export_gpx`;
    const gpxResponse = await fetch(gpxUrl, { headers: { 'Accept': 'application/gpx+xml' } });
    if (!gpxResponse.ok) {
      res.status(gpxResponse.status).send('Error al obtener el GPX: ' + gpxResponse.statusText);
      return;
    }
    const gpxText = await gpxResponse.text();

    const sanitizedActivityName = activityName
      ? activityName.replace(/[^a-z0-9\s-]/gi, '').replace(/\s+/g, '_')
      : `activity_${activityId}`;

    res.setHeader('Content-Type', 'application/gpx+xml');
    res.setHeader('Content-Disposition', `attachment; filename="${sanitizedActivityName}.gpx"`);
    res.status(200).send(gpxText);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error del servidor interno.');
  }
}