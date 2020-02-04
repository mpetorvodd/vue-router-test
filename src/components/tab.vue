<template>
  <div class="tab">
    Tab With id : {{id}}
  </div>
</template>

<script>
export default {

  name: 'tab',

  props: {
    id: {
      type: Number,
      required: true
    }
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>