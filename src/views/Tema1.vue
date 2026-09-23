<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la cocina saludable y marco normativo.

    .bloque-texto-g.bg-color-02.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para construir una casa sólida, se necesita primero una base firme. En la cocina saludable, esa base la constituyen los principios conceptuales y el marco legal que la rigen. Sin estos cimientos, cualquier preparación, por más creativa o estética que sea, corre el riesgo de ser insegura o nutricionalmente deficiente. 

    p.mb-4 Este capítulo no solo define qué es la cocina saludable, sino que explica por qué es crucial y bajo qué reglas debe operar en Colombia, protegiendo así al consumidor y al establecimiento, y sentando las bases para un desempeño profesional ético y responsable.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Definición, evolución y principios de la cocina saludable.

    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img02.png")
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        .bg-fondo-03.p-4.br-15.mb-3
          p.mb-0(data-aos="fade-right") El término "cocina saludable" ha evolucionado. En el pasado, se asociaba erróneamente con comidas insípidas, "aburridas" o exclusivamente hervidas. Hoy, gracias a los avances en la ciencia de la nutrición y la tecnología culinaria, sabemos que es todo lo contrario. 

        p.mb-3(data-aos="fade-right") La cocina saludable es un enfoque culinario que prioriza el uso de ingredientes frescos, mínimamente procesados y de alta calidad nutricional, aplicando técnicas de cocción y preparación que preservan o incluso potencian las propiedades benéficas de los alimentos, mientras se limita el uso de ingredientes asociados con efectos negativos para la salud, como grasas saturadas y trans, azúcares añadidos y sodio en exceso (OMS, 2026).
      
        p.mb-0 Los principios que rigen la cocina saludable son claros y operativos:
        
        
    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img03.png")
      .col-lg-9.mb-0.mb-lg-0.order-2.order-lg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-04")
          div(titulo="Bio-disponibilidad y diversidad")
            .row.align-items-center.justify-content-center
              .col-lg-12
                p.mb-3 Se busca un plato colorido y variado, que garantice un amplio espectro de vitaminas, minerales y fitoquímicos. Como veremos, el "plato de Harvard" es una excelente guía visual para lograr esto.
                p.mb-0 <b>Ejemplo:</b> preparar una ensalada de espinaca, tomate y pimentón acompañado con lentejas y unas gotas de limón.

          div(titulo="Mínima intervención perjudicial")
            .row.align-items-center.justify-content-center
              .col-lg-12
                p.mb-3 Se priorizan técnicas de cocción que ayudan a conservar nutrientes sensibles al calor, como las vitaminas C y del complejo B. Métodos como el vapor, escalfado y salteado rápido resultan apropiados, mientras se reducen frituras y cocciones prolongadas.
                p.mb-0 <b>Ejemplo:</b> cocinar brócoli al vapor hasta alcanzar una textura agradable, evitando hervirlo durante largos periodos en abundante agua.

          div(titulo="Máximo sabor natural")
            .row.align-items-center.justify-content-center
              .col-lg-12
                p.mb-3 Se busca potenciar el sabor natural de los alimentos mediante el uso de hierbas aromáticas, especias y ácidos naturales, disminuyendo la dependencia de sal, azúcar y salsas procesadas.
                p.mb-0 <b>Ejemplo:</b> preparar pechuga de pollo con ajo, limón, pimienta y romero, aprovechando estos ingredientes para realzar su sabor sin recurrir a productos comerciales con alto contenido de sodio.

          div(titulo="Inocuidad como requisito previo")
            .row.align-items-center.justify-content-center
              .col-lg-12
                p.mb-3 Un plato saludable debe garantizar tanto su calidad nutricional como su inocuidad. La presencia de microorganismos patógenos puede convertir una preparación en un riesgo para la salud, por lo que aplicar las BPM resulta indispensable.
                p.mb-0 <b>Ejemplo:</b> utilizar utensilios separados para pollo crudo y vegetales, además de lavarse las manos y limpiar las superficies antes y después de preparar alimentos.

    p.mb-5 Una vez comprendidos los principios que orientan la cocina saludable, es importante reconocer cómo estos se integran en la práctica culinaria cotidiana. Para ello, se establecen diferentes pilares que orientan la selección, manipulación y preparación de los alimentos, buscando conservar su calidad, favorecer preparaciones equilibradas y garantizar condiciones adecuadas de inocuidad. La siguiente figura presenta de manera integrada los principales pilares que sustentan este enfoque.

    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-12.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Pilares de la cocina saludable
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema1/img05.png", alt="La figura muestra de manera circular los pilares de la cocina saludable mediante la integración de criterios relacionados con la calidad de los alimentos, la preparación equilibrada, el uso adecuado de métodos culinarios y la aplicación de prácticas higiénicas durante la manipulación. Las ilustraciones representan alimentos frescos, utensilios, equipos y acciones propias de la cocina, destacando que una alimentación saludable depende tanto de la elección de los ingredientes como de su correcta transformación y manejo.")
        img.mb-2.d-block.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema1/img06.png", alt="La figura muestra de manera circular los pilares de la cocina saludable mediante la integración de criterios relacionados con la calidad de los alimentos, la preparación equilibrada, el uso adecuado de métodos culinarios y la aplicación de prácticas higiénicas durante la manipulación. Las ilustraciones representan alimentos frescos, utensilios, equipos y acciones propias de la cocina, destacando que una alimentación saludable depende tanto de la elección de los ingredientes como de su correcta transformación y manejo.")
        figcaption Nota. Adaptado de la OMS (2026), Harvard T.H. Chan School of Public Health (2015) y lineamientos del Codex Alimentarius (2023).

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Inocuidad alimentaria y salud pública.


    .container
      .row.mb-4.mb-lg-4.justify-content-center.align-items-center.bg-color-05
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema1/img07.png")
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-3
          p.mb-0 Un alimento puede ser saludable en términos nutricionales, pero si no es inocuo; es decir, si representa un riesgo para la salud del consumidor por la presencia de microorganismos patógenos, sustancias tóxicas o cuerpos extraños, entonces no es apto para el consumo. La inocuidad alimentaria es la garantía de que un alimento no causará daño al consumidor cuando se prepare y consuma según el uso al que se destine (Codex Alimentarius, 2023).

    p.mb-2 La falta de inocuidad se manifiesta a través de las Enfermedades Transmitidas por Alimentos (ETA). Estas enfermedades, que pueden ir desde una simple molestia gastrointestinal hasta cuadros graves que requieren hospitalización o incluso la muerte, son un problema de salud pública a nivel mundial. La OMS estima que cada año, una de cada diez personas enfermas por consumir alimentos contaminados. 

    p.mb-5 En Colombia, el Instituto Nacional de Salud (INS) realiza una vigilancia constante, reportando brotes de ETA asociados a lugares tan diversos como restaurantes escolares, comedores  comunitarios y servicios de catering, lo que demuestra que el riesgo está presente en todo tipo de establecimientos. Entre los agentes causales de ETA, tenemos: 


    .row.justify-content-center.mb-3
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img08.png", alt="Peligros biológicos")
          .crd_hover_txt--body
            h4.mb-3 Peligros biológicos
            p.mb-0 Incluyen bacterias como <em>Salmonella</em>, <em>E. coli</em> y <em>Listeria</em>, además de virus y parásitos. Pueden encontrarse en alimentos crudos o mal cocidos, agua contaminada y propagarse mediante prácticas inadecuadas de higiene durante la manipulación de alimentos.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img09.png", alt="Peligros químicos")
          .crd_hover_txt--body
            h4.mb-3 Peligros químicos
            p.mb-0 Incluyen residuos de pesticidas, metales pesados, alérgenos no declarados y productos de limpieza. Su prevención requiere seleccionar proveedores confiables, lavar frutas y verduras, y almacenar los productos químicos separados de los alimentos para evitar contaminación.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-0.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img10.png", alt="Peligros físicos")
          .crd_hover_txt--body
            h4.mb-3 Peligros físicos
            p.mb-0 Son objetos extraños presentes accidentalmente en los alimentos que pueden provocar cortes, asfixia o lesiones dentales. Ejemplos: fragmentos de vidrio o metal, piedras, huesos, espinas, cabellos y joyas provenientes del entorno o del manipulador.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Las buenas prácticas de manufactura (BPM): concepto, objetivos y pilares.

    .row.mb-4.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
        p.mb-0 Las Buenas Prácticas de Manufactura (BPM) son el conjunto de principios y procedimientos fundamentales que deben ser aplicados para garantizar que los alimentos se fabriquen, manipulen y almacenen de forma segura y consistente (Decreto 3075 de 1997). Son la "primera línea de defensa" contra la contaminación. Su aplicación no es opcional: es una obligación legal y ética.
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .bg-fondo-03.p-4.br-15.mb-0
          p.mb-2 Los objetivos de las BPM son claros:
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-check-circle.fa-xs(style="color: #9DDF71;")
              p.mb-0 Prevenir la contaminación de los alimentos en todas las etapas del proceso.
            li.d-flex.mb-0
              i.fas.fa-check-circle.fa-xs(style="color: #9DDF71;")
              p.mb-0 Reducir la probabilidad de ocurrencia de Enfermedades Transmitidas por Alimentos (ETA).
            li.d-flex.mb-1
              i.fas.fa-check-circle.fa-xs(style="color: #9DDF71;")
              p.mb-0 Asegurar que el producto final sea inocuo, saludable y apto para el consumo humano.

          p.mb-0 Para lograr estos objetivos, las BPM se estructuran en cuatro pilares fundamentales, que deben ser entendidos y aplicados de manera integral:
          
    .bg-full-width.bg-fondo-05.px-5.py-4.px-lg-5.mb-5
      .row.mb-0.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema1/img12.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img13.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Higiene personal
              p.text-center.mb-0 El manipulador de alimentos (cocinero) es la principal fuente de contaminación. Este debe cumplir con una serie de criterios que pasan primero por cumplir con el lavado de manos frecuente (5 momentos), uñas cortas, cabello recogido, uniforme limpio y exclusivo, además tiene el deber de reportar cualquier síntoma de enfermedad.

            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img14.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Higiene de equipos y utensilios
              p.text-center.mb-0 Las superficies, tablas, cuchillos y equipos deben lavarse y desinfectarse antes y después de cada uso. Materiales lisos, no porosos, fáciles de limpiar (acero inoxidable). Tablas con código de colores para evitar contaminación cruzada.

            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img15.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Higiene del ambiente e instalaciones
              p.text-center.mb-0 Pisos, paredes y techos de materiales lavables, sin grietas. Adecuada ventilación, iluminación y control de plagas. Áreas separadas para alimentos crudos y cocidos, y para recepción y disposición de residuos.

            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img16.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Higiene en los procesos
              p.text-center.mb-0 Recepción con control de temperatura, almacenamiento PEPS, separación física de crudos y cocidos, cocción a temperaturas seguras (pollo a 74°C), enfriamiento rápido para evitar zona de peligro (5°C-60°C).

   
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4 La higiene de las manos es fundamental para garantizar la inocuidad y prevenir la contaminación de los alimentos. Su lavado correcto debe realizarse en momentos clave durante la preparación, especialmente al cambiar de actividad o entrar en contacto con posibles contaminantes. A continuación, se presenta algunas de las situaciones en la que esta práctica resulta indispensable.

    
    .row.justify-content-center.mb-5
      .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-4.h-100.align-content-center
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.mb-2.p-2 
            b Antes de iniciar
          p.text-center.mb-0 Para eliminar los contaminantes traídos del exterior.

      .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-2.p-4.h-100.align-content-center
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.mb-2.p-2 
            b Después de usar el baño
          p.text-center.mb-0 La medida más importante para prevenir la contaminación fecal-oral.

      .col-md-6.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-3.p-4.h-100.align-content-center
          .tarjeta-numerada__numero
            .h2 3
          p.text-center.mb-2.p-2 
            b Después de manipular crudos
          p.text-center.mb-0 Para evitar transferir patógenos de carnes, pollo o pescado a otros alimentos.

      .col-md-6.col-lg-4.col-xl.mb-lg-0.mb-xl-0.mb-4
        .tarjeta-numerada.color-4.p-4.h-100.align-content-center
          .tarjeta-numerada__numero
            .h2 4
          p.text-center.mb-2.p-2 
            b Después de tocar material contaminado
          p.text-center.mb-0 Como basura, dinero, trapos sucios o productos de limpieza.

      .col-md-6.col-lg-4.col-xl.mb-lg-0.mb-xl-0.mb-0
        .tarjeta-numerada.color-5.p-4.h-100.align-content-center
          .tarjeta-numerada__numero
            .h2 5
          p.text-center.mb-2.p-2 
            b Después de tocarse cara / cabello
          p.text-center.mb-0 La piel y mucosas son reservorios de bacterias como <em>Staphylococcus aureus</em>.


    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Marco normativo sanitario en Colombia.

    
    .bg-full-width.bg-fondo-04.px-5.py-4.px-lg-5
      img(src="@/assets/curso/tema1/img17.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-11(data-aos="fade-right")
        p.banner-text La operación de una cocina profesional en Colombia no es un acto de libre albedrío. Está estrictamente regulada por un conjunto de normas que protegen la salud pública y establecen las condiciones sanitarias mínimas para la manipulación de alimentos. Este marco normativo abarca desde la infraestructura y los equipos hasta la higiene del personal y los procedimientos operativos. Conocerlo a profundidad es el primer paso para cumplirlo y operar de manera legal y segura, evitando sanciones y protegiendo tanto al consumidor como al prestigio del establecimiento.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 1.
          span Principales normas del marco normativo sanitario colombiano
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. Adaptado de la Ley 9 de 1979, el Decreto 3075 de 1997, la Resolución 2674 de 2013 y el INVIMA.
            thead
              tr
                th Norma
                th Año
                th Descripción y Aportes
                th Aplicación Práctica en la Cocina
            tbody
              tr
                td Ley 9 de 1979 (Código Sanitario Nacional)
                td 1979
                td Es la "constitución" de la salubridad en Colombia. Establece los principios generales y las competencias del Estado para regular todo lo relacionado con la salud pública, incluyendo el control sanitario de los alimentos, el agua potable, la prevención de plagas, etc.
                td Es la base legal que faculta al gobierno para crear decretos y resoluciones más específicos. En la cocina, fundamenta la obligación de contar con agua potable, sistemas de alcantarillado y control de plagas.
              tr
                td Decreto 3075 de 1997
                td 1997
                td Es el reglamento técnico específico de las BPM en Colombia. Traduce los principios de la Ley 9 en requisitos operativos concretos y verificables para todo establecimiento de alimentos. Define las condiciones de infraestructura, equipos, personal, saneamiento, almacenamiento y transporte.
                td Es la "biblia" del manipulador. Define cómo deben ser las paredes, pisos y techos, cómo y cada cuánto limpiar, las temperaturas de almacenamiento, y las prohibiciones para el personal (no fumar, no comer en áreas de trabajo). Es el documento de referencia para las inspecciones sanitarias.
              tr
                td Resolución 2674 de 2013
                td 2013
                td Actualmente, es la norma de mayor vigencia en materia de BPM. Complementa, actualiza y en algunos aspectos reemplaza al Decreto 3075. Establece requisitos más exigentes, especialmente en lo relacionado con la documentación de procedimientos (protocolos escritos de limpieza, capacitación, etc.) y el control de temperaturas en toda la cadena de frío.
                td Exige que la cocina tenga procedimientos escritos para limpieza y desinfección. Refuerza la obligación de contar con registros de temperaturas de neveras, congeladores y de los procesos de cocción y enfriamiento.
              tr
                td INVIMA (Instituto Nacional de Vigilancia de Medicamentos y Alimentos)
                td ---
                td Es la entidad estatal encargada de la inspección, vigilancia y control sanitario de alimentos (y otros productos). A nivel nacional, es la máxima autoridad. Las secretarías de salud departamentales y municipales actúan como sus brazos ejecutores a nivel local.
                td Realiza las visitas de inspección a las cocinas. Otorga o niega el Registro Sanitario para productos envasados y la Licencia Sanitaria de funcionamiento para los establecimientos. Puede imponer sanciones, desde multas hasta el cierre definitivo.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
