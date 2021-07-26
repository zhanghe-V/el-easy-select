<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <el-easy-select
      :options="options"
      :max="30" />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      options: [
        {label: '1', value: '1'},
        {label: '11', value: '11'},
        {label: '111', value: '111'},
        {label: '1111', value: '11111'},
        {label: '2', value: '2'},
        {label: '22', value: '22'},
        {label: '3', value: '3'},
        {label: '333', value: '333'},
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
