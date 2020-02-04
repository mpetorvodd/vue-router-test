<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <br>

    <router-link to="/">Hello World</router-link>

    <br>

    <router-link :to="{ path: 'inner'}">Inner page without hash</router-link>

    <br>

    <router-link :to="{ path: 'inner', hash: 'test1'}">Inner1</router-link>

    <br>

    <router-link :to="{ path: 'inner', hash: 'test2'}">Inner2</router-link>

    <br>

    <router-link :to="{ path: 'inner', hash: 'test3'}">Inner3</router-link>

    <br>

    <router-link :to="{ path: 'inner', hash: 'test4'}">Inner4</router-link>

    <br>

    <router-link :to="{ path: 'inner', hash: 'test5'}">Inner5</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
