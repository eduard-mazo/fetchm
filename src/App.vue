<template>
<div id="app" class="wrapp">
<div id="mySidenav" class="sidenav">
  <a class="closebtn">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
  <div class="body">
     <pre>
        <code class="json">
          {
            "experience": [
              {
                "year": "2017",
                "job": "EPM",
                "position": "Electronic Engineer"
              },   
              {
                "year": "2011",
                "job": "FUdeA",
                "position": "Maniobrita"
              },
              {
                "year": "2009",
                "job": "FUdeA",
                "position": "Train driver"
              }
            ]
          }
        </code>
      </pre>
    </div>
  </div>


</template>

<script>
import hljs from "highlight.js";
hljs.initHighlightingOnLoad();

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
