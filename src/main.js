import Vue from "vue";
import App from "./App.vue";
import eventBus from "@/plugins/event-bus.js"

Vue.use(eventBus)

new Vue({
  el: "#app",
  render: h => h(App)
});
