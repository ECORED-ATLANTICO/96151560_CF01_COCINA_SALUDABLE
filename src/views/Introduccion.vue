<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4.mb-lg-5.justify-content-center.align-items-center
      .col-lg-2.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/img01.png")
      .col-lg-10.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La relación entre alimentación y salud es hoy más evidente que nunca. La creciente incidencia de enfermedades no transmisibles (ENT) como obesidad, diabetes tipo 2, enfermedades cardiovasculares y cáncer ha puesto la calidad de los alimentos en el centro del debate público. 
        
        .bg-fondo-03.p-4.br-15.mb-0
          .row.align-items-center.mb-0
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/intro/img02.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Según la OMS (2026), una alimentación saludable protege contra estas enfermedades, principales causas de muerte a nivel global. En Colombia, el Ministerio de Salud (2022) alerta sobre el aumento de malos hábitos alimentarios: alto consumo de ultraprocesados y baja ingesta de frutas, verduras y fibra.
    
    .bg-full-width.bg-fondo-04.px-5.py-4.px-lg-5
      img(src="@/assets/curso/intro/img03.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-11(data-aos="fade-right")
        p.banner-text La cocina saludable no es una simple tendencia de mercado, sino una necesidad y una responsabilidad social para los profesionales de la gastronomía. Un cocinero debe transformar los alimentos para que sean deliciosos y, al mismo tiempo, contribuyan al bienestar de sus comensales. Esto implica conocimiento profundo de los insumos, una selección rigurosa basada en criterios de calidad y estacionalidad, y el dominio de técnicas culinarias que minimicen la pérdida de nutrientes y el exceso de grasas, azúcares y sal.


    p.mb-5 El componente Fundamentos de la cocina saludable dota al aprendiz de las herramientas necesarias para dar sus primeros pasos en este campo. Desarrollará una mirada crítica para evaluar materias primas, competencia técnica para manejar equipos de forma segura y habilidad práctica para aplicar cocciones que respetan los alimentos. Todo ello, transversalizado por el cumplimiento de las BPM y el marco normativo colombiano, garantizando la inocuidad como base innegociable de la calidad.

    figure
      img(src="@/assets/curso/intro/img04.png", alt="").mb-0


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
