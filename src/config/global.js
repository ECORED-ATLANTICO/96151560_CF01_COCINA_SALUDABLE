export default {
  global: {
    Name: 'Fundamentos de la cocina saludable: insumos, equipos y técnicas esenciales.',
    Description:
      'Este componente formativo fundamenta la cocina saludable en BPM y normatividad colombiana. Aborda la selección de materias primas de alta calidad, el manejo seguro de equipos y utensilios, y la aplicación de técnicas de corte, cocción y conservación que preservan las propiedades organolépticas y nutricionales de los alimentos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la cocina saludable y marco normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición, evolución y principios de la cocina saludable',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Inocuidad alimentaria y salud pública',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Las buenas prácticas de manufactura (BPM): concepto, objetivos y pilares',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Normativo sanitario en Colombia',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Identificación y Selección de materias primas para una cocina saludable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación de alimentos: método del plato de Harvard',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Criterios de calidad para frutas, verduras, proteínas y granos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'La receta estándar: control de calidad y costos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Almacenamiento y rotación de inventarios: método PEPS',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Equipos y utensilios en la cocina saludable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Clasificación de equipos mayores y menores',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Equipos clave para cocina saludable (vaporeras, air fryer, procesador)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Utensilios esenciales: cuchillos, tablas, sistemas de medición',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Diseño higiénico y materiales aprobados (normatividad y características)',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Manejo seguro de equipos: manuales, limpieza y prevención',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas básicas para la preparación de alimentos saludables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Protocolos de higiene y desinfección en BPM',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de corte en la cocina',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Métodos de cocción que preservan los nutrientes',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Principios de conservación de alimentos',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/96151560_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Abatidor de temperatura (Blast Chiller)',
      significado:
        'Equipo de refrigeración de alta potencia diseñado para enfriar rápidamente alimentos calientes, pasando de 70°c a 3°c en menos de 90 minutos, evitando la zona de peligro.',
    },
    {
      termino: 'BPM (Buenas Prácticas de Manufactura)',
      significado:
        'Conjunto de principios y procedimientos de higiene obligatorios para garantizar la inocuidad de los alimentos desde la recepción hasta el servicio, reglamentados por el decreto 3075 de 1997 y la resolución 2674 de 2013.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Transferencia de microorganismos patógenos de un alimento (generalmente crudo), superficie, utensilio o persona a otro alimento que se consume crudo o está ya cocido.',
    },
    {
      termino: 'Diseño higiénico',
      significado:
        'Conjunto de características de un equipo o utensilio (superficies lisas, ángulos redondeados, fácil desmontaje) que facilitan su limpieza y desinfección, previniendo la acumulación de suciedad y bacterias.',
    },
    {
      termino: 'ETA (Enfermedad Transmitida por Alimentos)',
      significado:
        'Enfermedad causada por el consumo de alimentos o agua contaminados con agentes biológicos (bacterias, virus, parásitos), químicos o físicos.',
    },
    {
      termino: 'Freidora de aire (Air fryer)',
      significado:
        'Electrodoméstico que cocina mediante la circulación de aire a alta velocidad, produciendo una textura crujiente similar a la fritura con una cantidad mínima de aceite.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'Garantía de que un alimento no causará daño al consumidor cuando se prepare y consuma según el uso al que se destina. Es el objetivo principal de las bpm.',
    },
    {
      termino: 'INVIMA',
      significado:
        'Instituto nacional de vigilancia de medicamentos y alimentos. Entidad del estado colombiano encargada de la inspección, vigilancia y control sanitario de alimentos, medicamentos y otros productos de interés en salud pública.',
    },
    {
      termino: 'Método PEPS (Primero en entrar, primero en salir)',
      significado:
        'Sistema de rotación de inventarios que asegura que los productos con fecha de vencimiento o ingreso más antiguo se utilicen antes que los recién llegados.',
    },
    {
      termino: 'Plato de Harvard',
      significado:
        'Guía visual de nutrición desarrollada por la escuela de salud pública de Harvard que recomienda llenar la mitad del plato con verduras y frutas, un cuarto con granos integrales y un cuarto con proteínas saludables.',
    },
    {
      termino: 'Receta estándar',
      significado:
        'Documento técnico que detalla de manera precisa y exacta los ingredientes, cantidades (en peso o volumen), procedimientos, equipos y rendimiento de una preparación culinaria, garantizando su consistencia y calidad.',
    },
    {
      termino: 'Zona de peligro',
      significado:
        'Rango de temperatura entre 5°c y 60°c donde las bacterias patógenas se multiplican a un ritmo acelerado (duplicándose cada 20 minutos).',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación de Chefs del Ecuador. (2018). <em>GUÍA DE TÉCNICAS CULINARIAS</em>.',
      link: 'https://www.nestle.com.ec/sites/g/files/pydnoa396/files/2019-07/guia%20de%20tecnicas%20culinarias%20digital%20%28002%29.pdf',
    },
    {
      referencia: 'Cadena, J., & Francisco, E. (2024). <em>Cocina Fría</em>.',
      link: 'https://intesud-repositoriodigital.edu.ec/jspui/handle/INTESUD/117',
    },
    {
      referencia:
        'Codex Alimentarius Commission. (2023). <em>Principios generales de higiene de los alimentos (CXC 1-1969)</em>. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) y Organización Mundial de la Salud (OMS).',
      link: 'https://www.fao.org/fao-who-codexalimentarius',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (24 de enero de 1979). <em>Ley 9 de 1979, por la cual se dictan Medidas Sanitarias</em>. Diario Oficial No. 35308.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1177',
    },
    {
      referencia:
        'Food and Agriculture Organization of the United Nations (FAO) & World Health Organization (WHO). (2023). <em>Análisis de riesgos de la inocuidad de los alimentos: Guía para autoridades nacionales de inocuidad de los alimentos</em>. FAO.',
    },
    {
      referencia:
        'Harvard T.H. Chan School of Public Health. (2015). <em>El plato para comer saludable</em>. The Nutrition Source.',
      link: 'https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/translations/spanish/',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (10 de diciembre de 1997). <em>Decreto 3075 de 1997, por el cual se reglamenta parcialmente la Ley 09 de 1979 y se dictan otras disposiciones</em>. Diario Oficial No. 43246.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (22 de julio de 2013). <em>Resolución 2674 de 2013, por la cual se reglamenta el artículo 14 de la Ley 09 de 1979</em>. Diario Oficial No. 48877.',
    },
    {
      referencia:
        'The Vollrath Company, L. L. C. (2012). <em>2012 CATÁLOGO INTERNACIONAL 2012</em>.',
      link: 'https://pdf.archiexpo.es/pdf/vollrath/2012-international-catalog/10482-64164.html',
    },
    {
      referencia:
        'Velasco, J. C. R. (2024, julio 18). <em>Técnicas básicas de cocina</em>. Sello Editorial Unicomfacauca.',
      link: 'https://selloeditorial.unicomfacauca.edu.co/Publicaciones/catalog/book/19',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yina Paola Castro Zarate',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
