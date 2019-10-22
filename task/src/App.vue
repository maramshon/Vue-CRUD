<template>
  <div id="app">
    <Header />

    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <h3>Search</h3>
        </b-col>
        <b-col>Add Button</b-col>
      </b-row>

      <br />
      <br />
      <br />

      <b-row sm="6" offset="3">
        <b-col>
          <MainList :studentsList="studentsList" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainList from "./components/MainList.vue";
const fb = require("./firebaseConfig.js");

export default {
  name: "app",
  components: {
    Header,
    MainList
  },
  data() {
    return {
      studentsList: [],
    };
  },
  mounted: function() {
    // this will equal undefined if I used ES6 Form () => HERE ??!
    fb.studentsCollection.get().then(results => {
      this.studentsList = [];
      results.docs.forEach(doc => {
        this.studentsList.push(doc.data());
      });
    });
  }
};
</script>

