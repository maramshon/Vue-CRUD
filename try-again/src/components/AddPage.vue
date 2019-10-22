<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Student Information"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label="Name:"
          label-align-sm="right"
          label-for="nested-name"
        >
          <b-form-input v-model="name" id="nested-name"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Average:"
          label-align-sm="right"
          label-for="nested-average"
        >
          <b-form-input v-model="average" id="nested-average"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Interesting:"
          label-align-sm="right"
          label-for="nested-interesting"
        >
          <b-form-input v-model="interesting" id="nested-interesting"></b-form-input>
        </b-form-group>

        <b-form-group>
          <button
            v-if="!studentId.length"
            type="submit"
            class="btn btn-primary"
            @click="add()"
          >Create</button>
          <button
            v-if="studentId.length"
            type="submit"
            class="btn btn-primary"
            @click="edit()"
          >Update</button>
        </b-form-group>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
const fb = require("../firebaseConfig.js");
export default {
  props: {
    routeTo: Function
  },
  data() {
    return {
      studentsList: [],
      isBusy: Boolean,
      average: "",
      name: "",
      interesting: "",
      studentId: ""
    };
  },
  computed: {},
  mounted: function() {
    if (this.$route.params.id) {
      this.studentId = this.$route.params.id;
      this.getStudent(this.$route.params.id);
    }
  },
  methods: {
    getStudent(id) {
      fb.studentsCollection
        .doc(id)
        .get()
        .then(doc => {
          this.name = doc.data().name;
          this.average = doc.data().average;
          this.interesting = doc.data().interesting;
        });
    },
    emptyFields() {
      this.name = "";
      this.average = "";
      this.interesting = "";
    },
    edit() {
      fb.studentsCollection
        .doc(this.studentId)
        .update({
          name: this.name,
          interesting: this.interesting,
          average: this.average,
          isAccepted: true
        })
        .then(() => {
          this.emptyFields();
          this.routeTo("/");
        });
    },
    add() {
      fb.studentsCollection
        .add({
          name: this.name,
          interesting: this.interesting,
          average: this.average,
          isAccepted: true
        })
        .then(() => {
          this.emptyFields();
          this.routeTo("/");
        });
    }
  }
};
</script>
