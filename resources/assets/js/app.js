/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//Vue.config.devtools = true;
//Vue.config.performance = true;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App from './components/App.vue';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import EventBus from 'va/lib/eventBus.js'
import 'va/lib/css';
import 'va/lib/script';
import 'va/lib/global';
import axios from 'axios';

Vue.prototype.$bus = EventBus;
Vue.prototype.$http = axios;

const app = new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    render: h => h(App)
});
