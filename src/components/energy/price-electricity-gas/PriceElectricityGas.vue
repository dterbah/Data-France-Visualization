<template>
    <h3 class="text-center">Evolution du prix de l'électricité et du gaz en France</h3>
    <LineChart :chart-data="chartConfiguration" />
</template>

<script lang="ts">

import { defineComponent, ref, computed } from 'vue'

import { LineChart, useLineChart } from 'vue-chart-3';
import { Chart, ChartData, registerables } from 'chart.js';

import { EnergyService, PriceElectricityGasInfo } from '@/services/EnergyService';

Chart.register(...registerables);

export default defineComponent({
    components: {
        LineChart
    },
    data() {
        return {
            records: Array<PriceElectricityGasInfo>(),
            chartConfiguration: {} as ChartData<"line">
        }
    },
    beforeMount() {
        // setup all the data
        this.records = EnergyService.getPriceElectricityGas();
        this.chartConfiguration = {
            labels: this.chartLabels,
            datasets: [{
                data: this.electricityData,
                label: "Prix de l'électricité (€/MWh)",
                borderColor: '#A5C8ED'
            }, {
                data: this.gasData,
                label: "Prix du gaz (€/MWh)",
                borderColor: '#e8c3b9'
            }]
        }
    },
    computed: {
        electricityData() : number[] {
            return this.records.map(record => record.franceElectricity);
        },
        gasData() : number[] {
            return this.records.map(record => record.franceNaturalGas);
        },
        chartLabels() : string[]{
            return this.records.map(record => `Année ${record.year} - Semestre ${record.semester}`);
        }
    },
})

</script>