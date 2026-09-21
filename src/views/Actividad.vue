<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Verificando mis saberes: cuestionario sobre fundamentos de cocina saludable, BPM, equipos y técnicas.',
      titulo: 'Cuestionario Didáctico',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos fundamentales sobre cocina saludable, Buenas Prácticas de Manufactura (BPM), normatividad sanitaria colombiana, selección de materias primas, equipos y utensilios, y técnicas básicas de higiene, corte, cocción y conservación.<br><b>Instrucciones:</b> lea cada enunciado referente a los temas desarrollados en el componente formativo y elija una opción según corresponda.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de las Buenas Prácticas de Manufactura (BPM)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir los costos de producción de los alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aumentar la vida útil de los alimentos mediante el uso de conservantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Garantizar que los alimentos se produzcan y manipulen en condiciones higiénicas adecuadas para prevenir enfermedades.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Mejorar el sabor y la presentación de los platos para atraer más clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El objetivo de las BPM es garantizar la inocuidad de los alimentos, previniendo la contaminación y protegiendo la salud del consumidor.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Según el método del "Plato para Comer Saludable" de Harvard, ¿cómo debe distribuirse un plato saludable?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '½ granos integrales, ¼ verduras, ¼ proteínas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '½ verduras y frutas, ¼ granos integrales, ¼ proteínas saludables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '½ proteínas magras, ¼ verduras, ¼ frutas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                '⅓ verduras, ⅓ granos, ⅓ proteínas, sin diferenciar el tipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El Plato de Harvard es una guía visual clara: la mitad del plato debe ser de verduras y frutas, un cuarto de granos integrales y el otro cuarto de proteínas saludables.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué es la contaminación cruzada y cómo se previene?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es la contaminación de un alimento por pesticidas. Se previene comprando solo productos orgánicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es la aparición de moho en los alimentos. Se previene con conservantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es la mezcla accidental de sabores en un plato. Se previene cocinando por separado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Es la transferencia de patógenos entre alimentos, superficies o personas. Se previene usando tablas de colores y lavando utensilios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La contaminación cruzada es un peligro biológico y se previene con prácticas como el código de colores en tablas y el lavado de manos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué significa el método de rotación PEPS y para qué se utiliza?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '"Primero en elaborar, primero en servir"; se utiliza para planificar el menú diario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '"Primero en entrar, primero en salir"; se utiliza para organizar los productos y evitar su vencimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                '"Primero en entrar, primero en salir"; se utiliza para asegurar que los productos más antiguos se usen primero, evitando el desperdicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                '"Primero en empacar, primero en salir"; se utiliza para el control de empaques.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El método PEPS (FIFO) organiza los productos en estanterías para que los más antiguos se utilicen primero, garantizando su frescura y reduciendo el desperdicio.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el material estándar recomendado para equipos y utensilios en una cocina profesional y por qué?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Acero inoxidable tipo 304, porque es liso, no poroso, resistente a la corrosión y fácil de limpiar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aluminio, porque es ligero y conduce bien el calor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Madera, porque es natural y no altera el sabor de los alimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cobre, porque es el mejor conductor de calor y muy duradero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El acero inoxidable 304 es el "estándar de oro" por sus propiedades higiénicas, durabilidad y facilidad de limpieza.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué método de cocción es el más recomendado para preservar las vitaminas hidrosolubles (como la vitamina C y las del complejo B)?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fritura profunda en abundante aceite.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hervido en agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cocción al vapor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cocción a la parrilla a alta temperatura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La cocción al vapor es la más respetuosa con los nutrientes porque no hay pérdida por lixiviación en agua y no requiere grasas añadidas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'En el marco normativo colombiano, ¿cuál de las siguientes afirmaciones es correcta?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La Ley 9 de 1979 fue derogada por la Resolución 2674 de 2013.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El Decreto 3075 de 1997 es conocido como el "Código Sanitario Nacional".',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El INVIMA solo regula medicamentos, no alimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La Resolución 2674 de 2013 complementa y actualiza el Decreto 3075 de 1997, y la Ley 9 de 1979 sigue vigente como marco general.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La Ley 9 de 1979 sigue vigente como marco general; la Resolución 2674 derogó parcialmente el Decreto 3075 de 1997, actualizando los requisitos de BPM.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué es la "zona de peligro" en la conservación de alimentos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El rango de temperatura entre 5°C y 60°C donde las bacterias patógenas se multiplican rápidamente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El rango de temperatura entre 0°C y 5°C donde los alimentos se congelan.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La temperatura superior a 100°C donde los alimentos se queman.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El ambiente húmedo donde crecen los mohos en los alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'En la zona de peligro (5°C - 60°C), las bacterias pueden duplicarse cada 20 minutos. Por eso, los alimentos no deben permanecer en esta zona por más de 2 horas acumulativas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el código de colores estándar para las tablas de picar y su uso correcto?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Rojo para frutas/verduras, verde para carnes rojas, amarillo para aves.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verde para frutas/verduras, rojo para carnes rojas, amarillo para aves, azul para pescados, blanco para cocidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Azul para frutas/verduras, blanco para carnes rojas, rojo para aves.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Todos los colores son intercambiables siempre que se laven bien.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El código de colores es una medida clave para prevenir la contaminación cruzada, asignando un color específico a cada tipo de alimento.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la función principal de un abatidor de temperatura (blast chiller) en una cocina profesional?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Enfriar rápidamente alimentos calientes para evitar la zona de peligro y prevenir la proliferación bacteriana.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Congelar alimentos para almacenarlos por largos periodos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Calentar alimentos previamente cocinados para su servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mantener los alimentos a una temperatura constante de 70°C.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El abatidor de temperatura es crucial para enfriar alimentos de 70°C a 3°C en menos de 90 minutos, saltándose la zona de peligro.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué caracteriza al método de cocción llamado "escalfado" (poaching)?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se realiza a altas temperaturas (superiores a 100°C) con abundante aceite.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se cocina el alimento directamente sobre una superficie metálica caliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se utiliza aire caliente a alta velocidad para lograr una textura crujiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se realiza a baja temperatura (70°C - 80°C) en un líquido como agua, caldo o leche, sin llegar a hervir.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El escalfado es una técnica delicada que preserva la textura y los nutrientes de alimentos frágiles como huevos y pescados.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de los siguientes NO es un pilar de las Buenas Prácticas de Manufactura (BPM)?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Higiene del personal manipulador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Higiene de equipos y utensilios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción de costos de materia prima.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Higiene de instalaciones y ambiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La reducción de costos no es un pilar de las BPM. Los cuatro pilares son: higiene personal, de equipos, de instalaciones y de procesos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué utensilio se caracteriza por tener una hoja pequeña y recta de 6 a 10 cm, ideal para pelar frutas y hacer cortes de precisión?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuchillo Chef (de cocina).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuchillo de Puntilla (o de pelar).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cuchillo de Sierra (de pan).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuchillo Fileteador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El cuchillo de puntilla es el indicado para trabajos de precisión y pelado. El cuchillo chef tiene una hoja ancha y curva de mayor tamaño.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Según el protocolo de limpieza y desinfección (tren de lavado de 5 pasos), ¿cuál es el orden correcto de los pasos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Raspar y enjuagar → lavar → enjuagar → desinfectar → secar al aire.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Lavar → enjuagar → raspar → desinfectar → secar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desinfectar → raspar → lavar → enjuagar → secar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Raspar → desinfectar → enjuagar → lavar → secar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El tren de lavado sigue este orden para garantizar la eliminación efectiva de suciedad y microorganismos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es la temperatura interna de cocción segura recomendada para el pollo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '60 °C.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '65 °C.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '74 °C.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '85 °C.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El pollo debe cocinarse a una temperatura interna de 74°C para asegurar la eliminación de patógenos como la Salmonella.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Cuál de los siguientes es un peligro físico en la cocina?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bacteria Salmonella en un huevo crudo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Residuos de pesticidas en una fruta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hongos en el pan.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un fragmento de vidrio de un envase roto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Los peligros físicos son objetos extraños que pueden causar daño, como vidrios, metales, huesos o cabellos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué establece la Resolución 2674 de 2013 en Colombia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La creación del INVIMA como entidad reguladora.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los requisitos sanitarios que deben cumplir los establecimientos de alimentos, incluyendo procedimientos escritos y control de temperaturas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La obligación de usar exclusivamente productos orgánicos en cocinas profesionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La prohibición del uso de cualquier tipo de conservante en alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La Resolución 2674 complementa el Decreto 3075 y establece requisitos más exigentes en documentación y control de temperaturas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué técnica de corte se utiliza para obtener tiras finas y alargadas de 3-4 cm de largo por 2 mm de ancho?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Juliana.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Brunoise.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bastón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Chiffonade.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La Juliana es un corte en tiras finas, similar a fósforos, ideal para verduras en salteados.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de los siguientes métodos de conservación utiliza un ambiente ácido para inhibir el crecimiento bacteriano?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Congelación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Encurtido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Refrigeración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conservación en aceite.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El encurtido utiliza vinagre u otros ácidos para crear un pH bajo (< 4.6) que inhibe la mayoría de las bacterias patógenas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué caracteriza al diseño higiénico de equipos y utensilios?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Superficies decorativas con grabados para mejorar el agarre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Materiales porosos para absorber la humedad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Esquinas en ángulo recto para mayor estabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Superficies lisas, ángulos redondeados y facilidad de desmontaje para una limpieza profunda.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Estas características son fundamentales para prevenir la acumulación de suciedad y bacterias, facilitando la limpieza y desinfección.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
