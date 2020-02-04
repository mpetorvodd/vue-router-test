<template>
  <div class="tab">
    Tab with no hash

    {{result}}
  </div>
</template>

<script>
export default {

  name: 'tabDefault',

  data () {
    return {
      result: ''
    }
  },

  created() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      this.result = json
    });
  }
}
</script>

<style lang="css" scoped>
</style>