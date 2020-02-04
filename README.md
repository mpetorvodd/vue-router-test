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

#### 3. Create `tabs` Array with objects:

```
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
```

- `name` should start with `#` and must match the browser hash that is supposed to open the tab.
- `component` - select the component to be rendered here.

**NOTE:** Components must be imported before use:

```
import tab from '@/components/tab'

...

components: {
  Stats,
  News
}
```

#### 4. Cycle through tabs

```
<template v-for="tab in tabs">
  <component 
    :is="tab.component" 
    :block="tab.props" 
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
    :block="tab.props" 
    :key="'tab.id" // Add unique keys
    v-if="routeHash == tab.name"
    :id="tab.id"
  ></component>
</template>
```