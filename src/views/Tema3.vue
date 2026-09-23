<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Equipos y utensilios en la cocina saludable



    .bg-full-width.bg-fondo-04.px-5.py-4.px-lg-5
      img(src="@/assets/curso/tema3/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-11(data-aos="fade-right")
        p.banner-text La cocina es un taller de alta precisión y, como tal, sus herramientas deben ser conocidas, respetadas y dominadas. El uso incorrecto de un equipo no solo compromete la calidad e inocuidad del alimento, sino que es una causa principal de accidentes laborales. Este capítulo proporciona los conocimientos necesarios para clasificar, operar y mantener de manera segura y eficiente los equipos y utensilios de una cocina profesional orientada a la salud.

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Clasificación de equipos mayores y menores

    p.mb-4 En una cocina profesional, el equipamiento se clasifica en dos grandes categorías:

    

    .row.mb-4.mb-lg-5.justify-content-center
      .col-lg-6.mb-4.mb-lg-0
        .bg-fondo-03.p-4.br-15.mb-0.h-100
          .row.align-items-center.mb-0
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img02.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 <b>Equipo mayor</b>: son aquellos de gran tamaño, generalmente fijos o semi-fijos, que requieren instalación especial (eléctrica, a gas, ventilación o sistemas de drenaje). Constituyen la columna vertebral de la producción y su ubicación define el flujo de trabajo. Ejemplos: cocinas industriales (hornillas), hornos (combi, convección, rotativos), campanas extractoras, refrigeradores y congeladores industriales, lavavajillas, freidoras, marmitas, abatidores de temperatura (blast chiller). Su selección depende del volumen y tipo de producción del establecimiento.
    
      .col-lg-6.mb-4.mb-lg-0
        .bg-fondo-01.p-4.br-15.mb-0.h-100
          .row.align-items-center.mb-0
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img03.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 <b>Equipo menor o utensilios</b>: son elementos portátiles, manuales o eléctricos pequeños, que se utilizan para la preparación, corte, cocción, mezcla y servicio. Son la "extensión de las manos" del cocinero y requieren destreza y cuidado constante. Ejemplos: cuchillos, tablas de picar, ollas, sartenes, batidores, espátulas, cucharones, termómetros, balanzas, procesadores de alimentos, licuadoras, peladores, rayadores. El dominio del equipo menor es el sello distintivo de un profesional competente.  

    .bloque-texto-g.bg-color-04.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Conocer los equipos utilizados en la cocina permite seleccionar y aplicar adecuadamente las técnicas de preparación y conservación de los alimentos. En este componente web se presentan algunos equipos clave, sus principales características y aplicaciones, destacando su importancia para optimizar los procesos, conservar las propiedades de los alimentos y promover preparaciones más saludables y seguras.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-12
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Horno combi").align-content-center
            p.mb-0 Es el equipo más versátil de una cocina moderna. Permite cocinar con tres modos: calor seco (convección), vapor (100 °C) y una combinación de ambos. El modo vapor es ideal para cocción saludable, ya que preserva nutrientes, color y textura sin necesidad de grasas. Es perfecto para pescados, verduras, guarniciones y masas horneadas.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Parrilla / plancha").align-content-center
            p.mb-0 Permite una cocción rápida a altas temperaturas con muy poca grasa. El exceso de grasa de las carnes se drena. La plancha, con su superficie lisa, es ideal para salteados de verduras, huevos, pescados delicados, y para crear las reacciones de Maillard que aportan sabor sin necesidad de aceites pesados.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Equipos de refrigeración y congelación").align-content-center
            p.mb-0 Son el corazón de la conservación. Las neveras industriales deben mantener una temperatura estable entre 0°C y 4°C. Los congeladores, a -18°C o menos. Una correcta organización interna, con separación de alimentos y registro diario de temperaturas, es fundamental para evitar la zona de peligro y la contaminación cruzada.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Abatidor de temperatura (Blast Chiller)").align-content-center
            p.mb-0 Es un equipo de alta tecnología crucial para la seguridad alimentaria en cocinas de volumen. Su función es enfriar alimentos calientes (sopas, guisos, carnes cocidas) de 70°C a 3°C en menos de 90 minutos, "saltándose" la zona de peligro donde las bacterias se multiplican. Previene la proliferación de <em>Bacillus cereus</em> y <em>Clostridium perfringens</em> en comidas preparadas con anticipación.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Equipos clave para cocina saludable (vaporeras, air fryer, procesador)

    p.mb-4 Los equipos para cocina saludable facilitan la aplicación de técnicas de preparación que permiten conservar las características de los alimentos, optimizar los procesos y reducir el uso excesivo de grasas. A continuación, se presentan algunos de los equipos más utilizados y sus principales aplicaciones: 



    .row.mb-3.mb-lg-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img05.png")
      .col-lg-9.mb-0.mb-lg-0.order-2.order-lg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-04")
          div(titulo="Procesador de alimentos (Robot de cocina)")
            .row.align-items-center.justify-content-center
              .col-lg-12
                p.mb-0 Su función principal es procesar grandes volúmenes en segundos: picar, rallar, amasar, emulsionar. En cocina saludable, es la herramienta estrella para crear bases de salsas (como pesto sin queso, hummus de garbanzos), patés vegetales, granolas caseras sin azúcares añadidos, o para triturar verduras y crear cremas suaves sin necesidad de aditivos espesantes.

          div(titulo="Freidora de aire (Air fryer)")
            .row.align-items-center.justify-content-center
              .col-lg-12
                p.mb-0 Es una revolución para la cocina saludable. Funciona haciendo circular aire a muy alta velocidad, lo que produce una textura crujiente similar a la fritura tradicional, pero con una cantidad mínima de aceite (a veces solo una cucharadita). Ideal para "freír" papas, alitas de pollo, vegetales empanizados con pan integral, o incluso para "asar" nueces y semillas.

          div(titulo="Vaporera (Eléctrica o de olla)")
            .row.align-items-center.justify-content-center
              .col-lg-12
                p.mb-0 La cocción al vapor es el método más respetuoso con los nutrientes. Las vaporeras eléctricas permiten cocinar varios alimentos simultáneamente en bandejas independientes, sin que los sabores se mezclen y sin necesidad de vigilancia constante. Preservan vitaminas hidrosolubles, minerales, color y textura crujiente.

          div(titulo="Licuadora de alta velocidad")
            .row.align-items-center.justify-content-center
              .col-lg-12
                p.mb-0 Las licuadoras domésticas o industriales de alto rendimiento pueden romper las paredes celulares de frutas, verduras y semillas, liberando nutrientes de forma más eficiente. Son perfectas para crear smoothies densos y saciantes, sopas frías, leches vegetales caseras (de almendras, avena) y salsas emulsionadas sin usar aceite, aprovechando la textura cremosa del mismo vegetal (ej. una salsa de aguacate y cilantro).

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Utensilios esenciales: cuchillos, tablas, sistemas de medición.


    p.mb-5 Los utensilios manuales son la base de la operación diaria. Su correcta selección y uso son fundamentales para la eficiencia, la seguridad y la consistencia.


    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Cuchillería

    p.mb-4 Un buen juego de cuchillos es la inversión más importante de un cocinero. Los tipos básicos son:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta.bg-color-08.p-4.h-100.text-center
          img.img-85.mb-3(src='@/assets/curso/tema3/img08.png', alt='Cuchillo chef')
          p.mb-0 <b>Cuchillo chef</b> (o de cocina): hoja ancha y curva de 15 a 30 cm. Es el más versátil para picar, trocear y cortar en dados.

      .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta.bg-color-08.p-4.h-100.text-center
          img.img-85.mb-3(src='@/assets/curso/tema3/img08.png', alt='Cuchillo de puntilla')
          p.mb-0 <b>Cuchillo de puntilla</b> (o de pelar): hoja pequeña y recta de 6 a 10 cm. Ideal para pelar frutas, desvenar y hacer cortes de precisión.

      .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta.bg-color-08.p-4.h-100.text-center
          img.img-85.mb-3(src='@/assets/curso/tema3/img09.png', alt='Cuchillo de sierra')
          p.mb-0 <b>Cuchillo de sierra</b> (o de pan): hoja larga con filo dentado. Diseñado para cortar panes y pasteles sin desmigarlos.

      .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta.bg-color-08.p-4.h-100.text-center
          img.img-85.mb-3(src='@/assets/curso/tema3/img10.png', alt='Cuchillo fileteador')
          p.mb-0 <b>Cuchillo fileteador</b>: hoja larga, flexible y delgada. Perfecto para filetear pescados y carnes magras.

      .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta.bg-color-08.p-4.h-100.text-center
          img.img-85.mb-3(src='@/assets/curso/tema3/img11.png', alt='Chaira')
          p.mb-0 <b>Chaira</b> (o afilador de acero): vara de acero para realinear el filo del cuchillo entre usos. No afila, sino que endereza el borde.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Tablas de picar

    p.mb-4 Deben ser de materiales no porosos (polipropileno o polietileno de alta densidad). Es obligatorio usar un sistema de código de colores para prevenir la contaminación cruzada:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Figura 2.
          span Código de colores para la prevención de contaminación cruzada
        figure
          img(src="@/assets/curso/tema3/img12.svg", alt="La figura presenta un sistema de diferenciación por colores para organizar el uso de utensilios según el tipo y condición de los alimentos manipulados. La clasificación separa productos vegetales, carnes, aves, pescados y mariscos, alimentos preparados y otros productos de consumo habitual. Esta identificación facilita asignar superficies o utensilios específicos durante la preparación, contribuyendo a mantener un flujo de trabajo ordenado y a disminuir el riesgo de contaminación cruzada entre alimentos crudos y aquellos que están listos para consumir.")

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Sistemas de medición


    .container
      .row.mb-5.mb-lg-5.justify-content-center.align-items-center.bg-color-05
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema3/img14.png")
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-3
          p.mb-0 En cocina saludable, la precisión es clave para el control de porciones y el equilibrio nutricional. A diferencia de la cocina tradicional, donde se puede "cocinar al ojo", aquí cada gramo cuenta para garantizar que el plato final cumpla con los requerimientos nutricionales establecidos. Los sistemas de medición más utilizados incluyen la báscula digital, que mide en gramos y kilogramos con precisión de 1g; el termómetro de cocina, indispensable para verificar temperaturas internas de cocción y almacenamiento; y las cucharas y tazas medidoras, útiles para líquidos y pequeñas cantidades de especias. La báscula digital es, sin duda, la herramienta más importante, ya que elimina la subjetividad y permite estandarizar recetas, controlar costos y ofrecer información nutricional confiable al comensal.

    .row.justify-content-center.mb-4
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.bg-fondo-08.p-4.h-100.text-center
          img.img-85.mb-3.mx-auto(src='@/assets/curso/tema3/img16.png', alt='Cuchillo chef')
          h4.mb-2.text-center Cuchillo chef
          p.mb-0.text-center Útil para picar, trocear y cortar en dados todo tipo de alimentos. Mantenerlo siempre afilado. (aplicar el código de colores)

      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.bg-fondo-08.p-4.h-100.text-center
          img.img-85.mb-3.mx-auto(src='@/assets/curso/tema3/img17.png', alt='Sistema de código de colores')
          h4.mb-2.text-center Sistema de código de colores
          p.mb-0.text-center Verde para frutas/verduras, rojo para carnes rojas, amarillo para aves, azul para pescados, blanco para alimentos listos para el consumo (queso, pan, embutidos) y el marrón para cocinados.

      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.bg-fondo-08.p-4.h-100.text-center
          img.img-85.mb-3.mx-auto(src='@/assets/curso/tema3/img18.png', alt='Báscula digital')
          h4.mb-2.text-center Báscula digital
          p.mb-0.text-center Mide en gramos y kilogramos con precisión de 1g. Esencial para control de porciones y receta estándar.

      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.bg-fondo-08.p-4.h-100.text-center
          img.img-85.mb-3.mx-auto(src='@/assets/curso/tema3/img19.png', alt='Termómetro de sonda')
          h4.mb-2.text-center Termómetro de sonda
          p.mb-0.text-center Verifica temperaturas internas de cocción y temperaturas de almacenamiento. Insertar en la parte más gruesa del alimento.

    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Diseño higiénico y materiales aprobados (normatividad y características)

    p.mb-4 No cualquier olla o tabla de picar es apta para uso profesional. Los materiales y el diseño de los equipos y utensilios pueden ser una fuente de contaminación o una barrera efectiva contra ella. El concepto de diseño higiénico se refiere a un conjunto de características que facilitan la limpieza y desinfección, previniendo la acumulación de suciedad y la proliferación de microorganismos.

    p.mb-4 Las características del diseño higiénico incluyen:



    .row.justify-content-center.mb-5
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.bg-color-06
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema3/img20.png')})`}")
            .tarjeta-flip__contenido.p-4.text-center
              h4.mb-3 Superficies lisas y continuas
              p.mb-0 Sin poros, grietas, hendiduras o grabados donde pueda alojarse materia orgánica o bacterias. Ejemplo: una tabla de plástico lisa (apta) vs. una tabla agrietada (no apta).

      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.bg-color-06
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema3/img21.png')})`}")
            .tarjeta-flip__contenido.p-4.text-center
              h4.mb-3 Ángulos redondeados
              p.mb-0 Las esquinas en ángulo recto (90°) son "puntos muertos" difíciles de limpiar. El diseño higiénico prefiere radios de curvatura amplios (ángulos redondeados), que permiten una limpieza uniforme sin acumulación de suciedad.

      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.bg-color-06
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema3/img22.png')})`}")
            .tarjeta-flip__contenido.p-4.text-center
              h4.mb-3 Equipos fáciles de desmontar
              p.mb-0 Las piezas en contacto con alimentos deben poder desmontarse fácilmente, sin herramientas complejas, para permitir una limpieza profunda en zonas internas. Un equipo que no se puede desmontar es una fuente potencial de contaminación.

      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.bg-color-06
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require_src('@/assets/curso/tema3/img23.png')})`}")
            .tarjeta-flip__contenido.p-4.text-center
              h4.mb-3 Materiales no tóxicos
              p.mb-0 No deben transferir sustancias tóxicas ni absorber líquidos, olores o sabores. El acero inoxidable tipo 304 es el estándar por excelencia. Los plásticos de grado alimenticio y el silicón también son aceptables.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Diseño higiénico y materiales aprobados

    p.mb-4 La selección de materiales es fundamental para garantizar la higiene y seguridad en las cocinas profesionales. Conoce cuáles son los materiales aprobados para equipos y utensilios, así como aquellos que deben evitarse por sus posibles riesgos de contaminación, deterioro o reacción con los alimentos.

    .container
      .titulo-con-imagen_2.mb-3(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Materiales aprobados
          
    .row.mb-4.justify-content-center.align-items-center
      .col-lg-9.order-2.order-lg-1
        ul.lista-ul.mb-0
          li.d-flex.mb-3
            i.fas.fa-circle.fa-xs.bg-color-07.me-2
            span <b>Acero inoxidable:</b> el estándar de oro. Excelente resistencia a la corrosión no reacciona con alimentos ácidos, superficie lisa y durable. Es el material obligatorio para mezones, ollas y la mayoría de los equipos de cocina profesional.
          li.d-flex.mb-3
            i.fas.fa-circle.fa-xs.bg-color-07.me-2
            span <b>Plásticos de grado alimenticio:</b> como polipropileno (PP) y polietileno de alta densidad (HDPE). Livianos, resistentes a impactos y químicos. Se usan en tablas de colores, recipientes y utensilios. Deben reemplazarse si presentan rayaduras profundas o decoloración.
          li.d-flex.mb-0
            i.fas.fa-circle.fa-xs.bg-color-07.me-2
            span <b>Silicón de grado alimenticio:</b> flexible, resistente a un amplio rango de temperaturas (-40°C a 230°C), no poroso y antiadherente. Ideal para moldes, espátulas y tapas reutilizables.

      .col-lg-3.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img24.png", alt="Materiales aprobados")

    .container
      .titulo-con-imagen_2.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Materiales a evitar
          
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.order-2.order-lg-2
        ul.lista-ul.mb-0
          li.d-flex.mb-3
            i.fas.fa-circle.fa-xs.bg-color-07.me-2
            span <b>Madera sin tratar:</b> es porosa, absorbe humedad y puede acumular residuos y microorganismos en sus grietas. Su limpieza y desinfección son más difíciles, por lo que debe evitarse en áreas de preparación de alimentos de alto riesgo.
          li.d-flex.mb-3
            i.fas.fa-circle.fa-xs.bg-color-07.me-2
            span <b>Aluminio:</b> puede reaccionar con alimentos ácidos como tomate, limón y vinagre, favoreciendo la corrosión, alteración del sabor y transferencia de componentes al alimento. Su uso debe limitarse según el tipo de alimento y las condiciones de contacto.
          li.d-flex.mb-0
            i.fas.fa-circle.fa-xs.bg-color-07.me-2
            span <b>Cobre y latón:</b> en contacto directo con alimentos y sin un recubrimiento adecuado, pueden liberar componentes metálicos que representan un riesgo para la seguridad alimentaria. Su uso está restringido a aplicaciones específicas y deben mantenerse en buen estado.

      .col-lg-3.col-md-8.order-1.order-lg-1.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img25.png", alt="Materiales a evitar")

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Manejo seguro de equipos: manuales, limpieza y prevención.

    p.mb-5 La operación de cualquier equipo, desde un simple cuchillo hasta un horno combi, conlleva riesgos. La Ley 1562 de 2012 en Colombia y las normativas de seguridad y salud en el trabajo (SST) obligan a los empleadores a capacitar a su personal en el manejo seguro de equipos. El aprendiz debe interiorizar que la prevención es la mejor herramienta.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Antes de operar cualquier equipo:


    .row.justify-content-center.mb-5
      .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.px-5.py-3.h-100.align-content-center
          .tarjeta-numerada__numero
            .h2 A
          p.text-center.mb-2 <b>Leer el manual de funcionamiento:</b> es la obligación más importante. El manual contiene instrucciones específicas de instalación, operación segura, límites de uso y procedimientos de limpieza.

      .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-2.px-5.py-3.h-100.align-content-center
          .tarjeta-numerada__numero
            .h2 B
          p.text-center.mb-2 <b>Inspección visual:</b> verificar que el equipo esté limpio, que los cables y enchufes no estén desgastados o pelados (en equipos eléctricos), que las protecciones de seguridad (guardas) estén en su lugar.

      .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-3.px-5.py-3.h-100.align-content-center
          .tarjeta-numerada__numero
            .h2 C
          p.text-center.mb-2 <b>Capacitación específica:</b> no se debe operar un equipo sin haber recibido la formación adecuada sobre sus riesgos particulares.

    .container
      .titulo-con-imagen_2.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Durante el uso:


    .bg-fondo-03.p-4.br-15.mb-5
      .row.align-items-center.mb-0
        .col-lg-auto.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema3/img26.svg", style="max-width: 90px").mx-auto
        .col-lg.order-1
          p.mb-0 
            ul.lista-ul.mb-0
              li.d-flex.mb-1
                i.fas.fa-circle.fa-xs.bg-color-07.me-2
                span No forzar nunca el equipo ni exceder su capacidad de diseño.
              li.d-flex.mb-1
                i.fas.fa-circle.fa-xs.bg-color-07.me-2
                span Utilizar únicamente los accesorios y aditamentos diseñados por el fabricante.
              li.d-flex.mb-1
                i.fas.fa-circle.fa-xs.bg-color-07.me-2
                span Mantener las manos, cabello, mangas de la chaqueta y utensilios alejados de las partes móviles (cuchillas, engranajes, batidores).
              li.d-flex.mb-0
                i.fas.fa-circle.fa-xs.bg-color-07.me-2
                span Nunca dejar un equipo en funcionamiento sin supervisión (especialmente una freidora o un horno).

    .container
      .titulo-con-imagen_2.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Después del uso:

          


    .bg-full-width.bg-fondo-05.px-5.py-4.px-lg-5.mb-4
      .row.mb-0.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/img27.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/img28.svg' alt='Desconectar', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Desconectar
              p.text-center.mb-0 Siempre desconectar el equipo de la fuente de energía (eléctrica o gas) antes de comenzar la limpieza.

            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/img29.svg' alt='Limpiar según protocolo', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Limpiar según protocolo
              p.text-center.mb-0 Seguir el procedimiento de limpieza y desinfección específico para ese equipo (ej. desmontar las piezas lavables, evitar chorros de agua directos a partes eléctricas).

            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/img30.svg' alt='Almacenar en lugar seguro', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Almacenar en lugar seguro
              p.text-center.mb-0 Los utensilios cortopunzantes (cuchillos) deben guardarse en su soporte magnético o en estuches, nunca sueltos en un cajón. Los equipos móviles deben guardarse con el cable enrollado sin nudos y lejos de fuentes de calor.

    //- p.mb-4.mt-5 El uso de equipos y utensilios de cocina requiere aplicar medidas de seguridad que permitan prevenir cortes, quemaduras y otros accidentes durante la preparación de los alimentos. Reconocer los riesgos asociados con elementos cortopunzantes, superficies calientes y equipos de cocción facilita adoptar prácticas de manipulación segura. A continuación, se presentan algunas situaciones que requieren especial atención y prevención en la cocina:

    //- .row.justify-content-center.mb-4
    //-   .col-md-6.col-lg-3.mb-4.mb-lg-0
    //-     .tarjeta.bg-fondo-08.p-4.h-100.text-center
    //-       h4.mb-2.text-center Con cuchillos
    //-       p.mb-0.text-center Nunca intentar atrapar un cuchillo que se cae. No dejar cuchillos sumergidos en agua con jabón (invisibles y peligrosos). Usar la técnica de "mano en garra" para guiar el alimento.

    //-   .col-md-6.col-lg-3.mb-4.mb-lg-0
    //-     .tarjeta.bg-fondo-08.p-4.h-100.text-center
    //-       h4.mb-2.text-center Con aceite caliente (freidoras)
    //-       p.mb-0.text-center Secar bien el alimento antes de introducirlo para evitar salpicaduras. Introducir el alimento suavemente, dejándolo caer desde la superficie. Tener una tapa y un extintor clase K cerca.

    //-   .col-md-6.col-lg-3.mb-4.mb-lg-0
    //-     .tarjeta.bg-fondo-08.p-4.h-100.text-center
    //-       h4.mb-2.text-center Con superficies calientes (hornos, planchas)
    //-       p.mb-0.text-center Usar siempre paños secos o guantes térmicos. Un paño húmedo conduce el calor y puede causar una quemadura por vapor. Establecer señalización de "superficie caliente".

    //-   .col-md-6.col-lg-3.mb-4.mb-lg-0
    //-     .tarjeta.bg-fondo-08.p-4.h-100.text-center
    //-       h4.mb-2.text-center Con partes móviles (batidoras, procesadores)
    //-       p.mb-0.text-center Nunca introducir las manos, cucharas o espátulas mientras el equipo está en movimiento. Esperar siempre a que se detenga por completo. Usar las baquetas o impulsores adecuados.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
