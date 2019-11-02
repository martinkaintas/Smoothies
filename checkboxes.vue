<template>
  <div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedIngredients">
    <label for="jack">Jack</label>
  </div>
</template>

<script>
  export default {
    props: ["ingredient"]
  };
</script>