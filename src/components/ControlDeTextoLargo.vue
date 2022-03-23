<template>
  <div class="component ControlDeTextoLargo">
    <textarea v-model="value" :class="classes" type="text" :placeholder="placeholder" :min="min" :max="max"></textarea>
    <div class="validation_text" :class="state">
        <span class="padding_right_1">
            <span v-if="state === 'valid'" class="icon-et-check_circle_fill"> </span>
            <span v-else-if="state === 'invalid'" class="form_control_error_icon icon-et-x error_text"> </span>
        </span>
        <span>{{ value_length }}/{{ max }} (mín. {{ min }})</span>
    </div>
  </div>
</template>
<script>
  
export default {
    name: "ControlDeTextoLargo",
    props: {
        classes: {
            type: [String, Object],
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
        min: {
            type: Number,
            required: true,
        },
        max: {
            type: Number,
            required: true,
        }
    },
    data() {
      return {
          value: "",
          state: "",
          has_been_validated: false,
      };
    },
    watch: {
        value() {
            if(this.has_been_validated) {
                this.validate();
            }
        }
    },
    computed: {
        value_length() {
            return this.value.length;
        }
    },
    methods: {
        validate() {
            this.$commons.validar_control_de_texto(this);
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