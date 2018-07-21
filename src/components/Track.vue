<template lang="pug">
    .card
        .card-image
            figure.image.is-1by1
                img(:src="track.album.images[0].url")
        .card-content
            .media
                .media-left
                    figure.image.is-48x48
                        img(:src="track.album.images[0].url")
                .media-content
                    p.title.is-6
                        strong {{track.name}}
                    p.subtitle.is-6 {{track.artists[0].name}}
            .content
                small {{duration}}
                nav.level
                    .level-left
                        a.level-item
                            span.icon.is-small(@click="selectTrack") ▶️
            
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    track: { type: Object, required: true }
  },
  methods: {
    selectTrack() {
      this.$emit("select", this.track.id);
      this.$bus.$emit("set-track", this.track);
    }
  },
  computed: {
    duration() {
      let millis = this.track.duration_ms;
      let minutes = Math.floor(millis / 60000);
      let seconds = ((millis % 60000) / 1000).toFixed(0);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
  }
};
</script>

<style lang="scss" scoped>
small {
  color: #707070;
}
</style>
