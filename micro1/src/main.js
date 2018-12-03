// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SystemJS from '../libs/system.js'
Vue.config.productionTip = false
window.onhashchange=function(data){
	// console.log(location.hash)
	if(location.hash.startsWith('#/micro2')){
		SystemJS.import("/micro2/micro2.js")
	}
	if(location.hash.startsWith('#/micro3')){
		SystemJS.import("/micro3/micro3.js")
	}
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
