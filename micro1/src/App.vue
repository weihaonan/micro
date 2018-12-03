<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <a id='clickA'>microfront</a> -->
    <div class="navbar">
      <ul>
        <!-- <a href="#/app1">
          <li>
            App 1 (React)
          </li>
        </a>
        <a href="#/app2">
          <li>
            App 2 (Angular 6)
          </li>
        </a>
        <a href="#/app3">
          <li>
            App 3 (Angular 1)
          </li>
        </a> -->
        <!-- <a id='clickA' href="#/microfront"> -->
        <a id='clickA' href="#/micro2">
          <li>
            micro2 (Vue)
          </li>
        </a>
        <a href="#/micro3">
          <li>
           micro3 (Vue)
          </li>
        </a>
      </ul>
    </div>
    <h3>这里是micro1服务</h3>
  </div>
</template>

<script>
import SystemJS from '../libs/system.js'
export default {
  name: 'App',
  mounted(){
    // document.getElementById('clickA').addEventListener('click',function(){
    //   SystemJS.import("/micro2/micro2.js")
    // })
  }
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
