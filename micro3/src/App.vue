<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    
    <h3>这里是micro3服务</h3>
  </div>
</template>

<script>
export default {
  name: 'App',
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
.navbar {
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #116466;
    color: white;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    overflow: hidden;
}
.navbar ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    height: 100%;
}
.navbar a {
    height: 100%;
    text-decoration: none;
    color: white;
}
.navbar li {
    padding-top: 14px;
    padding-bottom: -14px;
    padding-left: 10px;
    padding-right: 10px;
    height: 100%;
}
</style>
