const trackMixins = {
  methods: {
    selectTrack() {
      this.$store.commit('setTrack', this.track)
    }
  }
};

export default trackMixins;
