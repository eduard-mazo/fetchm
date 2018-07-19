<template lang="pug">
#app
  .container
    h1 Componente padre
    child
  Local
</template>

<script>
import Local from "./LocalComponent.vue";

export default {
  components: { Local },
  name: "app",
  data() {
    return {};
  },
  methods: {
    doIt() {},
    replaceString() {}
  },
  computed: {
    birthDay() {}
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
