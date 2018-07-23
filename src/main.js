import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import eventBus from "@/plugins/event-bus";
import routes from "@/routes";
import msToMm from "@/filter/ms-to-min.js";
import blur from "@/directives/blur";
Vue.use(VueRouter);
Vue.use(eventBus);
Vue.use(msToMm);
Vue.use(blur);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
