<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style scoped>
#q-app{
  /*background-image: url('../assets/img/background_img.jpeg');*/
  background-image: url('./assets/img/backgroud_img.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
