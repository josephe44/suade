<template>
  <ul>
    <li v-for="person in sortedData" :key="person._id">
      <slot :person="person"></slot>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'List',
    props: {
      people: {type: Array, default: ()=>[]},
      sorting: {type: Function, default: ()=>1},
      filtering: {type: Function, default: ()=>true},
    },
    computed: {
      filteredData() {
        return this.people.filter(this.filtering);
      },
      sortedData() {
        return this.filteredData.slice().sort(this.sorting);
      },
    },
  };
</script>

<style scoped lang="scss">

</style>
