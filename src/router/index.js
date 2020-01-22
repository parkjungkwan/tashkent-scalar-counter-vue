import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Counter from '@/components/Counter'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{path: '/home', name: 'home', component: Home},
		{path: '/counter', name: 'counter', component: Counter},
	]
})