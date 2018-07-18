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
        a.button.is-danger.is-large &times;
        p 
          small {{searchMessage}}
          
    .container
      .columns
        .column(v-for="name in list")
          | {{name.name}} - {{name.artists[0].name}}
</template>

<script>
import trackServices from "./api/track.js";
export default {
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
