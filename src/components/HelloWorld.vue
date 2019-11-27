<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <pre>{{ $policy.evaluate({ message: "world" }) }}</pre>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  created() {
    this.$policy.set_data({ world: "world" });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
pre {
  text-align: left;
  width: 200px;
  margin: 0 auto;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  background-color: #1D1E1E;
  color: #9498A4;
}
</style>
