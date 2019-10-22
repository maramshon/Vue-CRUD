<template>
  <div>   
    <b-table striped hover :items="studentsList" :fields="fields" :busy="isBusy && true">
      <template v-slot:table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>

      <!-- A custom formatted column -->
      <template v-slot:cell(actions)="data">
        <b-button size="sm" lg="1" variant="warning" @click="edit(data)">Edit</b-button>
        <b-button size="sm" lg="1" variant="danger" @click="remove(data)">Delete</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
const fb = require("../firebaseConfig.js");
export default {
  props: {
      routeTo: Function,
  },
  data() {
    return {
      studentsList: [],
      isBusy: Boolean,
      fields: [
        { key: "name", sortable: true },
        { key: "interesting", sortable: true },
        { key: "average", sortable: true },
        { key: "actions", sortable: false }
      ]
    };
  },
  computed: {},
  mounted: function() {
    this.getStudents();
  },
  methods: {
    edit(index) {
        this.routeTo({path: `/about/`+index.item.id,meta: {id:index.item.id}})
    },
    remove(index) {
      fb.studentsCollection
        .doc(index.item.id)
        .delete()
        .then(() => {
          this.getStudents();
        });
    },
    // add() {
    //   fb.studentsCollection
    //     .add({
    //       name: "Student5",
    //       interesting: "Sport",
    //       average: 92,
    //       isAccepted: false
    //     })
    //     .then(() => {
    //       this.getStudents();
    //     });
    // },
    getStudents() {
      this.isBusy = true;
      fb.studentsCollection.get().then(results => {
        this.studentsList = [];
        results.docs.forEach(doc => {
          this.studentsList.push(doc.data());
          this.studentsList[this.studentsList.length - 1].id = doc.id;
        });
        this.isBusy = false;
      });
    }
  }
};
</script>
