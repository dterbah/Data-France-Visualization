<template>
    <h3 class="text-center">Production d'électricité EDF</h3>
    <LineChart :chart-data="chartConfiguration" />
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import { LineChart } from 'vue-chart-3';
import { Chart, ChartData, registerables } from 'chart.js';
import { EnergyService, EDFInfo } from '@/services/EnergyService';

Chart.register(...registerables);

const colors: string[] = [
    'red',
    'blue',
    'pink',
    'purple',
    'orange',
    'gray',
    'green',
    'yellow',
    'coral',
    'khaki'
]

export default defineComponent({
    components: {
        LineChart
    },
    data() {
        return {
            records: Array<EDFInfo>(),
            years: Array<number>(),
            categories: Array<string>()
        }
    },

    beforeMount() {
        this.records = EnergyService.getEDFData();
        this.years = Array.from(new Set<number>(this.records.map(record => record.year)).values());
        this.categories = Array.from(new Set<string>(this.records.map(record => record.subCategory).values()));
    },

    computed: {
        chartLabels() : Array<string> {
            return this.years.map(year => `Année ${year}`)
        },
        chartConfiguration() : ChartData<"line"> {
            const configuration = {
                labels: this.chartLabels,
                datasets: this.categories.map((category, index) => {
                    return {
                        borderColor: colors[index],
                        label: `Production d'électricité avec ${category}`,
                        data: this.records.filter(r => r.subCategory === category).map(r => r.value)
                    };
                })
            }

            return configuration;
        },
    }
});

</script>