require('../node_modules/bootstrap/dist/css/bootstrap.css')

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import App from './App'
import HotDealsPage from './components/pages/HotDealsPage'
import CategoriesPage from './components/pages/CategoriesPage'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

const routes = [{
        path: '/home',
        name: 'HotDealsPage',
        component: HotDealsPage
    },
    {
        path: '/categories',
        name: 'CategoriesPage',
        component: CategoriesPage
    }
]
const router = new VueRouter({
    routes // short for `routes: routes`
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})