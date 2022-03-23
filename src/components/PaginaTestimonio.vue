<template>
  <div>
    <SeccionTestimonioDeUsuario :page="this" />
    <SeccionGaleria :page="this" />
    <SeccionSobreElDoctor :page="this" />
    <SeccionCuentanosTuExperiencia :page="this" />
    <SeccionMasExperiencias :page="this" />
  </div>
</template>
<script>

import SeccionCuentanosTuExperiencia from "./SeccionCuentanosTuExperiencia.vue";
import SeccionMasExperiencias from "./SeccionMasExperiencias.vue";
import SeccionSobreElDoctor from "./SeccionSobreElDoctor.vue";
import SeccionGaleria from "./SeccionGaleria.vue";
import SeccionTestimonioDeUsuario from "./SeccionTestimonioDeUsuario.vue";

export default {
    name: "PaginaTestimonio",
    props: {},
    components: {
        SeccionMasExperiencias,
        SeccionCuentanosTuExperiencia,
        SeccionSobreElDoctor,
        SeccionGaleria,
        SeccionTestimonioDeUsuario,
    },
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