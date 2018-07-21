<template lang="pug">
#app
    section.hero.is-success
        .hero-head
            header.nav
                .container
                    .nav-left
                        .nav-item
                            strong ESAC 👨‍👩‍👧‍👧
                    .nav-right.nav-menu
        .hero-body
            .container.has-text-centered
                h1.title FAMILIA
                h2.subtitle MAZO VELASQUEZ
                Pmplayer
</template>

<script>
import Pmplayer from "@/components/Player.vue";
export default {
  data() {
    return { track: {} };
  },
  components: { Pmplayer }
};
</script>

<style lang="scss" scoped>
</style>