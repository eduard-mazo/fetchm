<template lang="pug">
#app
  section.section
    .field.has-addons
      .control
        input.input.is-large(
          type="text" 
          placeholder="Buscar canciones"
          v-model="searchQuery")
      .control
        a.button.is-info.is-large(@click="search") Buscar
        a.button.is-danger.is-large(@click="remove") &times;
        p 
          small {{searchMessage}}
          
    .container
      .columns
        .column(v-for="name in names") {{name.name}}
</template>

<script>
import getArtist from "./api/fetch.js";

export default {
  name: "app",
  data() {
    return {
      searchQuery: "",
      names: []
    };
  },
  methods: {
    search() {
      console.log(this.searchQuery);
    },
    remove() {
      const self = this;
      self.searchQuery = "";
      getArtist().then(artist => {
        self.names = artist;
      });
    }
  },
  computed: {
    searchMessage() {
      if (this.names.length!=null) {
        return `Se encontraron ${this.names.length} resultados!`;
      }
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
