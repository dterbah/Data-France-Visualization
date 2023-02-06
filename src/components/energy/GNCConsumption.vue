<template>
    <h3 class="text-center">Consommation régionale de Gaz Naturel Carburant</h3>
    <div class="d-flex justify-content-around">
        <div>
            <FranceMap @on-region-changed="onRegionSelected"/>            
        </div>
        <div class="w-50">
            <table class="table w-75">
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
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import { EnergyService, GNCInfo } from '@/services/EnergyService';

import FranceMap from './../utils/FranceMap.vue';

export default defineComponent({
    components: {
        FranceMap
    },
    data() {
        return {
            records: Array<GNCInfo>(),
            region: ''
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
            console.log(this.region)
            return this.records.filter(record => record.region === this.region).sort((a, b) => a.year - b.year);
        }
    }
});

</script>