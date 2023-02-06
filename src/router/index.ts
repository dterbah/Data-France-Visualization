import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HomeView from './../views/HomeView.vue';

import EnergyView from './../views/EnergyView.vue';
import PriceElectricityGas from './../components/energy/price-electricity-gas/PriceElectricityGas.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/energy',
        name: 'energies',
        component: EnergyView,
        children: [{
            path: 'price-electricity-gas',
            components: {
                'energy-section': PriceElectricityGas
            }
        }]
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
