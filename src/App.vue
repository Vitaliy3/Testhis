<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <anchored-heading :level="1">Привет, мир!</anchored-heading>
  </div>
</template>
<script>
Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // имя тега
      this.$slots.default // массив дочерних элементов
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
  
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
