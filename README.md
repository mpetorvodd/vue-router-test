# router-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### What to use:


#### 1. Copy the mixin file - tabLoader.js 

#### 2. Add the mixin to your component:

```
import tabLoader from '@/mixins/tabLoader'

...

mixins: [tabLoader],
```

#### 3. Create `tabs` Array with objects in the component data:

```
data () {
  return {
    tabs: [
      {
        name: '',
        component: 'Overview',
        id: 1
      },
      {
        name: '#stats',
        component: 'Stats',
        id: 2
      },
      {
        name: '#news',
        component: 'News',
        id: 3
      }
    ]
  }
}
```

- `name` should start with `#` and must match the browser hash that is supposed to open the tab.
- `component` - select the component to be rendered here.

**NOTE:** Components must be imported before use:

```
import Overview from '@/components/Overview'
import Stats from '@/components/Stats'
import News from '@/components/News'

...

components: {
  Overview,
  Stats,
  News
}
```

#### 4. Cycle through tabs

```
<template v-for="tab in tabs">
  <component 
    :is="tab.component" 
    :key="'tab.id" // Add unique keys
    v-if="routeHash == tab.name"
  ></component>
</template>
```

#### 5. Add needed props on `<component>`. Example for `id`

```
<template v-for="tab in tabs">
  <component 
    :is="tab.component" 
    :key="'tab.id" // Add unique keys
    v-if="routeHash == tab.name"
    :id="tab.id"
  ></component>
</template>
```