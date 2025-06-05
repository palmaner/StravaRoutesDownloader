const allQuestions = [ 
    {
        question: "¿En qué contexto nacen los sistemas éticos en Grecia?",
        options: [
            "En el enfrentamiento entre atomismo y relativismo",
            "En la confrontación entre relativismo y universalismo",
            "Durante la expansión del Imperio romano",
            "A partir de la ética cristiana"
        ],
        answer: "En la confrontación entre relativismo y universalismo"
    },
    {
        question: "¿Qué relación plantea el sistema ético de la felicidad y la virtud?",
        options: [
            "La justicia y el deber",
            "El alma y la razón",
            "La bondad y la felicidad",
            "La verdad y el conocimiento"
        ],
        answer: "La bondad y la felicidad"
    },
    {
        question: "¿Cuál de estos grupos pertenece a la categoría cognitivista?",
        options: ["Éticas del cuidado", "Hedonismo", "Emotivismo", "Intuicionismo"],
        answer: "Hedonismo"
    },
    {
        question: "¿Qué sostiene el intelectualismo moral de Sócrates?",
        options: [
            "Que conocer el bien lleva a actuar bien",
            "Que la virtud nace de la voluntad",
            "Que el bien es una construcción cultural",
            "Que el bien no se puede conocer"
        ],
        answer: "Que conocer el bien lleva a actuar bien"
    },
    {
        question: "¿Qué tipo de vida representa la máxima felicidad para Aristóteles?",
        options: [
            "La vida comunitaria",
            "La vida política",
            "La vida contemplativa",
            "La vida sensorial"
        ],
        answer: "La vida contemplativa"
    },
    {
        question: "¿Cuál es el objetivo del hedonismo de Epicuro?",
        options: [
            "Alcanzar el conocimiento pleno",
            "Vivir según el deber",
            "Buscar el placer y evitar el dolor",
            "Alcanzar la fama y el poder"
        ],
        answer: "Buscar el placer y evitar el dolor"
    },
    {
        question: "¿Qué buscan alcanzar los estoicos mediante la apatheia?",
        options: [
            "El conocimiento supremo",
            "La vida tranquila",
            "El dominio sobre los demás",
            "El desarrollo del alma"
        ],
        answer: "La vida tranquila"
    },
    {
        question: "¿Qué defiende el utilitarismo según Bentham y Mill?",
        options: [
            "La indiferencia ante el dolor",
            "La búsqueda del placer personal",
            "El bien común a través del principio de utilidad",
            "La autosuficiencia emocional"
        ],
        answer: "El bien común a través del principio de utilidad"
    },
    {
        question: "¿Qué sostiene el emotivismo según Hume?",
        options: [
            "Que los juicios morales son expresiones emocionales",
            "Que el bien se descubre por la razón",
            "Que la ética debe guiarse por el deber",
            "Que el conocimiento del alma guía la moral"
        ],
        answer: "Que los juicios morales son expresiones emocionales"
    },
    {
        question: "¿Qué crítica hace Carol Gilligan en la ética del cuidado?",
        options: [
            "Que el utilitarismo es insuficiente",
            "Que la ética debe ignorar el deber",
            "Que las teorías centradas en la justicia no consideran otras formas de razonar",
            "Que la felicidad no depende de las relaciones"
        ],
        answer: "Que las teorías centradas en la justicia no consideran otras formas de razonar"
    },
    {
        question: "¿Cuál es la principal causa de la huella ecológica según el texto?",
        options: [
            "El crecimiento poblacional mundial",
            "La forma de vida y consumo de la sociedad actual",
            "Los cambios naturales del planeta",
            "La falta de tecnologías sostenibles"
        ],
        answer: "La forma de vida y consumo de la sociedad actual"
    },
    {
        question: "¿Qué caracteriza al Antropoceno, la nueva época geológica mencionada?",
        options: [
            "La aparición de grandes avances tecnológicos",
            "El equilibrio entre humanidad y medioambiente",
            "La extinción masiva de especies por acción humana",
            "La regeneración espontánea de los ecosistemas"
        ],
        answer: "La extinción masiva de especies por acción humana"
    },
    {
        question: "¿Qué advierte Hans Jonas en \"El principio de responsabilidad\"?",
        options: [
            "Que la tecnología puede mejorar la calidad de vida sin límites",
            "Que el desarrollo económico debe ser prioridad frente al ambiental",
            "Que la tecnociencia puede destruir la Tierra si no se usa con responsabilidad",
            "Que la ciencia siempre tiene efectos positivos en la sociedad"
        ],
        answer: "Que la tecnociencia puede destruir la Tierra si no se usa con responsabilidad"
    },
    {
        question: "¿Cuál es la postura de Jorge Riechmann respecto al modelo actual de sociedad?",
        options: [
            "Propone adaptarlo para seguir creciendo económicamente",
            "Cree que puede mantenerse si usamos energías limpias",
            "Advierte que es insostenible y que debemos replantear nuestras prioridades",
            "Considera que la tecnología resolverá sus problemas"
        ],
        answer: "Advierte que es insostenible y que debemos replantear nuestras prioridades"
    },
    {
        question: "¿Qué tienen en común las posturas de Peter Singer y Paul Taylor?",
        options: [
            "Defienden el uso sostenible de los animales",
            "Apoyan la experimentación científica con animales",
            "Rechazan el especismo y defienden el respeto a los seres vivos",
            "Solo consideran moralmente valiosos a los humanos"
        ],
        answer: "Rechazan el especismo y defienden el respeto a los seres vivos"
    },
    {
        question: "¿Qué límites establece la bioética?",
        options: [
            "Límites a los cuidados a las personas",
            "Límites a la investigación",
            "Límites a la moral del ser humano",
            "Límites a la esperanza de vida"
        ],
        answer: "Límites a la investigación"
    },
    {
        question: "El aborto o la eutanasia son temas de la...",
        options: ["Bioética", "Ética del cuidado", "Ética social", "Ética aplicada"],
        answer: "Bioética"
    },
    {
        question: "¿Cuál de estos principios no rige la ética médica?",
        options: ["Autonomía", "Beneficencia", "Justicia", "Económico"],
        answer: "Económico"
    },
    {
        question: "¿Qué campo de la bioética sopesa la aceptación o no de la manipulación genética?",
        options: ["Ética profesional", "Biotecnología", "Ética social", "Ética empresarial"],
        answer: "Biotecnología"
    },
    {
        question: "Los códigos deontológicos se han desarrollado según la ética...",
        options: ["Ambiental", "Profesional", "Empresarial", "Social"],
        answer: "Profesional"
    },
    {
        question: "¿Qué caracteriza a la ética discursiva y la ética de mínimos?",
        options: [
            "Se basa en la voluntad individual",
            "Su fundamento es el consenso a través del diálogo racional",
            "Se centra en las emociones",
            "Defiende la moral de señores"
        ],
        answer: "Su fundamento es el consenso a través del diálogo racional"
    },
    {
        question: "Según Nietzsche, ¿qué crítica realiza a la moral tradicional?",
        options: [
            "Que es demasiado racional",
            "Que es una moral de débiles y propone recuperar los valores heroicos",
            "Que no tiene suficiente consenso",
            "Que es demasiado pragmática"
        ],
        answer: "Que es una moral de débiles y propone recuperar los valores heroicos"
    },
    {
        question: "¿Por qué, según Rawls, la posición original es clave para definir la justicia como imparcialidad?",
        options: [
            "Porque permite a cada individuo maximizar su propio beneficio",
            "Porque elimina las particularidades y nos hace pensar como personas universales",
            "Porque fomenta la competencia entre los individuos",
            "Porque refuerza las tradiciones culturales"
        ],
        answer: "Porque elimina las particularidades y nos hace pensar como personas universales"
    },
    {
        question: "¿En qué se basa la crítica posmoderna a las éticas racionalistas y de la virtud?",
        options: [
            "En que son demasiado flexibles y subjetivas",
            "En que pretenden ser universales pero excluyen las particularidades de las minorías",
            "En que no consideran la importancia de la razón",
            "En que solo valoran la utilidad práctica"
        ],
        answer: "En que pretenden ser universales pero excluyen las particularidades de las minorías"
    },
    {
        question: "¿Cuál es la preocupación principal de Habermas respecto al relativismo moral en el contexto del diálogo ético?",
        options: [
            "Que fomenta la creatividad individual",
            "Que impide la formación de consensos",
            "Que lleva a un conservadurismo donde no se asumen responsabilidades políticas",
            "Que promueve la moral de señores"
        ],
        answer: "Que lleva a un conservadurismo donde no se asumen responsabilidades políticas"
    },

    // ## Bloque 2: Antropología
    {
        question: "¿Qué busca entender principalmente la antropología?",
        options: [
            "Las leyes físicas del universo",
            "El funcionamiento del cerebro",
            "El significado de ser humano",
            "La historia de las religiones"
        ],
        answer: "El significado de ser humano"
    },
    {
        question: "¿Qué tipo de antropología estudia la evolución biológica?",
        options: [
            "Antropología filosófica",
            "Antropología física",
            "Antropología social",
            "Antropología simbólica"
        ],
        answer: "Antropología física"
    },
    {
        question: "¿Quién decía que la antropología nos hace responsables de nuestra forma de ser?",
        options: ["Edward Tylor", "Charles Darwin", "Paul Bohannan", "Franz Boas"],
        answer: "Paul Bohannan"
    },
    {
        question: "¿Qué teoría afirmaba que las características adquiridas se heredan?",
        options: [
            "Transformismo de Lamarck",
            "Selección natural de Darwin",
            "Creacionismo",
            "Fijismo"
        ],
        answer: "Transformismo de Lamarck"
    },
    {
        question: "¿Qué defendía la teoría del fijismo?",
        options: [
            "Las especies son inmutables",
            "Las especies evolucionan lentamente",
            "Las especies cambian por adaptación",
            "La selección natural"
        ],
        answer: "Las especies son inmutables"
    },
    {
        question: "¿Qué aportó Darwin a la teoría de la evolución?",
        options: [
            "La idea de herencia genética",
            "La selección natural",
            "El origen común divino",
            "El diseño inteligente"
        ],
        answer: "La selección natural"
    },
    {
        question: "¿Qué propuso Stephen Jay Gould respecto a la evolución?",
        options: [
            "Que no existe evolución",
            "Que siempre es positiva",
            "Que puede ser rápida y a veces mejora",
            "Que solo ocurre en los humanos"
        ],
        answer: "Que puede ser rápida y a veces mejora"
    },
    {
        question: "¿Cuál fue la postura de Edward O. Wilson?",
        options: [
            "Que el comportamiento solo es cultural",
            "Que puede estar determinado biológicamente",
            "Que la evolución ya ha terminado",
            "Que el ser humano no cambia"
        ],
        answer: "Que puede estar determinado biológicamente"
    },
    {
        question: "¿Qué es la hominización?",
        options: [
            "El desarrollo de la cultura",
            "El proceso biológico de volverse humano",
            "El nacimiento del lenguaje",
            "La aparición de religiones"
        ],
        answer: "El proceso biológico de volverse humano"
    },
    {
        question: "¿Qué es la encefalización?",
        options: [
            "El crecimiento del cerebro",
            "La aparición del lenguaje",
            "El uso del fuego",
            "El desarrollo cultural"
        ],
        answer: "El crecimiento del cerebro"
    },
    {
        question: "¿Dónde surgieron los primeros humanos modernos?",
        options: ["Asia", "África", "Europa", "América"],
        answer: "África"
    },
    {
        question: "¿Qué especie humana apareció hace unos 200.000 años?",
        options: ["Homo erectus", "Homo habilis", "Homo sapiens", "Australopithecus"],
        answer: "Homo sapiens"
    },
    {
        question: "¿Qué permitió el desarrollo del lenguaje?",
        options: [
            "Comer carne",
            "Comunicación a través de sonidos y palabras",
            "Uso del fuego",
            "Sexualidad"
        ],
        answer: "Comunicación a través de sonidos y palabras"
    },
    {
        question: "¿Qué es la técnica (es una característica del humanismo)?",
        options: [
            "Un tipo de danza",
            "El uso planificado de herramientas",
            "El estudio del cuerpo",
            "Una creencia religiosa"
        ],
        answer: "El uso planificado de herramientas"
    },
    {
        question: "¿Qué es la socialización primaria?",
        options: [
            "La que ocurre en la universidad",
            "La que ocurre en casa y enseña lo básico",
            "La que ocurre con amigos",
            "La que se da en el trabajo"
        ],
        answer: "La que ocurre en casa y enseña lo básico"
    },
    {
        question: "¿Qué es una subcultura?",
        options: [
            "Una cultura desaparecida",
            "Un grupo dentro de la sociedad con características propias",
            "Una cultura dominante",
            "Una religión"
        ],
        answer: "Un grupo dentro de la sociedad con características propias"
    },
    {
        question: "¿Qué es una contracultura?",
        options: [
            "Un grupo que rechaza las normas establecidas",
            "Una cultura antigua",
            "Una forma de gobierno",
            "Una institución educativa"
        ],
        answer: "Un grupo que rechaza las normas establecidas"
    },
    {
        question: "¿Cuál es la diferencia entre sexo y género?",
        options: [
            "El sexo es biológico, el género es una perfección social", 
            "Ambos son lo mismo",
            "El sexo depende de la cultura",
            "El género es natural"
        ],
        answer: "El sexo es biológico, el género es una perfección social"
    },
    {
        question: "¿Qué significa vivir en una sociedad multicultural?",
        options: [
            "Compartir la misma cultura",
            "Convivir con culturas distintas",
            "Hablar solo un idioma",
            "Tener la misma religión"
        ],
        answer: "Convivir con culturas distintas"
    },
    {
        question: "¿Qué es la occidentalización?",
        options: [
            "El rechazo a otras culturas",
            "La expansión de valores occidentales",
            "El desarrollo de la agricultura",
            "La desaparición de culturas"
        ],
        answer: "La expansión de valores occidentales"
    },
    {
        question: "¿Qué implica la relocalización?",
        options: [
            "Revalorar las culturas locales",
            "Olvidar las tradiciones",
            "Desaparecer como grupo cultural",
            "Adoptar una cultura dominante"
        ],
        answer: "Revalorar las culturas locales"
    },
    {
        question: "¿Qué actitud considera que una cultura es superior a otras?",
        options: ["Etnocentrismo", "Relativismo", "Interculturalidad", "Humanismo"],
        answer: "Etnocentrismo"
    },
    {
        question: "¿Qué dice el relativismo cultural?",
        options: [
            "Que hay culturas mejores que otras",
            "Que cada cultura debe entenderse por sí misma",
            "Que debemos imponer nuestra cultura",
            "Que todas las culturas deben desaparecer"
        ],
        answer: "Que cada cultura debe entenderse por sí misma"
    },
    {
        question: "¿Qué busca la interculturalidad?",
        options: [
            "La fusión de todas las culturas",
            "El diálogo y conexión entre culturas",
            "El dominio de una cultura sobre otra",
            "El rechazo de la globalización"
        ],
        answer: "El diálogo y conexión entre culturas"
    },
    {
        question: "¿Qué representa el proceso de humanización?",
        options: [
            "El fin de la cultura",
            "El desarrollo de capacidades culturales y sociales",
            "La pérdida del lenguaje",
            "El aislamiento humano"
        ],
        answer: "El desarrollo de capacidades culturales y sociales"
    },

    // ## Bloque 3: Cosmología y Ciencia
    {
        question: "¿Qué buscaban los presocráticos con su filosofía?",
        options: [
            "El origen del alma",
            "El arjé o principio primordial",
            "El conocimiento práctico",
            "El origen del lenguaje"
        ],
        answer: "El arjé o principio primordial"
    },
    {
        question: "¿Cómo se llama el periodo que sustituye a la cosmogonía mítica?",
        options: ["Periodo religioso", "Periodo cosmológico", "Periodo racional", "Periodo filosófico"],
        answer: "Periodo cosmológico"
    },
    {
        question: "¿Cuál era el arjé para Anaximandro?",
        options: ["El fuego", "El aire", "El agua", "El Ser"],
        answer: "El aire" 
    },
    {
        question: "¿Qué filósofos fueron los primeros en negar la existencia de Dios?",
        options: [
            "Parménides y Sócrates",
            "Leucipo y Demócrito",
            "Aristóteles y Platón",
            "Copérnico y Galileo"
        ],
        answer: "Leucipo y Demócrito"
    },
    {
        question: "¿Qué modelo defendía Aristóteles?",
        options: ["Heliocéntrico", "Geocéntrico", "Cuántico", "Mecanicista"],
        answer: "Geocéntrico"
    },
    {
        question: "¿Qué afirmaba Aristóteles sobre el movimiento?",
        options: [
            "Todo está en reposo",
            "Dios mueve todo",
            "Todo lo que se mueve es movido por algo",
            "Nada puede moverse"
        ],
        answer: "Todo lo que se mueve es movido por algo"
    },
    {
        question: "¿Quién perfeccionó el modelo de Aristóteles?",
        options: ["Copérnico", "Galileo", "Claudio Ptolomeo", "Kepler"],
        answer: "Claudio Ptolomeo"
    },
    {
        question: "¿Qué tipo de creencia defendía Tomás de Aquino?",
        options: ["Pragmatismo", "Teísmo", "Deísmo", "Escepticismo"],
        answer: "Teísmo"
    },
    {
        question: "¿Qué diferencia al deísmo del teísmo?",
        options: [
            "El deísmo cree en varios dioses",
            "El teísmo niega a Dios",
            "El deísmo cree en un Dios que no interviene",
            "El teísmo niega la creación"
        ],
        answer: "El deísmo cree en un Dios que no interviene"
    },
    {
        question: "¿Quién propuso el método experimental y matemático en física?",
        options: [
            "Galileo y Newton",
            "Parménides y Empédocles",
            "Pitágoras",
            "Sócrates y Platón"
        ],
        answer: "Galileo y Newton"
    },
    {
        question: "¿Quién fue la primera persona en proponer el modelo Heliocéntrico?",
        options: ["Copérnico", "Aristarco de Samos", "Galileo Galilei", "Aristóteles"],
        answer: "Aristarco de Samos"
    },
    {
        question: "¿Qué explicó Galileo con el principio de inercia?",
        options: [
            "La velocidad de la luz",
            "El Big Bang",
            "Por qué no percibimos el movimiento de la Tierra",
            "La existencia de Dios"
        ],
        answer: "Por qué no percibimos el movimiento de la Tierra"
    },
    {
        question: "¿Cómo veía el universo la cosmovisión antigua?",
        options: [
            "Como una máquina",
            "Como un gran organismo vivo",
            "Como una ilusión",
            "Como energía pura"
        ],
        answer: "Como un gran organismo vivo"
    },
    {
        question: "¿Qué modelo estableció la revolución científica?",
        options: ["Orgánico", "Heliocéntrico", "Mecanicista", "Idealista"],
        answer: "Mecanicista"
    },
    {
        question: "¿Qué principio enunció Heisenberg?",
        options: [
            "Principio de incertidumbre",
            "Principio de la gravedad",
            "Principio lógico",
            "Principio de igualdad"
        ],
        answer: "Principio de incertidumbre"
    },
    {
        question: "¿Qué demuestra el experimento de Schrödinger?",
        options: [
            "Que el alma es eterna",
            "Que pueden existir múltiples estados simultáneos",
            "Que el universo es finito",
            "Que Dios existe"
        ],
        answer: "Que pueden existir múltiples estados simultáneos"
    },
    {
        question: "¿Qué teoría explica el efecto mariposa?",
        options: ["Teoría del caos", "Teoría cuántica", "Teoría heliocéntrica", "Teoría del movimiento"],
        answer: "Teoría del caos"
    },
    {
        question: "¿Qué postula la teoría del caos?",
        options: [
            "Que todo es predecible",
            "Que pequenas diferencias pueden generar grandes efectos",
            "Que el universo es eterno",
            "Que la Tierra es plana"
        ],
        answer: "Que pequenas diferencias pueden generar grandes efectos"
    },
    {
        question: "¿Quién propuso por primera vez el Big Bang?",
        options: ["Newton", "George Lemaître", "Hubble", "Galileo"],
        answer: "George Lemaître"
    },
    {
        question: "¿Qué argumento afirma que debe haber un diseñador del universo?",
        options: ["Moral", "Físico-teológico", "Ontológico", "Cuántico"],
        answer: "Físico-teológico"
    },
    {
        question: "¿Qué argumento defendió Kant?",
        options: ["Físico-teológico", "Moral", "Refutación del ontológico", "Cosmológico"],
        answer: "Moral"
    },
    {
        question: "¿Qué filósofo retomó el concepto del motor inmóvil?",
        options: [
            "Guillermo de Ockham",
            "Santo Tomás de Aquino",
            "Descartes",
            "San Agustín de Hipona"
        ],
        answer: "Santo Tomás de Aquino"
    },
    {
        question: "¿Qué postura no existe ante la existencia de Dios?",
        options: ["Agnosticismo", "Pragmatismo", "Teísmo", "Panteísmo"],
        answer: "Pragmatismo"
    },
    {
        question: "¿Qué es correcto de la teoría de la Relatividad?",
        options: [
            "El espacio-tiempo",
            "Los átomos son divisibles",
            "a y b son correctas",
            "Todas son incorrectas"
        ],
        answer: "El espacio-tiempo"
    },
    {
        question: "Según la ciencia, ¿qué consideramos el origen del universo?",
        options: ["Big Bang", "Dios", "Los átomos", "Los cuatro elementos"],
        answer: "Big Bang"
    },

    // ## Bloque 4: Filosofía Moral (Conceptos, Autores)
    {
        question: "¿Cuáles son las 2 principales corrientes filosóficas que se preguntan por el origen de los valores morales?",
        options: [
            "Relativismo y universalismo",
            "Relativismo e iusnaturalismo",
            "Emotivismo y universalismo",
            "Iusnaturalismo y emotivismo"
        ],
        answer: "Relativismo y universalismo"
    },
    {
        question: "¿Qué filósofos estaban en contra de los sofistas en el debate del relativismo y universalismo?",
        options: [
            "Sócrates y Aristóteles",
            "Aristóteles y Platón",
            "Platón y Sócrates",
            "Kant y Aristóteles"
        ],
        answer: "Platón y Sócrates"
    },
    {
        question: "¿Qué ética defendían Sócrates y Platón?",
        options: [
            "Moralismo intelectual",
            "Intelectualismo moral",
            "iusnaturalismo intelectual",
            "iusnaturalismo moral"
        ],
        answer: "Intelectualismo moral"
    },
    {
        question: "¿Qué quiere conseguir el iusnaturalismo?",
        options: [
            "Alcanzar una ética universal",
            "Alcanzar que todas las personas sean sabias y por lo tanto conozcan el bien",
            "Que la gente se abstenga de juzgar porque la moral depende del punto de vista de cada uno",
            "Las costumbres son el bien"
        ],
        answer: "Alcanzar una ética universal"
    },
    {
        question: "¿Qué es lo principal que dice el relativismo?",
        options: [
            "Es imposible encontrar un criterio universal",
            "Cada persona tiene su punto de vista sobre la moral",
            "Todas las culturas tienen que tener el mismo criterio hacia la moral",
            "Cada postura es correcta dentro de cada cultura"
        ],
        answer: "Cada postura es correcta dentro de cada cultura"
    },
    {
        question: "¿Según qué filósofo hacer el bien desprende un sentimiento de agrado?",
        options: ["Kant", "Hume", "Marx", "Platón"],
        answer: "Hume"
    },
    {
        question: "¿Qué entendía Sócrates por \"vivir bien\"?",
        options: [
            "Alcanzar riqueza y fama en la sociedad.",
            "Buscar placer y evitar el sufrimiento.",
            "Vivir con virtud, desarrollando el carácter y la razón.",
            "Cumplir con todas las leyes sin cuestionarlas."
        ],
        answer: "Vivir con virtud, desarrollando el carácter y la razón."
    },
    {
        question: "¿Cuál es la idea central de la ética en Aristóteles?",
        options: [
            "Cumplir normas sin importar los valores.",
            "Actuar según los deseos personales.",
            "Alcanzar la virtud buscando el punto medio entre los extremos.",
            "Obedecer a los dioses y sus mandatos."
        ],
        answer: "Alcanzar la virtud buscando el punto medio entre los extremos."
    },
    {
        question: "Según Kant, ¿por qué no se debe imponer nuestra idea de felicidad a los demás?",
        options: [
            "Porque todos tenemos la misma idea de felicidad.",
            "Porque la felicidad es un derecho universal.",
            "Porque la felicidad depende de cada persona y es subjetiva.",
            "Porque no se puede alcanzar la felicidad en la vida."
        ],
        answer: "Porque la felicidad depende de cada persona y es subjetiva."
    },
    {
        question: "¿Qué relación hay entre virtud y felicidad en la ética antigua?",
        options: [
            "La virtud es contraria a la felicidad.",
            "La felicidad es un premio divino y no depende de la virtud.",
            "Ser virtuoso es lo que permite alcanzar una vida feliz.",
            "No hay relación, son conceptos separados."
        ],
        answer: "Ser virtuoso es lo que permite alcanzar una vida feliz."
    },
    {
        question: "¿Cuál fue la principal crítica de Nicolai Hartmann a la ética de los valores?",
        options: [
            "Que los valores solo se basan en los placeres.",
            "Que los valores no existen en la realidad.",
            "Que los valores podrían ser inventos humanos o ideas heredadas.",
            "Que los valores no tienen utilidad práctica."
        ],
        answer: "Que los valores podrían ser inventos humanos o ideas heredadas."
    },
    {
        question: "¿Qué significa que los valores están jerarquizados, según la ética de los valores?",
        options: [
            "Que unos valores son más bonitos que otros.",
            "Que los valores cambian según la época histórica.",
            "Que hay valores más importantes que otros, como los espirituales por encima de los útiles.",
            "Que los valores deben ser ordenados por la sociedad según sus leyes."
        ],
        answer: "Que hay valores más importantes que otros, como los espirituales por encima de los útiles."
    },
    {
        question: "¿Qué significa que los valores tienen \"fuerza normativa\"?",
        options: [
            "Que los valores son normas legales impuestas por el gobierno.",
            "Que los valores obligan moralmente a actuar de cierta manera cuando los reconocemos.",
            "Que los valores deben aplicarse sólo en casos religiosos.",
            "Que los valores sólo afectan nuestras emociones pero no nuestras acciones."
        ],
        answer: "Que los valores obligan moralmente a actuar de cierta manera cuando los reconocemos."
    },
    {
        question: "¿De qué dos modos se puede entender la palabra moral?",
        options: [
            "Contenido y capacidad",
            "Contenido y ética",
            "Ética y capacidad",
            "Capacidad moral e inmoral."
        ],
        answer: "Contenido y capacidad"
    },
    {
        question: "¿Principales tareas de la ética?",
        options: [
            "Aclarar, razonar y aplicar",
            "Aclarar, fundamentar, aplicar",
            "Razonar, aplicar y pensar",
            "Fundamentar, aplicar y pensar."
        ],
        answer: "Aclarar, fundamentar, aplicar"
    },
    {
        question: "¿Qué dos conceptos fundamentales se diferencian en la ética?",
        options: [
            "Heteronomía y autonomía",
            "Autonomía moral y heteronomía autónoma",
            "Autonomía moral y heteronomía moral",
            "Heteronomía moral y heteronomía autónoma"
        ],
        answer: "Autonomía moral y heteronomía moral"
    },
    {
        question: "¿Significado de la ética universal de mínimos?",
        options: [
            "Debe de estar sometido todo ser racional, que refleje los valores, las normas y los comportamientos mínimos que nos sirvan a todos en los diferentes círculos sociales y culturales.",
            "Debe de estar sometido todo ser irracional, que refleje los valores, las normas y los comportamientos mínimos que nos sirvan a todos en los diferentes círculos sociales y culturales.",
            "Debe de estar sometido todo ser racional, que refleje los valores, las normas y los comportamientos mínimos que sirvan únicamente a los seres sometidos en los diferentes círculos sociales y culturales.",
            "Debe de estar sometido todo ser irracional, que refleje los valores, las normas y los comportamientos mínimos que sirvan únicamente a los seres sometidos en los diferentes círculos sociales y culturales."
        ],
        answer: "Debe de estar sometido todo ser racional, que refleje los valores, las normas y los comportamientos mínimos que nos sirvan a todos en los diferentes círculos sociales y culturales."
    },
    {
        question: "¿Significado de razón teórica?",
        options: [
            "Instrumento que además de servir para fabricar conocimientos, también se encarga de guiar nuestra conducta",
            "Instrumento que únicamente se encarga de fabricar conocimientos",
            "Instrumento que únicamente se encarga de guiar nuestra conducta.",
            "Instrumento que además de servir para fabricar conocimientos, también actúa sobre la moral de manera irreflexiva siguiendo una serie de valores."
        ],
        answer: "Instrumento que únicamente se encarga de fabricar conocimientos"
    },
    {
        question: "¿Diferencia principal entre ser Inmoral y amoral?",
        options: [
            "Que el término inmoral sirve únicamente para el mundo animal y sin embargo el término amoral solo se puede usar si te refieres a una persona",
            "Que el término inmoral significa que no tenemos moral y el término amoral significa que no somos morales",
            "Que el término inmoral significa que no somo morales y el término amoral significa que no tenemos moral",
            "Que el término inmoral únicamente sirve para personas y el término amoral se refiere al mundo animal"
        ],
        answer: "Que el término inmoral únicamente sirve para personas y el término amoral se refiere al mundo animal"
    },
    {
        question: "¿Qué motiva la obediencia en el nivel preconvencional?",
        options: [
            "La conciencia de los derechos humanos",
            "El deseo de ser justo con los demás",
            "El temor a ser castigado",
            "El respeto por la diversidad"
        ],
        answer: "El temor a ser castigado"
    },
    {
        question: "¿Cuál es la pregunta que responde el \"fin\" en una acción moral?",
        options: [
            "¿Quién hizo la acción?",
            "¿Para qué lo hiciste?",
            "¿Qué sentiste al hacerlo?",
            "¿Cómo te afectó?"
        ],
        answer: "¿Para qué lo hiciste?"
    },
    {
        question: "Para que una acción sea considerada moral, debe cumplir con estas condiciones:",
        options: [
            "Racionalidad, intuición y autoridad",
            "Reflexión, obediencia y disciplina",
            "Consciencia, voluntariedad y reflexión",
            "Autoridad, ley y castigo"
        ],
        answer: "Consciencia, voluntariedad y reflexión"
    },
    {
        question: "¿Cuál de las siguientes opciones representa un imperativo categórico según Kant?",
        options: [
            "Ser puntual para que no te critiquen",
            "Comer sano si quieres sentirte bien",
            "No mentir, porque mentir nunca está bien",
            "Estudiar para aprobar el examen"
        ],
        answer: "No mentir, porque mentir nunca está bien"
    },
    {
        question: "¿Qué distingue a las normas morales de las sociales o legales?",
        options: [
            "Que siempre se enseñan en la escuela",
            "Que son opcionales y no tienen consecuencias",
            "Que se basan en el placer personal",
            "Que no dependen de castigos, sino del valor en sí mismo"
        ],
        answer: "Que no dependen de castigos, sino del valor en sí mismo"
    },
    {
        question: "¿Qué caracteriza a la razón moral frente a otras razones como las económicas o hedonistas?",
        options: [
            "Que es la más útil para el bienestar personal",
            "Que puede ser ignorada si hay razones más fuertes",
            "Que es una razón irrebatible y no puede ser contrapesada",
            "Que se basa en las emociones del momento"
        ],
        answer: "Que es una razón irrebatible y no puede ser contrapesada"
    },

    // ## Bloque 5: Movimientos Sociales, Utopías y Derechos
    {
        question: "¿Cuál es el objetivo de los movimientos sociales?",
        options: [
            "Alcanzar la utopía",
            "Llegar a una armonía social",
            "Conseguir los derechos humanos",
            "Tener una vida pacífica y tranquila"
        ],
        answer: "Conseguir los derechos humanos"
    },
    {
        question: "¿Qué significa \"utopía\"?",
        options: ["Lugar morboso", "Lugar que no existe", "Lugar privado", "Ninguna de las anteriores"],
        answer: "Lugar que no existe"
    },
    {
        question: "¿Quién creó el nombre de \"utopía\"?",
        options: ["Aristóteles", "Immanuel Kant", "Platón", "Tomás Moro"],
        answer: "Tomás Moro"
    },
    {
        question: "¿Quién escribió la obra *La República* en la que creó el primer modelo utópico?",
        options: ["Hume", "Descartes", "Platón", "Sartre"],
        answer: "Platón"
    },
    {
        question: "¿Qué reina en el Estado Ideal de Platón?",
        options: ["La armonía social", "El caos político", "La igualdad", "La democracia"],
        answer: "La armonía social"
    },
    {
        question: "¿En qué tres clases se divide la ciudad utópica de Platón?",
        options: [
            "Gobernantes, caballeros y agricultores",
            "Gobernantes, guardianes y productores",
            "Gobernantes, guardianes y campesinos",
            "Ninguna de las anteriores"
        ],
        answer: "Gobernantes, guardianes y productores"
    },
    {
        question: "¿Qué proponía Christine de Pizan?",
        options: [
            "Una ciudad distópica",
            "Un Estado en armónico socialmente",
            "Una ciudad utópica y feminista",
            "Un Estado distópico y feminista"
        ],
        answer: "Una ciudad utópica y feminista"
    },
    {
        question: "¿Qué significa la paz según Immanuel Kant?",
        options: [
            "La unión de todos los pueblos en respeto basado en la serenidad",
            "La convivencia de los pueblos en respeto y basado en la justicia",
            "La convivencia de los países en respeto basado en la justicia",
            "La convivencia de los pueblos en respeto y basado en la serenidad"
        ],
        answer: "La convivencia de los pueblos en respeto y basado en la justicia"
    },
    {
        question: "¿Cuáles son los principales proyectos del socialismo utópico?",
        options: [
            "Sociedades industriales igualitarias, Falansterios y Cooperativas",
            "Desigualdad económica, Guetos y Empresas privadas",
            "Comunidades jerárquicas, Sectores religiosos y Propiedades individuales",
            "Concentración urbana desigual, Monasterios y Corporaciones privadas"
        ],
        answer: "Sociedades industriales igualitarias, Falansterios y Cooperativas"
    },
    {
        question: "¿En qué siglo surgieron las distopías?",
        options: ["XVIII", "XIX", "XX", "XXI"],
        answer: "XX"
    },
    {
        question: "¿Qué significa \"distopía\"?",
        options: [
            "Un reflejo distorsionado de la realidad",
            "Una realidad paralela",
            "Lugar que no existe",
            "Una imagen de la realidad perfecta e inalcanzable"
        ],
        answer: "Un reflejo distorsionado de la realidad"
    },
    {
        question: "¿Por qué se caracterizan las distopías?",
        options: [
            "Por ser flexibles, previsoras, ilustrativas y retroactivas",
            "Por ser críticas, previsoras, ilustrativas y prospectivas",
            "Por ser flexibles, previsoras, ilustrativas y prospectivas",
            "Por ser críticas, previsoras, ilustrativas y retroactivas"
        ],
        answer: "Por ser críticas, previsoras, ilustrativas y retroactivas"
    },
    {
        question: "¿Qué quiere decir que las distopías son “ilustrativas”?",
        options: [
            "Ejemplifican el Bien y la justicia",
            "Ejemplifican el mal y la injusticia",
            "Ambas son correctas",
            "Ninguna es correcta"
        ],
        answer: "Ejemplifican el mal y la injusticia"
    },
    {
        question: "¿Quién es el autor de la novela *Fahrenheit 451*?",
        options: ["Philip K. Dick", "Aldous Huxley", "Ray Bradbury", "Yevgueni Zamiatin"],
        answer: "Ray Bradbury"
    },
    {
        question: "¿Quién(es) defiende(n) el iusnaturalismo?",
        options: ["Tomás de Aquino", "San Agustín de Hipona", "Guillermo de Ockham", "Todas las anteriores"],
        answer: "Tomás de Aquino" 
    },
    {
        question: "¿Qué critica la novela *1984* de George Orwell?",
        options: ["El nazismo", "El fascismo", "El nacionalismo", "El estalinismo"],
        answer: "El estalinismo"
    },
    {
        question: "¿Qué significa la palabra \"derecho\"?",
        options: [
            "Conjunto de normas que rigen la convivencia.",
            "Conjunto de normas que son otorgadas a los humanos.",
            "Conjunto de normas que determinan la calidad de nuestra vida.",
            "Conjunto de normas que varían en función del país."
        ],
        answer: "Conjunto de normas que rigen la convivencia."
    },
    {
        question: "¿Quién es una defensora de los derechos humanos de las mujeres?",
        options: ["Greta Thumberg", "Malala Yousafzai", "Jane Goodall", "Anita Conti"],
        answer: "Malala Yousafzai"
    },
    {
        question: "¿En qué año se aprobó la Declaración de Independencia de EE. UU.?",
        options: ["1778", "1776", "1789", "1780"],
        answer: "1776"
    },
    {
        question: "¿Qué otro nombre reciben los derechos humanos de la primera generación?",
        options: [
            "Derechos civiles y políticos",
            "Derechos económicos, sociales y culturales",
            "Derechos fundamentales",
            "Derechos de los pueblos, de solidaridad o de cooperación"
        ],
        answer: "Derechos civiles y políticos"
    },
    {
        question: "¿Qué artículos abarcan los derechos humanos de la tercera generación?",
        options: [
            "Entre los artículos 22 y 27",
            "Entre los artículos 3 y 21",
            "Artículos 1, 2 y 3",
            "Artículos 28, 29 y 30"
        ],
        answer: "Artículos 28, 29 y 30"
    },
    {
        question: "¿Con cuál de los siguientes protocolos NO contamos los españoles?",
        options: [
            "Constitución española de 1978",
            "Carta de los Derechos Fundamentales de la Unión Europea",
            "Declaración de los Derechos del Hombre y del Ciudadano",
            "Pacto Internacional de Derechos Civiles y Políticos"
        ],
        answer: "Declaración de los Derechos del Hombre y del Ciudadano"
    },
    {
        question: "¿Qué filósofo y activista analizó la relación que se establecía entre los grandes problemas sociales y cómo los humanos los solucionamos?",
        options: ["Noam Chomsky", "Nelson Mandela", "Martin Luther King", "Ninguno de los anteriores"],
        answer: "Noam Chomsky"
    },
    {
        question: "¿Cuándo comenzaron los movimientos sociales?",
        options: [
            "En la Edad Antigua",
            "En la Edad Media",
            "En la Edad Moderna",
            "En la Edad Contemporánea"
        ],
        answer: "En la Edad Media"
    },
    {
        question: "¿De qué manera están interconectados la utopía, los derechos humanos y los movimientos políticos?",
        options: [
            "En la búsqueda de una sociedad más justa",
            "En la búsqueda de salvar el planeta",
            "En la búsqueda de una sociedad más digna",
            "Las respuestas a) y c) son correctas"
        ],
        answer: "Las respuestas a) y c) son correctas"
    },

    // ## Bloque 6: Arte, Lógica y Lenguaje
    {
        question: "El filósofo Ernst Cassirer define el ser humano como:",
        options: ["Animal simbólico", "Animal racional", "Animal emocional", "Animal universal"],
        answer: "Animal simbólico"
    },
    {
        question: "¿Qué caracteriza al símbolo frente a la señal?",
        options: [
            "Natural y estable",
            "Cambia según cultura",
            "Exclusivo de animales",
            "Reacción automática"
        ],
        answer: "Cambia según cultura"
    },
    {
        question: "¿Qué diferencia al arte de la técnica?",
        options: [
            "Finalidad práctica",
            "Expresión y creatividad",
            "Producción en serie",
            "Imitación literal"
        ],
        answer: "Expresión y creatividad"
    },
    {
        question: "¿Cómo es la experiencia estética?",
        options: [
            "Útil y práctica",
            "Racional y objetiva",
            "Emocional y reflexiva",
            "Vacía de sentido"
        ],
        answer: "Emocional y reflexiva"
    },
    {
        question: "¿Qué hace el espectador en el arte?",
        options: ["Solo observa", "Interviene en obra", "Ignora el mensaje", "Reproduce el arte"],
        answer: "Interviene en obra"
    },
    {
        question: "¿Qué conectiva lógica tiene este símbolo?: ^",
        options: ["Conjunción.", "Disyunción.", "Implicación.", "Negador."],
        answer: "Conjunción."
    },
    {
        question: "La frase 'estudiarás más o tendrás más suerte' pertenece a:",
        options: ["Conjunción.", "Disyunción.", "Implicación.", "Negador."],
        answer: "Disyunción."
    },
    {
        question: "El primer gran sistema lógico fue creado por:",
        options: ["Frege.", "Wittgenstein.", "Aristóteles.", "Crisipo de Soli."],
        answer: "Aristóteles."
    },
    {
        question: "¿Qué falacia o sesgo cognitivo representa esta afirmación?: “Suspendí porque me tienen manía.\"",
        options: [
            "Sesgo de confirmación.",
            "Falso consenso.",
            "Error de atribución.",
            "Sesgo retrospectivo."
        ],
        answer: "Error de atribución."
    },
    {
        question: "Los elementos de la lógica son:",
        options: [
            "Proposiciones y conectivas.",
            "Fenómeno y noúmeno.",
            "Silogismos y falacias.",
            "Lenguaje y pensamiento." 
        ],
        answer: "Proposiciones y conectivas."
    },
    {
        question: "¿Cuál es el principal problema de la argumentación?",
        options: [
            "Razonamiento",
            "Distinguir entre argumentos correctos o incorrectos",
            "Utilizar argumentos sólidos",
            "Diferenciar los distintos puntos de vista"
        ],
        answer: "Distinguir entre argumentos correctos o incorrectos"
    },
    {
        question: "¿Qué era lo que todos los ciudadanos tenían el mismo derecho a usar y que era tan igual como iguales eran todos ellos ante la ley?",
        options: ["Vida", "Argumentación", "Isegoría", "Lógica"],
        answer: "Isegoría"
    },
    {
        question: "¿Cuáles son los tres tipos de argumentación válida?",
        options: [
            "Razonamiento inductivo, deductivo y verdadero",
            "Razonamiento inductivo, abductivo y válido",
            "Razonamiento deductivo, abductivo e hipotético",
            "Razonamiento inductivo, deductivo e hipotético"
        ],
        answer: "Razonamiento inductivo, deductivo e hipotético" 
    },
    {
        question: "¿Qué criterio de una buena argumentación tiene como objetivo ayudar a solucionar el problema que se está debatiendo?",
        options: [
            "Criterio de buena conducta argumentativa",
            "Criterio de veracidad y relevancia",
            "Criterio de inteligibilidad y claridad",
            "Criterio de la carga de la prueba"
        ],
        answer: "Criterio de buena conducta argumentativa"
    },
    {
        question: "¿Qué tipo de falacia sería 'Profesora, no puede suspenderme porque perdería mi beca'?",
        options: ["Ad verecundiam", "Ad populum", "Ad baculum", "Ad misericordiam"],
        answer: "Ad misericordiam"
    },
    {
        question: "La belleza clásica fue desarrollada en la antigüedad clásica pero volvió en:",
        options: [
            "Barroco y Romanticismo",
            "Renacimiento",
            "Neoclasicismo y Romanticismo",
            "Renacimiento y Neoclasicismo"
        ],
        answer: "Renacimiento y Neoclasicismo"
    },
    {
        question: "¿Qué valor le atribuía Nietzsche al arte?",
        options: [
            "Modo de crítica y reforma social",
            "Descubrir el arjé",
            "La búsqueda de lo matemáticamente perfecto",
            "La comprensión de qué es la vida"
        ],
        answer: "La comprensión de qué es la vida"
    },
    {
        question: "¿Para qué filósofo el arte no era más que un mero instrumento ideológico?",
        options: ["Hegel", "Marx", "Aristóteles", "Nietzsche"],
        answer: "Marx"
    },
    {
        question: "¿Qué era estéticamente bello para Platón?",
        options: [
            "La conservación de las proporciones",
            "La proporción, la dinámica y la fidelidad con la realidad",
            "El orden, la proporción y la precisión",
            "La conservación de las proporciones y del orden"
        ],
        answer: "La conservación de las proporciones"
    },
    {
        question: "¿Qué impacto tuvo la sociedad de masas en el arte y el aura de la misma?",
        options: [
            "Debido a la masificación y producción en masa se vio incrementada muchísimo su variedad y por consecuencia su aura.",
            "Debido a la masificación y producción en masa se vio reducida muchísimo su variedad y por consecuencia su aura.",
            "Debido a la comercialización y producción en masa se vio reducida la variedad y por consecuencia su aura.",
            "Debido a la comercialización y producción en masa se vio aumentada la variedad y por consecuencia su aura."
        ],
        answer: "Debido a la comercialización y producción en masa se vio reducida la variedad y por consecuencia su aura."
    },
    {
        question: "¿Según la hipótesis Sapir-Whorf los hablantes de distintas lenguas...?",
        options: [
            "Viven en mundos distintos",
            "Son enemigos",
            "Tienden a crear vínculos culturales",
            "Tienen religiones distintas"
        ],
        answer: "Viven en mundos distintos"
    },
    {
        question: "Según Fernando Savater, ¿cuál es la intención con la que nos comunicamos?",
        options: ["Querer decir", "Organización", "Evolutiva", "Reflexiva"],
        answer: "Querer decir"
    },
    {
        question: "¿Según la corriente cognitivista como surge el lenguaje?",
        options: [
            "Dios",
            "Es innato, por lo tanto, no surge debido a nada",
            "Interacciones sociales y experiencias",
            "El uso de la lógica"
        ],
        answer: "Interacciones sociales y experiencias"
    },
    {
        question: "¿En qué obra Wittgenstein elaboró la teoría pictórica del significado?",
        options: [
            "Investigaciones filosóficas",
            "Sobre el significado de las palabras",
            "Referencia y sentido",
            "Tractatus logico-philosophicus"
        ],
        answer: "Tractatus logico-philosophicus"
    },
    {
        question: "¿Según F.L. Gottlob Frege con que nombran los signos de la realidad?",
        options: [
            "Sentido y razón",
            "Referencias y sentido",
            "Razón y referencia",
            "Comunicación y sentido"
        ],
        answer: "Referencias y sentido"
    },

    // ## Bloque 7: Política
    {
        question: "¿Cuál era el objetivo de la vida política según Aristóteles?",
        options: [
            "Alcanzar la justicia lo que implicaba que la política era inferior a la ética",
            "Alcanzar la felicidad lo que implicaba que la política era inferior a la moral",
            "Alcanzar la felicidad lo que implicaba que la política era superior a la ética",
            "Alcanzar la justicia lo que implicaba que la ética era superior a la política"
        ],
        answer: "Alcanzar la felicidad lo que implicaba que la política era superior a la ética"
    },
    {
        question: "¿Cuál era la famosa idea de Nicolás Maquiavelo?",
        options: [
            "\"El poder justifica la justicia\"",
            "\"El fin justifica los medios\"",
            "\"Conócete a ti mismo\"",
            "\"Cogito ergo sum\""
        ],
        answer: "\"El fin justifica los medios\""
    },
    {
        question: "¿De qué tres formas principales se puede ejercer el poder entendido como la capacidad de influir o limitar las acciones de otros?",
        options: [
            "Influencia, poder y autoridad",
            "Voluntad, influencia y autoridad",
            "Autoridad, política y fuerza",
            "Fuerza, influencia y autoridad"
        ],
        answer: "Fuerza, influencia y autoridad"
    },
    {
        question: "¿Cómo define Weber al estado?",
        options: [
            "Como la organización política que posee el monopolio legítimo de la violencia dentro de un territorio, ejerciendo justicia y manteniendo el orden mediante leyes",
            "Como un grupo social encargado de representar los intereses culturales de una nación mediante símbolos, tradiciones y educación",
            "Como una institución religiosa que ejerce autoridad espiritual y moral sobre la población dentro de un territorio determinado",
            "Como una organización social encargada de coordinar la cooperación entre grupos y clases para alcanzar el bienestar colectivo"
        ],
        answer: "Como la organización política que posee el monopolio legítimo de la violencia dentro de un territorio, ejerciendo justicia y manteniendo el orden mediante leyes"
    },
    {
        question: "¿Cuál era el modelo de estado de Hobbes?",
        options: [
            "Cesión total de la libertad por seguridad",
            "Cesión total de derechos por seguridad",
            "Renuncia a la protección de derechos naturales.",
            "Renuncia al interés individual por la igualdad"
        ],
        answer: "Cesión total de derechos por seguridad"
    },
    {
        question: "¿Qué tipo de contrato tenía Rousseau?",
        options: [
            "Igualitario; todos somos iguales para el estado",
            "Violento; lucha de todos contra todos",
            "Pacífico; pero inseguro",
            "Bondadoso; corrompido por la propiedad"
        ],
        answer: "Bondadoso; corrompido por la propiedad"
    },
    {
        question: "¿Qué propusieron Marx y Engels en contra del capitalismo?",
        options: [
            "Propusieron una reforma gradual del capitalismo mediante leyes laborales para mejorar las condiciones de los trabajadores.",
            "Propusieron la creación de un sistema capitalista regulado por el Estado para proteger a la clase media y evitar la concentración de la riqueza.",
            "Propusieron una revolución proletaria que llevaría, en tres fases, a una sociedad comunista sin propiedad privada ni Estado.",
            "Propusieron una alianza entre burgueses y proletarios para fortalecer el sistema capitalista y fomentar la industrialización."
        ],
        answer: "Propusieron una revolución proletaria que llevaría, en tres fases, a una sociedad comunista sin propiedad privada ni Estado."
    },
    {
        question: "¿Quién era el filósofo defensor del neoliberalismo?",
        options: ["Robert Nozick", "Friedrich Nietzsche", "Aristóteles", "Hobbes"],
        answer: "Robert Nozick"
    },
    {
        question: "¿Por qué Michael Sandels critica a Rawls?",
        options: [
            "Porque Rawls propone eliminar el Estado completamente",
            "Porque Rawls rechaza todo tipo de justicia",
            "Porque Rawls consideraba que el individuo no puede entenderse aislado de su comunidad",
            "Porque Rawls apoyaba el anarquismo radical"
        ],
        answer: "Porque Rawls consideraba que el individuo no puede entenderse aislado de su comunidad"
    },
    {
        question: "¿Entre qué dos libertades distingue Benjamin Constant?",
        options: [
            "Entre la de los antiguos y la de los modernos",
            "Entre la libertad real y la libertad simbólica",
            "Entre la libertad anarquista y liberalista",
            "Entre la libertad canónica y aristocrática"
        ],
        answer: "Entre la de los antiguos y la de los modernos"
    },
    {
        question: "¿De qué habla la democracia moderna?",
        options: [
            "De suprimir de manera completa el sufragio universal rechazando la capacidad de voto en la sociedad",
            "De representar a toda la sociedad sin importar únicamente los orígenes de esta",
            "De un régimen donde los sabios deciden mediante el uso exclusivo de la razón pura",
            "De representar a toda la ciudadanía sin importar el origen, la condición social o las creencias de cada persona"
        ],
        answer: "De representar a toda la ciudadanía sin importar el origen, la condición social o las creencias de cada persona"
    },
    {
        question: "Daniel Innerarity proponía que en el futuro debía de haber una política...",
        options: [
            "Sustentada en la supresión total del diálogo público",
            "Inclusiva, abierta, participativa y consciente de los desafíos de un mundo cambiante",
            "Fundamentada en el nihilismo activo de Nietzsche como forma de disolver la institucionalidad",
            "En la cual la sociedad luchara por un mundo estable en el cual no se generen cambios"
        ],
        answer: "Inclusiva, abierta, participativa y consciente de los desafíos de un mundo cambiante"
    },
    {
        question: "En la edad media Agustín de Hipona defendía que la sociedad era necesaria por...",
        options: [
            "Porque sin una sociedad organizada, las personas no podrían intercambiar bienes materiales y hacer crecer su riqueza personal.",
            "El impacto que tenía la figura de Dios sobre las personas",
            "Porque creía que la única forma de encontrar la verdad era a través del debate constante entre ciudadanos.",
            "El pecado humano"
        ],
        answer: "El pecado humano"
    },
    {
        question: "Filósofos como Hobbes, Locke y Rousseau son filósofos contractualistas de los siglos:",
        options: ["XVIII y XIX", "XX y XXI", "XVI y XVII", "XVI y XVIII"], 
        answer: "XVI y XVII" 
    },
    {
        question: "¿Qué modelo de estado proponía Rousseau?",
        options: [
            "Protección del individualismo",
            "Renuncia al interés individual por igualdad",
            "Protección de derechos naturales",
            "Cesión total de derechos por seguridad"
        ],
        answer: "Renuncia al interés individual por igualdad"
    },
    {
        question: "¿De qué nos advierte el filósofo Daniel Innerarity con el \"El mundo que viene\"?",
        options: [
            "De que debemos prepararnos para actuar políticamente en un mundo cada vez más globalizado interdependiente y complejo",
            "De que la solución a los problemas actuales está en volver a los valores tradicionales del siglo XIX",
            "De que el sistema democrático debe ser reemplazado por modelos tecnocráticos más eficientes",
            "De que el futuro será gobernado exclusivamente por la inteligencia artificial, sin necesidad de participación ciudadana"
        ],
        answer: "De que debemos prepararnos para actuar políticamente en un mundo cada vez más globalizado interdependiente y complejo"
    },
    {
        question: "Max Weber distinguía tres tipos de autoridad, que eran:",
        options: [
            "La burocrática, la tradicional y la moral",
            "La autocrática, la moral y la tradicional",
            "La tradicional, la carismática y la racional-legal",
            "La tradicional, la racional-legal y la popular"
        ],
        answer: "La tradicional, la carismática y la racional-legal"
    },
    {
        question: "El objetivo de la democracia moderna es:",
        options: [
            "Garantizar la supremacía del poder económico sobre las decisiones políticas",
            "Favorecer la estabilidad social mediante la homogeneidad cultural y la exclusión del disenso",
            "Permitir que todas las personas influyan en la vida pública desde su propia identidad",
            "Establecer una autoridad central que limite la participación ciudadana para evitar conflictos"
        ],
        answer: "Permitir que todas las personas influyan en la vida pública desde su propia identidad"
    },
    {
        question: "¿Quién propone una democracia deliberativa y participativa?",
        options: ["Thomas Hobbes", "Karl Marx", "Jürgen Habermas", "John Locke"],
        answer: "Jürgen Habermas"
    },
    {
        question: "Nos organizamos en estructuras sociales a través de...",
        options: ["Los impulsos biológicos", "La geografía", "La religión", "El lenguaje"],
        answer: "El lenguaje"
    },
    {
        question: "¿Qué propone o defiende el anarquismo?",
        options: [
            "El rechazo tanto al Estado como al capitalismo, al considerarlos fuentes de opresión.",
            "Propone una economía planificada bajo control gubernamental estricto",
            "Propone la defensa de un Estado fuerte y centralizado para garantizar la igualdad social",
            "Sostiene que el poder debe concentrarse en una élite ilustrada para evitar conflictos sociales"
        ],
        answer: "El rechazo tanto al Estado como al capitalismo, al considerarlos fuentes de opresión."
    },
    {
        question: "¿Qué analizó Hannah Arendt sobre la democracia?",
        options: [
            "La democracia debe basarse en la obediencia ciega a la autoridad para evitar el caos",
            "La democracia es un sistema que funciona mejor cuando la participación ciudadana se limita a votar cada cierto tiempo",
            "La democracia es efectiva solo cuando el poder se concentra en manos de líderes fuertes y carismáticos",
            "La democracia se construye cuando los ciudadanos deciden convivir desde la diversidad y no desde la imposición"
        ],
        answer: "La democracia se construye cuando los ciudadanos deciden convivir desde la diversidad y no desde la imposición"
    },
    {
        question: "Desde los tiempos antiguos, Aristóteles afirmó al ser humano como un...",
        options: [
            "Ser espiritual en busca de trascendencia",
            "Animal político",
            "Ser racional por naturaleza",
            "Individuo autónomo y libre por esencia"
        ],
        answer: "Animal político"
    },
    {
        question: "¿Por qué fue impulsada la democracia?",
        options: [
            "Por el absolutismo monárquico",
            "Por la ilustración",
            "Por el liberalismo",
            "Por el anarquismo"
        ],
        answer: "Por la ilustración"
    },
    {
        question: "¿A qué filósofo pertenece la obra *La teoría de la justicia*?",
        options: ["Jürgen Habermas", "Robert Nozick", "John Rawls", "Amartya Sen"],
        answer: "John Rawls"
    }
];

        // --- DOM ELEMENTS ---
        const questionTextElement = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const feedbackTextElement = document.getElementById('feedback-text');
        const nextButton = document.getElementById('next-btn');
        const scoreElement = document.getElementById('score');
        const questionNumberElement = document.getElementById('question-number');
        const totalQuestionsElement = document.getElementById('total-questions');
        const progressBar = document.getElementById('progress-bar'); 
        const extraInfoContainer = document.getElementById('extra-info-container'); 
        const timerDisplay = document.getElementById('timer-display'); 
        const streakDisplay = document.getElementById('streak-display'); 
        
        const gameArea = document.getElementById('game-area');
        const resultsContainer = document.getElementById('results-container');
        const finalScoreElement = document.getElementById('final-score');
        const gradeDisplayElement = document.getElementById('grade-display'); 

        const globalControlsContainer = document.getElementById('global-controls-container'); // Nuevo contenedor
        const startNewGameButton = document.getElementById('start-new-game-btn');
        const continueGameButton = document.getElementById('continue-game-btn');
        const savedGameStatsElement = document.getElementById('saved-game-stats'); 

        let currentQuestionIndex = 0;
        let score = 0;
        let questionsOrder = []; 
        let questions = []; 
        let currentStreak = 0; 
        let gameTimerInterval; 
        let secondsPlayed = 0; 
        let isGameActive = false; 

        const STORAGE_KEY_PROGRESS = 'filosofiaQuizProgress';
        const STORAGE_KEY_QUESTIONS_ORDER = 'filosofiaQuizQuestionsOrder';
        const STORAGE_KEY_STREAK = 'filosofiaQuizStreak';
        const STORAGE_KEY_TIME = 'filosofiaQuizTime';

        // --- FUNCIONES AUXILIARES Y DE TEMPORIZADOR/RACHA (SIN CAMBIOS) ---
        function shuffleArray(array) { /*...*/ }
        function formatTime(totalSeconds) { /*...*/ }
        function startTimer() { /*...*/ }
        function stopTimer() { /*...*/ }
        function resetTimer() { /*...*/ }
        function updateStreakDisplay() { /*...*/ }
        function incrementStreak() { /*...*/ }
        function resetStreak() { /*...*/ }
        // (El código de estas funciones es el mismo que en la respuesta anterior)
        // ... (Copia aquí las funciones shuffleArray, formatTime, startTimer, stopTimer, resetTimer, updateStreakDisplay, incrementStreak, resetStreak)
        // Para brevedad, no las repito, pero deben estar aquí.
        // (Asegúrate de copiar el código completo de estas funciones de la respuesta anterior)

        // --- REPETICIÓN DE FUNCIONES (COPIAR DE LA RESPUESTA ANTERIOR SI ES NECESARIO) ---
        function shuffleArray(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } }
        function formatTime(totalSeconds) { const minutes = Math.floor(totalSeconds / 60); const seconds = totalSeconds % 60; return `Tiempo: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; }
        function startTimer() { if (!isGameActive) return; stopTimer(); extraInfoContainer.classList.remove('hidden'); timerDisplay.textContent = formatTime(secondsPlayed); gameTimerInterval = setInterval(() => { if (isGameActive && document.visibilityState === 'visible') { secondsPlayed++; timerDisplay.textContent = formatTime(secondsPlayed); localStorage.setItem(STORAGE_KEY_TIME, secondsPlayed.toString()); } }, 1000); }
        function stopTimer() { clearInterval(gameTimerInterval); }
        function resetTimer() { stopTimer(); secondsPlayed = 0; timerDisplay.textContent = formatTime(secondsPlayed); localStorage.removeItem(STORAGE_KEY_TIME); }
        function updateStreakDisplay() { streakDisplay.textContent = `Racha: ${currentStreak} 🔥`; }
        function incrementStreak() { currentStreak++; updateStreakDisplay(); localStorage.setItem(STORAGE_KEY_STREAK, currentStreak.toString()); }
        function resetStreak() { currentStreak = 0; updateStreakDisplay(); localStorage.setItem(STORAGE_KEY_STREAK, currentStreak.toString()); }
        // --- FIN DE REPETICIÓN ---


        function saveProgress() {
            if (!isGameActive) return; 
            const progress = {
                currentQuestionIndex: currentQuestionIndex, 
                score: score,
            };
            localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
            localStorage.setItem(STORAGE_KEY_QUESTIONS_ORDER, JSON.stringify(questionsOrder));
        }

        function loadProgress() { 
            const savedProgressJSON = localStorage.getItem(STORAGE_KEY_PROGRESS);
            const savedQuestionsOrderJSON = localStorage.getItem(STORAGE_KEY_QUESTIONS_ORDER);
            const savedStreak = localStorage.getItem(STORAGE_KEY_STREAK);
            const savedTime = localStorage.getItem(STORAGE_KEY_TIME);

            if (savedProgressJSON && savedQuestionsOrderJSON) {
                try {
                    const progressData = JSON.parse(savedProgressJSON);
                    const orderData = JSON.parse(savedQuestionsOrderJSON);

                    if (orderData.length > 0 && orderData.every(index => index < allQuestions.length) && progressData.currentQuestionIndex < orderData.length) {
                        return {
                            currentQuestionIndex: progressData.currentQuestionIndex,
                            score: progressData.score,
                            questionsOrder: orderData,
                            currentStreak: savedStreak ? parseInt(savedStreak, 10) : 0,
                            secondsPlayed: savedTime ? parseInt(savedTime, 10) : 0,
                        };
                    } else { return null; }
                } catch (error) { return null; }
            }
            return null; 
        }

        function clearProgress() { localStorage.removeItem(STORAGE_KEY_PROGRESS); }
        
        function clearFullProgress() { 
            localStorage.removeItem(STORAGE_KEY_PROGRESS);
            localStorage.removeItem(STORAGE_KEY_QUESTIONS_ORDER);
            localStorage.removeItem(STORAGE_KEY_STREAK);
            localStorage.removeItem(STORAGE_KEY_TIME);
            questionsOrder = []; 
            resetStreak();
            resetTimer();
            isGameActive = false; 
        }

        function updateGlobalControlsVisibility() {
            const savedData = loadProgress();
            globalControlsContainer.classList.remove('hidden'); // Contenedor global siempre visible

            if (savedData && !isGameActive) { // Mostrar stats y continuar SOLO si no hay juego activo y hay datos
                continueGameButton.classList.remove('hidden');
                savedGameStatsElement.classList.remove('hidden');
                
                const totalSavedQuestions = savedData.questionsOrder.length;
                const displayQuestionNumber = (savedData.currentQuestionIndex !== undefined ? savedData.currentQuestionIndex : -1) + 1;
                savedGameStatsElement.innerHTML = `
                    <p><strong>Juego Guardado:</strong></p>
                    <p>Pregunta: ${displayQuestionNumber > 0 ? displayQuestionNumber : 'N/A'} / ${totalSavedQuestions}</p>
                    <p>Puntuación: ${savedData.score !== undefined ? savedData.score : 'N/A'}</p>
                    <p>Racha: ${savedData.currentStreak !== undefined ? savedData.currentStreak : 0} 🔥</p>
                    <p>${formatTime(savedData.secondsPlayed !== undefined ? savedData.secondsPlayed : 0).replace('Tiempo: ', 'Tiempo Jugado: ')}</p>
                `;
            } else { 
                continueGameButton.classList.add('hidden');
                savedGameStatsElement.classList.add('hidden');
            }
            startNewGameButton.classList.remove('hidden'); 
        }


        function initializeGame(continueExisting = false) {
            isGameActive = true; 
            gameArea.classList.remove('hidden');
            resultsContainer.classList.add('hidden');
            updateGlobalControlsVisibility(); // Actualizar controles globales
            extraInfoContainer.classList.remove('hidden');

            let loadedData = null;
            if (continueExisting) {
                loadedData = loadProgress();
            }

            if (loadedData) {
                currentQuestionIndex = loadedData.currentQuestionIndex;
                score = loadedData.score;
                questionsOrder = loadedData.questionsOrder;
                currentStreak = loadedData.currentStreak;
                secondsPlayed = loadedData.secondsPlayed;
                questions = questionsOrder.map(index => allQuestions[index]);
            } else {
                clearFullProgress(); 
                isGameActive = true; 
                currentQuestionIndex = 0;
                score = 0;
                questionsOrder = Array.from(Array(allQuestions.length).keys()); 
                shuffleArray(questionsOrder);
                questions = questionsOrder.map(index => allQuestions[index]);
                saveProgress(); 
            }
            updateStreakDisplay(); 
            startTimer(); 
            
            scoreElement.textContent = score;
            totalQuestionsElement.textContent = questions.length;
            nextButton.classList.add('hidden');
            nextButton.textContent = 'Siguiente Pregunta'; 
            
            if(progressBar) progressBar.style.width = '0%'; 
            
            loadQuestion();
        }

        function loadQuestion() {
            if(!isGameActive) return;

            feedbackTextElement.textContent = '';
            feedbackTextElement.className = ''; 
            nextButton.classList.add('hidden');

            if (currentQuestionIndex < questions.length) {
                const currentQuestion = questions[currentQuestionIndex];
                if (!currentQuestion) {
                    isGameActive = false;
                    updateGlobalControlsVisibility(); 
                    return;
                }
                questionTextElement.textContent = currentQuestion.question;
                questionNumberElement.textContent = currentQuestionIndex + 1;

                const progressPercentage = (currentQuestionIndex / questions.length) * 100;
                if(progressBar) progressBar.style.width = progressPercentage + '%';

                optionsContainer.innerHTML = ''; 
                
                const shuffledOptions = [...currentQuestion.options];
                shuffleArray(shuffledOptions);

                shuffledOptions.forEach(option => {
                    const button = document.createElement('button');
                    button.textContent = option;
                    button.classList.add('option-btn');
                    button.addEventListener('click', selectAnswer);
                    optionsContainer.appendChild(button);
                });
            } else {
                if (progressBar) progressBar.style.width = '100%'; 
                showResults();
            }
        }

        function selectAnswer(e) {
            const selectedButton = e.target;
            const correctAnswer = questions[currentQuestionIndex].answer;

            Array.from(optionsContainer.children).forEach(button => {
                button.disabled = true;
                if (button.textContent === correctAnswer) {
                    button.classList.add('correct');
                }
            });
            
            if (selectedButton.textContent === correctAnswer) {
                score++;
                scoreElement.textContent = score;
                feedbackTextElement.textContent = '¡Correcto!';
                feedbackTextElement.className = 'feedback-correct';
                incrementStreak(); 
            } else {
                selectedButton.classList.add('incorrect');
                feedbackTextElement.textContent = `Incorrecto. La respuesta era: ${correctAnswer}`;
                feedbackTextElement.className = 'feedback-incorrect';
                resetStreak(); 
            }
            saveProgress(); 

            nextButton.classList.remove('hidden');
            if (currentQuestionIndex >= questions.length - 1) { 
                nextButton.textContent = 'Ver Resultados';
            } else {
                nextButton.textContent = 'Siguiente Pregunta';
            }
        }

        function showResults() {
            isGameActive = false; 
            gameArea.classList.add('hidden');
            resultsContainer.classList.remove('hidden');
            updateGlobalControlsVisibility(); 
            extraInfoContainer.classList.add('hidden'); 
            stopTimer(); 
            finalScoreElement.textContent = `Tu puntuación final es: ${score} de ${questions.length}`;
            
            const grade = questions.length > 0 ? (score / questions.length) * 10 : 0;
            gradeDisplayElement.textContent = `Tienes aproximadamente ${grade.toFixed(1)}/10`;

            clearProgress(); 
        }

        // --- EVENT LISTENERS ---
        nextButton.addEventListener('click', () => {
            currentQuestionIndex++; 
            saveProgress(); 
            loadQuestion();
        });
        
        startNewGameButton.addEventListener('click', () => {
            const progressExists = loadProgress(); 
            if (progressExists) { 
                 if (confirm("¿Seguro que quieres empezar un juego nuevo? Si tienes un juego guardado o una partida en curso, se borrará.")) {
                    clearFullProgress(); 
                    initializeGame(false); 
                }
            } else { 
                initializeGame(false);
            }
        });

        continueGameButton.addEventListener('click', () => {
            // Si este botón está visible, es porque !isGameActive y hay progreso guardado.
            // No se necesita confirmación adicional para abandonar una partida activa inexistente.
            initializeGame(true); 
        });

        // Inicializar la visibilidad de los controles globales al cargar la página
        updateGlobalControlsVisibility();