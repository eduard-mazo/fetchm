<template lang="pug">
#app
  pmheader

  router-view

  Pmfooter
</template>

<script>
import Pmfooter from "@/components/layout/Footer.vue";
import Pmheader from "@/components/layout/Header.vue";

export default {
  components: {
    Pmfooter,
    Pmheader
  },
  name: "app"
};
</script>

<style lang="scss">
@import "./scss/main.scss";
.is-active {
  border: 3px #23d160 solid;
}
</style>
