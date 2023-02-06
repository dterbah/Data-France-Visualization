import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue3 } from 'bootstrap-vue-3'
import { BIconLightningCharge } from 'bootstrap-icons-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap/dist/js/bootstrap.js'

import '@/assets/css/style.css';

createApp(App).use(store)
    .use(router)
    .use(BootstrapVue3)
    .component('BIconLightningCharge', BIconLightningCharge)
    .mount('#app')
