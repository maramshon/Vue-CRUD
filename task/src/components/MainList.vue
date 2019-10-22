<template>
  <div>
    <b-table striped hover :items="studentsList" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  props: ["studentsList"],
  data() {
    return {
      fields: [
        { key: "name", sortable: true },
        { key: "interesting", sortable: true },
        { key: "average", sortable: true },
        { key: "isAccepted", sortable: true }
      ]
    };
  }
};
</script>