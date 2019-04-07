<template>
  <div id="app">
    <KanjiBook/>
  </div>
</template>

<script>
import KanjiBook from "./views/KanjiBook";

export default {
  name: "App",
  components: {
    KanjiBook
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
