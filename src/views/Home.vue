<template>
  <div class="home">
    <br>
    <img alt="Vue logo" src="../assets/logo.png"><br>
    <img src="../assets/sublogo.png">
    <br><br>
    <HelloWorld msg="Dirección del servidor"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
