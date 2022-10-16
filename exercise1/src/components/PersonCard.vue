<template>
  <div class="details" @click="$emit('personClick', person)">
    <h4> {{ person.name }} </h4>
    <b>Age:</b> {{ person.age }} <br/>
    <b>Eye Color:</b> {{ person.eyeColour }} <br/>
    <b>Gender:</b> {{ person.gender }} <br/>
  </div>
</template>

<script>
  export default {
    name: 'PersonCard',
    props: {
      person: {
        type: Object,
        default: () => {},
      },
    },
    emits: ['personClick'],
  };
</script>

<style scoped>
    .details {
    background-color: #fff;
    padding: 10px;
    border: 1px solid #dedede;
    border-radius: 5px;
    cursor: pointer;
  }

</style>
