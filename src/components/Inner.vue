<template>
  <div class="inner">
    <div class="tabs">
      <template v-for="(tab, index) in tabs">
        <component 
          :is="tab.component"  
          :key="'tab-' + index"
          :id="tab.id"
          v-if="routeHash == tab.name"
        ></component>
      </template>
    </div>
  </div>
</template>

<script>
import tabLoader from '@/mixins/tabLoader'
import tab from '@/components/tab'
import tabDefault from '@/components/tabDefault'

export default {
  mixins: [tabLoader],

  name: 'Inner',

  components: {
    tab,
    tabDefault
  },

  data () {
    return {
      tabs: [
        {
          name: '',
          component: 'tabDefault',
          id: 0
        },
        {
          name: '#test1',
          component: 'tab',
          id: 1
        },
        {
          name: '#test2',
          component: 'tab',
          id: 2
        },
        {
          name: '#test3',
          component: 'tab',
          id: 3
        },
        {
          name: '#test4',
          component: 'tab',
          id: 4
        },
        {
          name: '#test5',
          component: 'tab',
          id: 5
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>