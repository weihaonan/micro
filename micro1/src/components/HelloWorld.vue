<template>
  <div class="hello">
    <header>{{ msg }}</header>
    <div>这是micro1服务内容</div>
    <button id='router'>router</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'MICRO1'
    }
  },
  mounted(){
    document.getElementById('router').addEventListener('click',function(){
      window.history.pushState(null, null,'/profix')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
