import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/index.css'

import { createProvider } from './vue-apollo'
import { date } from './filters';

Vue.filter('date', date);

new Vue({
    router,
    apolloProvider: createProvider(),
    render: h => h(App)
}).$mount('#app')