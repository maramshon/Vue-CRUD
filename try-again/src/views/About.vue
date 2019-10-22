<template>
  <div class="about">
    <!-- <h1>Add new Student</h1> -->
    <b-container class="bv-example-row">
      <b-row sm="6" offset="3">
        <b-col>
          <AddPage :routeTo="routeTo" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import AddPage from "@/components/AddPage.vue";

export default {
  name: "about",
  props: {
    index: Number
  },
  data(){
    return{
      path:'',
    }
  },
  components: {
    AddPage,
  },
  methods: {
    routeTo(path) {
      console.log(path)
      this.$router.push(path);
    }
  }
};
</script>