<template lang="pug">
main
  transition(name="move")
    pmnotification(v-show="showNotification",
                   :isPublished="showNotification"
                  )
      p(v-if="showNotification" slot="body") No se encontraron resultados
      p(v-else slot="body") {{ searchMessage }}

  transition(name="move")
    pmloader(v-show="isLoading")
  section.section(v-show="!isLoading")
    .container
      .field.has-addons
        .control
          input.input.is-success.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery",
            v-on:keyup.enter="search")
        .control
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
            
    .container
      .columns.is-multiline
        .column.is-one-quarter(v-for="name in list")
          pmtrack(
            v-blur="name.preview_url"
            :class="{'is-active': name.id === selectedTrack }"
            :track="name" 
            @select="setSelectedTrack")

</template>

<script>
import trackServices from "@/api/track.js";

import Pmtrack from "@/components/Track.vue";

import Pmloader from "@/components/shared/Loader.vue";
import Pmnotification from "@/components/shared/Notifications.vue";

export default {
  components: {
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
      this.isLoading = true;
      this.list = [];
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

<style lang="scss" scoped>
.is-active {
  border: 3px #23d160 solid;
}
input:focus {
  outline: 0 !important;
}
</style>
