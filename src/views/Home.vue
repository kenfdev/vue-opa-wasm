<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img alt="OPA logo" src="../assets/opa.jpg" style="width: 200px" />
    <HelloWorld msg="Vue.js App with OPA WASM" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
