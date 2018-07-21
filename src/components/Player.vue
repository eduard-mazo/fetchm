<template lang="pug">
    .content
        p
            img(:src="track.album.images[0].url")
        p
            strong {{track.name}}
            small {{duration}}
        p
            audio(controls :src="track.preview_url")            
</template>

<script>
export default {
  data() {
    return { track: {} };
  },
  created() {
    this.$bus.$on("set-track", track => {
      this.track = track;
    });
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
img {
  width: 124px;
  border-radius: 50%;
}
</style>

