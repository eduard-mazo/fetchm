<template lang="pug">
#app
  img(src='./assets/logo.png' class="-responsive")
  h1 Ciclo de vida
  p {{person}}

</template>

<script>
export default {
  name: "app",
  data() {
    return {
      person: "eduard"
    };
  },
  created() {
    console.log("Created ..");
  },
  mounted() {
    console.log("mounted ..");
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
