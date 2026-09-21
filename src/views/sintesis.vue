<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/img1.png")
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") Este componente formativo ha desarrollado los fundamentos de la cocina saludable con base en las Buenas Prácticas de Manufactura (BPM) y el marco normativo colombiano (Ley 9 de 1979, Decreto 3075 de 1997, Resolución 2674 de 2013 e INVIMA). Se abordaron los cuatro pilares de las BPM (higiene del personal, de equipos, de instalaciones y de procesos), los 5 momentos del lavado de manos y la prevención de la contaminación cruzada como ejes centrales de la inocuidad.
        
        .bg-fondo-01.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") Luego se profundizó en la selección de materias primas de alta calidad mediante criterios sensoriales, el método del Plato de Harvard para el equilibrio nutricional, la receta estándar como herramienta de control y el método PEPS para la rotación de inventarios. En cuanto a equipos y utensilios, se clasificaron en mayores y menores, se identificaron equipos clave (vaporeras, freidoras de aire, procesadores), se explicaron el diseño higiénico, los materiales aprobados (acero inoxidable 304) y el manejo seguro según manuales de funcionamiento.
        
    
    .container
      .row.mb-4.mb-lg-4.justify-content-center.align-items-center.bg-color-01
        .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/intro/img2.png")
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0.ms-0.ms-lg-3 Finalmente, se desarrollaron las técnicas básicas de preparación: protocolos de higiene y desinfección (tren de lavado de 5 pasos, desinfección de vegetales), técnicas de corte profesional (juliana, brunoise), métodos de cocción que preservan nutrientes (vapor, plancha, horneado, escalfado, salteado saludable) y principios de conservación (refrigeración, congelación, regla 2-4, zona de peligro 5°C-60°C). La integración de estos conocimientos permite al aprendiz garantizar la inocuidad y el valor nutricional como pilares de la gastronomía saludable.s gastronómicos orientados a la calidad, la inocuidad y la sostenibilidad

  
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="Diagrama jerárquico del SENA titulado “Salsas para pastas y gestión de residuos”, organizado en cinco módulos: Salsas: generalidades, clasificación y clases; Formulación y elaboración de salsas; Interpretación y aplicación de la receta estándar; Clasificación de residuos; y Gestión y disposición de residuos. Cada módulo presenta los temas y subtemas correspondientes, incluyendo definición, clasificación, técnicas de preparación, receta estándar, manejo de residuos, almacenamiento, disposición final, limpieza y medidas de bioseguridad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
