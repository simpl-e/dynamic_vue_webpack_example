<template>
    <p class="red">{{greeting}} dynamic 'page.vue'!</p>
</template>

<script>
module.exports = {
  data: function() {
    return {
      greeting: 'Hello'
    };
  }
};
</script>

<style scoped>
  .red {
    color: red
  }
</style>
