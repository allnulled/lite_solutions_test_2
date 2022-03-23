<template>
    <div class="component SeccionCuentanosTuExperiencia">
        <form ref="FormularioDeExperienciaDeCliente" action="/">
            <div class="tell_us_section_title padding_top_2 padding_bottom_4">
                Cuéntanos tu experiencia
            </div>
            <div class="padding_vertical_3">
                <div class="tell_us_section_question padding_bottom_1">
                    ¿Qué tratamiento te has realizado?
                </div>
                <div>
                    <select class="tell_us_section_treatment_selector" v-model="control_tipo_de_tratamiento">
                        <option value="" disabled hidden>Selecciona el tratamiento</option>
                        <option value="Tratamiento 1">Tratamiento 1</option>
                        <option value="Tratamiento 2">Tratamiento 2</option>
                        <option value="Tratamiento 3">Tratamiento 3</option>
                        <option value="Tratamiento 4">Tratamiento 4</option>
                        <option value="Tratamiento 5">Tratamiento 5</option>
                    </select>
                </div>
                <div v-if="error_en_control_tipo_de_tratamiento">
                    <span class="error_text">{{ error_en_control_tipo_de_tratamiento }}</span>
                </div>
            </div>
            <div class="padding_vertical_3">
                <div class="tell_us_section_question padding_bottom_2">
                    ¿Recomendarías el tratamiento?
                </div>
                <div>
                    <span class="circled_button_wrapper">
                        <button class="circled_button" :class="{ selected: control_recomendarias_tratamiento === true }" type="button" v-on:click="() => control_recomendarias_tratamiento = true">
                            Sí
                        </button>
                    </span>
                    <span class="circled_button_wrapper">
                        <button class="circled_button" :class="{ selected: control_recomendarias_tratamiento === false }" type="button" v-on:click="() => control_recomendarias_tratamiento = false">
                            No
                        </button>
                    </span>
                </div>
                <div v-if="error_en_control_recomendarias_tratamiento">
                    <span class="error_text">{{ error_en_control_recomendarias_tratamiento }}</span>
                </div>
            </div>
            <div v-if="control_recomendarias_tratamiento === true">
                <div class="padding_vertical_3">
                    <div class="tell_us_section_question padding_bottom_1">
                        Título de tu experiencia:
                    </div>
                    <div>
                        <ControlDeTexto classes="tell_us_section_treatment_input" placeholder="Título resumen de tu experiencia:" :min="20" :max="90" ref="ControlDeTituloResumenDeExperiencia" />
                    </div>
                </div>
                <div class="padding_top_3">
                    <div class="tell_us_section_question padding_bottom_1">
                        ¿Qué tratamiento te has realizado?
                    </div>
                    <div>
                        <div>
                            <ControlDeTextoLargo classes="tell_us_section_treatment_textarea" placeholder="Cuéntanos todos los detalles, por qué decidiste hacerlo,cómo te sentiste antes y después del tratamiento, qué consejos darías a los que lo quieren realizar..." :min="300" :max="18000" ref="ControlDeTratamientoRealizado" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="padding_vertical_8">
                <button class="share_experience_button" type="button" v-on:click="() => enviar_formulario()">
                    ¡Compartir experiencia!
                </button>
            </div>
        </form>
    </div>
</template>
<script>
  
export default {
    name: "SeccionCuentanosTuExperiencia",
    props: {},
    data() {
      return {
          control_tipo_de_tratamiento: "",
          control_recomendarias_tratamiento: undefined,
          error_en_control_tipo_de_tratamiento: false,
          error_en_control_recomendarias_tratamiento: false,
      };
    },
    methods: {
        enviar_formulario() {
            let isAllValid = true;
            const isValid1 = (typeof this.control_tipo_de_tratamiento === 'string') && this.control_tipo_de_tratamiento.length;
            const isValid2 = typeof this.control_recomendarias_tratamiento === 'boolean';
            isAllValid &&= isValid1 && isValid2;
            if(!isValid1) {
                this.error_en_control_tipo_de_tratamiento = "Debe seleccionar una opción.";
            } else {
                this.error_en_control_tipo_de_tratamiento = false;
            }
            if(!isValid2) {
                this.error_en_control_recomendarias_tratamiento = "Debe seleccionar una opción.";
            } else {
                this.error_en_control_recomendarias_tratamiento = false;
            }
            if(this.control_recomendarias_tratamiento === true) {
                const controlDeTitulo = this.$refs.ControlDeTituloResumenDeExperiencia;
                const controlDeTratamiento = this.$refs.ControlDeTratamientoRealizado;
                const isValid3 = controlDeTitulo.validate();
                const isValid4 = controlDeTratamiento.validate();
                isAllValid &&= isValid3 && isValid4;
            }
            if(isAllValid) {
                this.$refs.FormularioDeExperienciaDeCliente.submit();
            }

        }
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