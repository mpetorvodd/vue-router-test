<template>
  <div class="inner">
    <div class="tabs">
      <div class="tab" v-if="routeHash == '#test1'">Tab for hash {{routeHash}}</div>
      <div class="tab" v-if="routeHash == '#test2'">Tab for hash {{routeHash}}</div>
      <div class="tab" v-if="routeHash == '#test3'">Tab for hash {{routeHash}}</div>
      <div class="tab" v-if="routeHash == '#test4'">Tab for hash {{routeHash}}</div>
      <div class="tab" v-if="routeHash == '#test5'">Tab for hash {{routeHash}}</div>
    </div>
  </div>
</template>

<script>
import hash from '@/mixins/hash'

export default {
  mixins: [hash],

  name: 'Inner',

  data () {
    return {
      
    }
  }
}
</script>

<style lang="css" scoped>
</style>