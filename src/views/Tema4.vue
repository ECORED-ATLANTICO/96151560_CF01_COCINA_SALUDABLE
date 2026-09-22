<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas básicas para la preparación de alimentos saludables. 

  
    .bloque-texto-g.bg-color-04.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez que se conocen los fundamentos de la cocina saludable, se domina la selección de materias primas y se identifican los equipos y utensilios, llega el momento de aplicar las técnicas que transforman los ingredientes en preparaciones seguras, nutritivas y atractivas. Este capítulo integra todos los conocimientos previos y los pone en práctica a través de procedimientos estandarizados de higiene, corte, cocción y conservación. 
  
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Protocolos de higiene y desinfección en BPM 
  
  
    
    .bg-full-width.bg-fondo-04.px-5.py-4.px-lg-5
      img(src="@/assets/curso/tema4/img02.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-11(data-aos="fade-right")
        p.banner-text La higiene no es un acto aislado, sino un sistema compuesto por dos etapas diferenciadas pero complementarias: limpieza (remoción de la suciedad visible) y desinfección (reducción de la carga de microorganismos a niveles seguros).
  
  
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 3.
          span Protocolo para limpieza y desinfección de superficies y utensilios (tren de lavado de 5 pasos)
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. Adaptado de los lineamientos del SENA (2026).
            thead
              tr
                th Paso
                th Acción
                th Detalle
            tbody
              tr
                td 1. Raspar y enjuagar
                td Retirar restos grandes de comida.
                td Usar una espátula o rasquet. Enjuagar con agua tibia.
              tr
                td 2. Lavar
                td Aplicar detergente y fregar.
                td Usar agua caliente (43°C - 49°C) y un cepillo o esponja designada.
              tr
                td 3. Enjuagar
                td Remover residuos de detergente.
                td Con agua tibia limpia, asegurando que no quede jabón.
              tr
                td 4. Sanitizar (Desinfectar)
                td Aplicar solución desinfectante aprobada.
                td Ej. cloro a 100 ppm o amonio cuaternario. Respetar tiempo de contacto (1-2 min).
              tr
                td 5. Secar al aire
                td Dejar secar naturally.
                td No usar trapos que puedan recontaminar. Secar en escurridor limpio.

    .container
      .titulo-con-imagen_2.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Protocolo para desinfección de frutas y verduras

    p.mb-4 Las frutas y verduras, especialmente las de hoja verde y las que se consumen crudas, pueden ser vehículo de patógenos como <em>E. coli</em> o <em>Salmonella</em>. Para desinfectarlas se recomienda lo siguiente:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 4.
          span Protocolo para desinfección de frutas y verduras
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. Adaptado de lineamientos de BPM (Resolución 2674 de 2013).
            thead
              tr
                th Paso
                th Acción
                th Detalle
            tbody
              tr
                td 1. Lavar
                td Remover tierra y residuos visibles.
                td Bajo chorro de agua potable, frotar suavemente con las manos o un cepillo suave.
              tr
                td 2. Desinfectar
                td Sumergir en solución clorada.
                td Mezclar 2 gotas de cloro por cada litro de agua (1 cucharadita por 5 litros). Dejar reposar 10-15 minutos.
              tr
                td 3. Enjuagar
                td Retirar exceso de cloro.
                td Enjuagar abundantemente con agua potable.
              tr
                td 4. Secar
                td Eliminar el exceso de agua.
                td Usar centrífuga de verduras o secar con papel de cocina desechable.

    .bg-fondo-09.p-4.br-15.mb-5
      .row.align-items-center.mb-0
        .col-lg-auto
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/img04.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 La adecuada limpieza y sanitización de utensilios y superficies es fundamental para prevenir la contaminación y garantizar la inocuidad de los alimentos. Para lograrlo, se debe seguir una secuencia ordenada que permita eliminar residuos, remover suciedad y reducir la presencia de microorganismos, como se presenta a continuación:

    .row.justify-content-center.mt-4.mb-3.mb-lg-5
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta.bg-color-06.p-4.h-100.text-center
          img.img-85.mb-4.mx-auto(src='@/assets/curso/tema4/img05.png', alt='Raspar y enjuagar')
          h4.mb-3.text-center Raspar y enjuagar.
          p.mb-0.text-center Eliminar sólidos.

      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta.bg-color-08.p-4.h-100.text-center
          img.img-85.mb-4.mx-auto(src='@/assets/curso/tema4/img06.png', alt='Lavar')
          h4.mb-3.text-center Lavar.
          p.mb-0.text-center Detergente + agua caliente (+ acción mecánica).

      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta.bg-color-12.p-4.h-100.text-center
          img.img-85.mb-4.mx-auto(src='@/assets/curso/tema4/img07.png', alt='Enjuagar')
          h4.mb-3.text-center Enjuagar.
          p.mb-0.text-center Remover detergente.

      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta.bg-color-10.p-4.h-100.text-center
          img.img-85.mb-4.mx-auto(src='@/assets/curso/tema4/img08.png', alt='Sanitizar')
          h4.mb-3.text-center Sanitizar.
          p.mb-0.text-center Agente químico (cloro, amonio cuaternario). Respetar tiempo de contacto.

      .col-md-6.col-lg.mb-0.mb-lg-0
        .tarjeta.bg-color-03.p-4.h-100.text-center
          img.img-85.mb-4.mx-auto(src='@/assets/curso/tema4/img09.png', alt='Secar al aire')
          h4.mb-3.text-center Secar al aire.
          p.mb-0.text-center Evitar recontaminación.



    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Técnicas básicas de corte en la cocina.

    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img10.png")
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        .bg-fondo-03.p-4.br-15.mb-3
          p.mb-0(data-aos="fade-right") El dominio del cuchillo es la destreza fundamental. Un corte uniforme no es solo estética; tiene implicaciones prácticas: permite una cocción pareja, un control preciso de los tiempos, una mejor integración de sabores en ensaladas o salteados, y una presentación profesional que realza la experiencia del comensal.

        p.mb-0(data-aos="fade-right") Más allá de su forma y dimensiones, los cortes aplicados a frutas y verduras cumplen una función importante dentro de la preparación culinaria, ya que influyen en el tiempo y uniformidad de la cocción, la textura, la presentación y la facilidad de consumo. La elección del corte debe responder a las características del alimento, la técnica de cocción y el resultado esperado, permitiendo aprovechar adecuadamente los ingredientes y mantener una presentación atractiva y equilibrada. A continuación, se muestran los tipos de corte más comunes:



    .bg-full-width.bg-fondo-07.p-5.mb-5
      SlyderA(tipo="b").bg-color-white.p-4.tarjeta
        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema4/img11.png", alt="Corte Juliana", data-aos="zoom-in")
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-2 Juliana (o en fósforos)
              p.mb-2 Corte en tiras finas, alargadas y uniformes, que favorece una cocción rápida y homogénea. Se utiliza frecuentemente en zanahorias, pimentones y otras verduras para ensaladas, salteados, sopas, guarniciones y preparaciones orientales.
              p.mb-0 <b>Dimensiones:</b> 3-4 cm x 2 mm.

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema4/img12.png", alt="Corte Brunoise", data-aos="zoom-in")
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-2 Brunoise
              p.mb-2 Corte en cubos muy pequeños y uniformes, obtenido generalmente después de realizar una juliana. Se utiliza frecuentemente en cebolla, zanahoria y pimentón para elaborar sofritos, salsas, rellenos, vinagretas, sopas y diferentes guarniciones.
              p.mb-0 <b>Dimensiones:</b> 2-3 mm x 2-3 mm.

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema4/img13.png", alt="Corte Bastón", data-aos="zoom-in")
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-2 Bastón
              p.mb-2 Corte en piezas rectangulares, alargadas y de mayor grosor que la juliana, procurando mantener dimensiones uniformes. Se utiliza frecuentemente en papas, zanahorias y otras verduras destinadas a guarniciones, aperitivos, frituras, horneados y salteados.
              p.mb-0 <b>Dimensiones:</b> 5-6 cm x 7 mm.

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema4/img14.png", alt="Corte Chiffonade", data-aos="zoom-in")
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-2 Chiffonade
              p.mb-2 Corte aplicado principalmente a vegetales de hoja y hierbas frescas, que consiste en enrollarlos y cortarlos transversalmente en tiras finas. Se utiliza frecuentemente en lechugas, espinaca, y otras hojas para ensaladas, sopas y decoraciones.
              p.mb-0 <b>Dimensiones:</b> tiras finas de ancho variable.

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema4/img15.png", alt="Corte Macedonia", data-aos="zoom-in")
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-2 Macedonia
              p.mb-2 Corte en cubos pequeños y uniformes, de mayor tamaño que la brunoise, que facilita combinar diferentes ingredientes. Se utiliza frecuentemente en frutas y verduras para ensaladas, guarniciones, preparaciones frías, postres y mezclas variadas.
              p.mb-0 <b>Dimensiones:</b> 5-8 mm x 5-8 mm.

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema4/img16.png", alt="Corte Rodajas o rondelle", data-aos="zoom-in")
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-2 Rodajas o rondelle
              p.mb-2 Corte transversal que produce piezas circulares u ovaladas de grosor uniforme, especialmente en alimentos de forma cilíndrica. Se utiliza frecuentemente en zanahorias, pepinos, calabacines y frutas para ensaladas, guarniciones, salteados, horneados y decoraciones.
              p.mb-0 <b>Dimensiones:</b> 2-5 mm de grosor.

              
    figure.mb-3
      img(src="@/assets/curso/intro/img04.png", alt="").mb-0

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3	Métodos de cocción que preservan los nutrientes

    
    .bg-full-width.bg-fondo-04.px-5.py-4.px-lg-5
      img(src="@/assets/curso/tema4/img17.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-11(data-aos="fade-right")
        p.banner-text No existe un único método de cocción adecuado para todos los alimentos, ya que su elección depende de las características del ingrediente y del resultado culinario esperado. Algunos métodos permiten reducir pérdidas de nutrientes, limitar la incorporación de grasas y conservar mejor el sabor, color y textura natural.  La elección del método de cocción es la decisión más importante para determinar el perfil nutricional final de un plato. Los métodos "secos" y rápidos o con humedad son los preferidos.

    p.mb-4 A continuación, se presentan los principales métodos que pueden emplearse dentro de una cocina saludable y las consideraciones para su adecuada aplicación.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 5.
          span Métodos de cocción
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. Adaptado de los lineamientos del SENA (2026).
            thead
              tr
                th Método
                th Temperatura
                th Mecanismo
                th Ventajas para la salud
                th Alimentos ideales
            tbody
              tr
                td <b>Vapor</b>
                td 95°C – 100°C
                td Convección húmeda
                td Preserva vitaminas hidrosolubles (C, B). No requiere grasas. Mantiene color y textura.
                td Brócoli, zanahoria, pescado blanco, arroz.
              tr
                td <b>Plancha / parrilla</b>
                td 180°C - 230°C
                td Conducción seca
                td Drena grasas. Produce reacción de Maillard (sabor) sin aceites pesados.
                td Carnes magras, pescados, verduras en láminas.
              tr
                td <b>Horneado</b>
                td 150°C - 250°C
                td Convección seca
                td Cocción uniforme. No requiere grasas añadidas si se usa papel vegetal.
                td Vegetales asados, pescados en papillote, pechugas.
              tr
                td <b>Escalfado</b>
                td 70°C - 80°C
                td Convección húmeda
                td Técnica más delicada. No usa grasas. Preserva textura y nutrientes de alimentos frágiles.
                td Huevos, pescados blancos, frutas (peras, duraznos).
              tr
                td <b>Salteado saludable</b>
                td 180°C - 220°C
                td Conducción (con mínima grasa)
                td Cocción ultrarrápida (2-4 min). Preserva el "crunch" de las verduras. Usa solo 1 cucharadita de aceite.
                td Tiras de pollo, tofu, brócoli, pimentón, zanahoria.

    separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Principios de conservación de alimentos

    .bloque-texto-g.bg-color-04.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la cocina saludable, conservar adecuadamente implica controlar aquellos factores que favorecen el deterioro, como la temperatura, humedad, exposición al oxígeno, luz, actividad enzimática y proliferación de microorganismos, procurando al mismo tiempo minimizar alteraciones innecesarias en los alimentos. Entre los principales principios de conservación se encuentran:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 6.
          span Métodos de conservación en cocina saludable
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. Adaptado de los lineamientos del SENA (2026).
            thead
              tr
                th Método
                th Temperatura / Condición
                th Fundamento
                th Recomendaciones para Cocina Saludable
            tbody
              tr
                td <b>Refrigeración</b>
                td 0°C a 4°C
                td Ralentiza drásticamente el metabolismo bacteriano, pero no lo detiene.
                td Almacenar alimentos cocinados en los estantes superiores y crudos en los inferiores. Usar recipientes herméticos.
              tr
                td <b>Congelación</b>
                td -18°C o menos
                td Detiene completamente el crecimiento bacteriano. El agua al congelarse forma cristales que pueden dañar la estructura celular del alimento.
                td Congelar porciones individuales o envasar al vacío. Escaldar (blanquear) verduras antes de congelar para inactivar enzimas que causan pérdida de calidad.
              tr
                td <b>Enfriado rápido (regla 2-4)</b>
                td 60°C → 21°C en &lt; 2h → 4°C en &lt; 4h
                td Es el método para sacar los alimentos calientes de la zona de peligro lo más rápido posible.
                td Dividir grandes volúmenes en porciones pequeñas y poco profundas, usar baño de agua con hielo (o blast chiller) y agitar para acelerar la pérdida de calor.
              tr
                td <b>Encurtido</b>
                td Ambiente (ácido)
                td Sumergir alimentos en una solución ácida (vinagre) de pH bajo (&lt;4.6). La acidez inhibe la mayoría de las bacterias patógenas.
                td Ideal para pepinos, cebollas moradas, zanahoria o jalapeños. Se pueden añadir especias y hierbas para sabor sin sal añadida.
              tr
                td <b>Conservación en aceite</b>
                td Ambiente (anaeróbico)
                td Sumergir alimentos (generalmente deshidratados o cocidos en ácido) en aceite. El aceite aísla del oxígeno.
                td <b>¡Precaución!</b> El aceite puede crear un ambiente anaeróbico donde crezca <em>Clostridium botulinum</em> si el alimento no está acidificado o deshidratado previamente. Usar solo para alimentos previamente deshidratados (ej. tomates secos) o encurtidos (ej. ajos en vinagre antes de cubrir con aceite).

    .bg-fondo-03.p-4.br-15.mb-5
      .row.align-items-center.mb-0
        .col-lg-auto
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/img19.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 El principio más importante para entender es el de la zona de peligro de temperaturas, que oscila entre los 5°C y los 60°C. En este rango, las bacterias patógenas se multiplican a una velocidad exponencial (pueden duplicar su población cada 20 minutos). Por lo tanto, los alimentos perecederos no deben permanecer en esta zona por más de 2 horas acumulativas en toda su vida útil (desde la recepción hasta el servicio).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Figura 3.
          span Zona de peligro (5°C - 60°C)
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/img20.svg", alt="La figura ilustra el rango de temperatura conocido como zona de peligro, entre 5 °C y 60 °C, donde los microorganismos se multiplican rápidamente. Se destacan las temperaturas seguras de refrigeración y cocción para garantizar la inocuidad alimentaria.")
          img.d-lg-none(src="@/assets/curso/tema4/img21.svg", alt="La figura ilustra el rango de temperatura conocido como zona de peligro, entre 5 °C y 60 °C, donde los microorganismos se multiplican rápidamente. Se destacan las temperaturas seguras de refrigeración y cocción para garantizar la inocuidad alimentaria.")


</template>
<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
