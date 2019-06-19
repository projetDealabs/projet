require('../node_modules/bootstrap/dist/css/bootstrap.css')

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import App from './App'
import HotDealsPage from './components/pages/HotDealsPage'
import DealPage from './components/pages/DealPage'
import CategoriesPage from './components/pages/CategoriesPage'
import NewDealPage from './components/pages/NewDealPage'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import UserDealsPage from './components/pages/UserDealsPage'

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
    },
    {
        path: '/deal/:idDeal',
        name: 'DealPage',
        component: DealPage
    },
    {
        path: '/newdeal',
        name: 'NewDealPage',
        component: NewDealPage
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/signup',
        name: 'SignupPage',
        component: SignupPage
    },
    {
        path: '/userdeals',
        name: 'UserDealsPage',
        component: UserDealsPage
    }
]
const router = new VueRouter({
    routes // short for `routes: routes`
})

/* eslint-disable no-new */
var vm = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
global.vm = vm;