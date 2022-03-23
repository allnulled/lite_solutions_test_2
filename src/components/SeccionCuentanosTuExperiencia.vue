<template>
  <div class="component SeccionCuentanosTuExperiencia">
        <div class="tell_us_section_title">
            Cuéntanos tu experiencia
        </div>
        <div>
            <div class="tell_us_section_question">
                ¿Qué tratamiento te has realizado?
            </div>
            <div>
                <select class="tell_us_section_treatment_selector">
                    <option value="">Selecciona el tratamiento</option>
                </select>
            </div>
        </div>
        <div>
            <div class="tell_us_section_question">
                ¿Recomendarías el tratamiento?
            </div>
            <div>
                <span class="circled_button_wrapper">
                    <button class="circled_button">
                        Sí
                    </button>
                </span>
                <span class="circled_button_wrapper">
                    <button class="circled_button empty_button">
                        No
                    </button>
                </span>
            </div>
        </div>
        <div>
            <div>
                <div class="tell_us_section_question">
                    Título de tu experiencia
                </div>
                <div>
                    <input class="tell_us_section_treatment_input" type="text" placeholder="Título resumen de tu experiencia" />
                </div>
            </div>
            <div>
                <div class="tell_us_section_question">
                    ¿Qué tratamiento te has realizado?
                </div>
                <div>
                    <div>
                        <textarea class="tell_us_section_treatment_textarea"
                            placeholder="Cuéntanos todos los detalles, por qué decidiste hacerlo,cómo te sentiste antes y después del tratamiento, qué consejos darías a los que lo quieren realizar..."></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <button class="share_experience_button">
                ¡Compartir experiencia!
            </button>
        </div>
  </div>
</template>
<script>
  
export default {
    name: "SeccionCuentanosTuExperiencia",
    props: {},
    data() {
      return {};
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
    activated() {},
    deactivated() {},

}
</script>
<style>

</style>