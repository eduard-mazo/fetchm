<template lang="pug">
#app
  pmheader
  section.section
    .field.has-addons
      .control
        input.input.is-large(
          type="text" 
          placeholder="Buscar canciones"
          v-model="searchQuery")
      .control
        a.button.is-info.is-large(@click="search") Buscar
        a.button.is-danger.is-large &times;
        p 
          small {{searchMessage}}
          
    .container
      .columns
        .column(v-for="name in list")
          | {{name.name}} - {{name.artists[0].name}}
  Pmfooter
</template>

<script>
import trackServices from "./api/track.js";
import Pmfooter from "./components/layout/Footer.vue";
import Pmheader from "./components/layout/Header.vue";
export default {
  components:{
    Pmfooter,
    Pmheader
  },
  name: "app",
  data() {
    return {
      searchQuery: "",
      list: [],
      total: ""
    };
  },
  methods: {
    search() {
      const self = this;
      console.log("hola");

      trackServices
        .search(this.searchQuery)
        .then(res => (self.list = res.tracks.items));
    }
  },
  computed: {
    searchMessage() {
      return (this.total = this.list.length);
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
