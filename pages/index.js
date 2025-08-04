import { useState } from 'react';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const handleDownload = (e) => {
    e.preventDefault();
    setError('');
    if (!link) {
      setError('Por favor ingresa un enlace de Strava.');
      return;
    }
    const pattern = /^https:\/\/strava\.app\.link\//;
    if (!pattern.test(link)) {
      setError('El enlace debe ser de strava.app.link.');
      return;
    }
    window.location.href = `/api/download?link=${encodeURIComponent(link)}`;
  };

  return (
    <div className={styles.container}>
      <h1>Descargar GPX de Strava</h1>
      <form onSubmit={handleDownload} className={styles.form}>
        <input
          type="url"
          placeholder="https://strava.app.link/..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Descargar GPX
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}