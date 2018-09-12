/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.$ = window.jQuery = require('jquery')

require('./smoothscroll')

require('bootstrap')

window.Vue = require('vue')

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App from './components/App.vue';
import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


const app = new Vue({
    el: '#app',

    components: {
        App, Tabs, Tab
    },
});
