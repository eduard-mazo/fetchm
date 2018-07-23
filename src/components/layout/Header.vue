<template lang="pug">
#app
    section.hero.is-success
        .hero-head
            header.navbar.is-success
                .container
                    .navbar-start
                        .navbar-item
                            strong ESAC 👨‍👩‍👧‍👧
                    .navbar-end.navbar-menu
                        router-link.navbar-item(:to="{name: 'search'}") Buscar 
                        router-link.navbar-item(to="about") Nosotros
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