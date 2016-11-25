import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'

import './assets/less/main.less'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

(function(win, doc){
	let docEle = doc.documentElement,
		w = docEle.clientWidth;
	w && (docEle.style.fontSize = 10 * (w/375) + 'px');
}(window, document))

const app = new Vue({
  router: new VueRouter(router),
  render: h => h(App)
}).$mount('#app')
