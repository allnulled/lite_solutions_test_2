import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import ControlDeTexto from "./components/ControlDeTexto.vue";
import ControlDeTextoLargo from "./components/ControlDeTextoLargo.vue";
import commons from "./commons.js";

Vue.config.productionTip = false

Vue.prototype.$client = axios.create();
Vue.prototype.$commons = commons;

Vue.component("ControlDeTexto", ControlDeTexto);
Vue.component("ControlDeTextoLargo", ControlDeTextoLargo);

new Vue({
  render: h => h(App),
}).$mount("#app");
