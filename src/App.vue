<template lang="pug">
#app
  p {{shoW ? 'Text Hide' : 'Form Hide'}}
  .container(v-show="shoW")
    nav.level
      p.level-item.has-text-centered
        img(src='./assets/img1.jpg' class="-responsive")
    nav.level
      h2
      strong.level-item.has-text-centered.-tittle Registro estación Platzi 
    nav
      label(for="name" class="-label") Nombre
      input(v-model="name" type="text" autocomplete="off" id="name"  class="-input") 
    nav
      label(for="name" class="-label") Apellido
      input(v-model="lastName" type="text" autocomplete="off" id="lastName" class="-input") 
    nav
      label(for="name" class="-label") Birthday
      input(v-model="year" type="text" autocomplete="off" id="year" class="-input") 
    nav.-btn
      a.button(@click="doIt") Hide
    p {{birthDay}}
    .field.has-addons
      .control
        input.input(v-model="msg" type='text')
      .control
        a.button.is-info(@click="replaceString") Search 
    p {{msg1}}  
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "",
      msg1: "",
      shoW: true,
      name: "",
      lastName: "",
      year: "",
      url: "https://www.google.com.co"
    };
  },
  methods: {
    doIt() {
      this.shoW = false;
    },
    replaceString() {
      this.msg1 = this.msg.split(" ").join("-");
      this.name = "";
      this.lastName = "";
      this.year = "";
    }
  },
  computed: {
    birthDay() {
      if (this.year.length == 4) {
        return `${this.name} ${this.lastName} tiene ${2018 - this.year} años`;
      }
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
