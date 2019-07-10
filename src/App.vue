<template>
  <div id="app">
    <app-header></app-header>
    <content-bar></content-bar>
    <footer-bar></footer-bar>
  </div>
  
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
</template>

<script>
import AppHeader from './layout/AppHeader'
import ContentBar from './layout/ContentBar'
import FooterBar from './layout/FooterBar'

export default {
  name: 'app',
  components: {
    AppHeader, ContentBar, FooterBar
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
