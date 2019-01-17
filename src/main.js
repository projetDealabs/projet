// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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
        path: '/',
        name: 'HotDealsPage',
        component: HotDealsPage
    },
    {
        path: '/categories',
        name: 'CategoriesPage',
        component: CategoriesPage
    }
]

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})