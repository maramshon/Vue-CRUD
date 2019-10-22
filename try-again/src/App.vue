<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">Add</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  },
  data() {
    return {};
  }
};
</script>

