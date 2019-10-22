<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-row></b-row>

      <br />
      <br />
      <br />

      <b-row sm="6" offset="3">
        <b-col>
          <List :routeTo="routeTo" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/List.vue";

export default {
  name: "home",
  components: {
    List
  },
  methods: {
    routeTo(path) {
      this.$router.push(path);
    }
  }
};
</script>


