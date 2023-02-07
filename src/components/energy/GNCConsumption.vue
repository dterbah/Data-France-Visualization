<template>
    <h3 class="text-center">Consommation régionale de Gaz Naturel Carburant</h3>
    <div class="d-flex justify-content-around">
        <div>
            <FranceMap @on-region-changed="onRegionSelected"/>            
        </div>
        <div class="w-50" v-if="filteredDataByRegion.length">
            <table class="table w-75" v-if="!useGraph">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Année</th>
                        <th scope="col">Consommation (en KWH)</th>
                        <th scope="col">Région</th>
                    </tr>
                </thead>
                <tbody v-if="filteredDataByRegion.length > 0">
                    <tr v-for="(data, index) in filteredDataByRegion" :key="index">
                        <th scope="row">{{ index }}</th>
                        <td>{{ data.year }}</td>
                        <td>{{ data.consumptionKWH }}</td>
                        <td>{{ data.region }}</td>
                    </tr>
                </tbody>
            </table>
            <div v-else>
                <LineChart :chart-data="graphConfiguration" />
            </div>
        </div>
    </div>
    <div class="border w-50 p-4 options">
        <h6>Options applicables aux données</h6>
        <div class="checkbox-wrapper-3 d-flex flex-row">
            <label>Afficher les données en forme de graphique ? </label>
            <input type="checkbox" id="cbx-3" v-model="useGraph"/>
            <label for="cbx-3" class="toggle"><span></span></label>
        </div>
    </div>
</template>

<script lang="ts">

// Faire un bouton pour activer / désactiver le graphe ou le tableau

import { defineComponent } from 'vue';

import { EnergyService, GNCInfo } from '@/services/EnergyService';

import { LineChart } from 'vue-chart-3';
import { Chart, ChartData, registerables } from 'chart.js';
Chart.register(...registerables);

import FranceMap from './../utils/FranceMap.vue';

export default defineComponent({
    components: {
        FranceMap,
        LineChart
    },
    data() {
        return {
            records: Array<GNCInfo>(),
            region: '',
            useGraph: false
        }
    },
    beforeMount() {
        this.records = EnergyService.getGNCData();
    },

    methods: {
        onRegionSelected(region: string) {
            this.region = region;
        }
    },

    computed: {
        filteredDataByRegion() : GNCInfo[] {
            return this.records.filter(record => record.region === this.region).sort((a, b) => a.year - b.year);
        },
        graphConfiguration() : ChartData<"line"> {
            const data = this.filteredDataByRegion;
            return {
                labels: data.map(record => `Année ${record.year}`),
                datasets: [{
                    borderColor: 'red',
                    label: `Consommation régionale de Gaz Naturel Carburant pour la région ${this.region}`,
                    data: data.map(record => record.consumptionKWH)
                }]
            }
        }
    }
});

</script>

<style>

.options {
    margin: auto;
}

</style>