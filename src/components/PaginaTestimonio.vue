<template>
  <div>
    <div class="panels_wrapper">
      <main class="panel_main padding_1">
        <div class="panel_main_contents padding_1">
          <SeccionTestimonioDeUsuario :page="this" />
          <SeccionGaleria :page="this" />
          <SeccionSobreElDoctor :page="this" />
          <SeccionCuentanosTuExperiencia :page="this" />
        </div>
      </main>
      <aside class="panel_secondary">
        <SeccionMasExperiencias :page="this" />
      </aside>
    </div>
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