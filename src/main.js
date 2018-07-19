import Vue from "vue";
import App from "./App.vue";
import Child from "./ChildComponent.vue";

Vue.component('Child', Child)
new Vue({
  el: "#app",
  render: h => h(App)
});
