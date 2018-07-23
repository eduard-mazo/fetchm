<template lang="pug">
  .container
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.media
            img(:src="track.album.images[0].url")
          p
            a.button.is-primary.is-large
              span.icon(@click="selectTrack")
      .columns.is-8
        .panel
          .panel-heading
            h1.title {{track.name}}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(v,k) in track")
                    li
                      strong {{k}}:&nbsp;
                      span {{v}}
              nav.level
                .level-left
                  a.level-item
</template>

<script>
import trackService from "@/api/track";
import trackMixins from "@/mixins/track";
export default {
  mixins: [trackMixins],
  data() {
    return {
      track: {}
    };
  },
  created() {
    const id = this.$route.params.id;
    trackService.getById(id).then(res => (this.track = res));
  }
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
</style>