<template lang="pug">
#app
  pmheader
  pmnotification(:isPublished="showNotification")
    p(v-if="showNotification" slot="body") No se encontraron resultados
    p(v-else slot="body") {{ searchMessage }}

  pmloader(v-show="isLoading")
  section.section(v-show="!isLoading")
    .container
      .field.has-addons
        .control
          input.input.is-large(
            type="text" 
            placeholder="Buscar canciones"
            v-model="searchQuery")
        .control
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
            
    .container
      .columns.is-multiline
        .column.is-one-quarter(v-for="name in list")
          pmtrack(
            :class="{'is-active': name.id === selectedTrack }"
            :track="name" 
            @select="setSelectedTrack")
          
  Pmfooter
</template>

<script>
import trackServices from "@/api/track.js";

import Pmfooter from "@/components/layout/Footer.vue";
import Pmheader from "@/components/layout/Header.vue";

import Pmtrack from "@/components/Track.vue";

import Pmloader from "@/components/shared/Loader.vue";
import Pmnotification from "@/components/shared/Notifications.vue";

export default {
  components: {
    Pmfooter,
    Pmheader,
    Pmtrack,
    Pmloader,
    Pmnotification
  },
  name: "app",
  data() {
    return {
      searchQuery: "",
      list: [],
      total: "",
      isLoading: false,
      showNotification: false,
      selectedTrack: ""
    };
  },
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 2000);
      }
    }
  },
  methods: {
    search() {
      const self = this;
      console.log("hola");
      this.isLoading = true;
      trackServices.search(this.searchQuery).then(res => {
        this.showNotification = res.tracks.total === 0;
        self.list = res.tracks.items;
        self.isLoading = false;
      });
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
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
.is-active {
  border: 3px #23d160 solid;
}
</style>
