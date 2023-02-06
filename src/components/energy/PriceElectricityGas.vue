<template>
    <h3 class="text-center">Evolution du prix de l'électricité et du gaz en France</h3>
    <LineChart :chart-data="chartConfiguration" :key="componentKey"/>
    <div class="w-100 d-flex justify-content-center mt-3">
        <div class="border w-50 p-4">
            <h6>Options applicables au graphique</h6>
            <div class="checkbox-wrapper-3 d-flex flex-row">
                <label>Inclure les données européennes ? </label>
                <input type="checkbox" id="cbx-3" v-model="useEUData" @change="componentKey++" />
                <label for="cbx-3" class="toggle"><span></span></label>
            </div>
            <div class="d-flex flex-row pt-2">
                <label class="me-2">De l'année : </label>
                <select class="form-select form-select-sm w-25 ms-2 me-2" v-model="fromYear">
                    <option v-for="year in availableYears" :key="year" :value="year">Année {{ year }}</option>
                </select>
                <label class="me-2">A l'année : </label>
                <select class="form-select form-select-sm w-25 ms-2" v-model="toYear">
                    <option v-for="year in  filteredToYears" :key="year" :value="year">Année {{ year }}</option>
                </select>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">

import { defineComponent } from 'vue'

import { LineChart } from 'vue-chart-3';
import { Chart, ChartData, registerables } from 'chart.js';
import { EnergyService, PriceElectricityGasInfo } from '@/services/EnergyService';

Chart.register(...registerables);

export default defineComponent({
    components: {
        LineChart,
    },
    data() {
        return {
            records: Array<PriceElectricityGasInfo>(),
            useEUData: false,
            componentKey: 0,
            availableYears: Array<number>(),
            fromYear: 0,
            toYear: 0
        }
    },
    beforeMount() {
        // setup all the data
        this.records = EnergyService.getPriceElectricityGas();
        const allYears: Set<number> = new Set<number>();
        this.records.forEach(record => allYears.add(record.year));
        this.availableYears = Array.from(allYears.values());

        this.fromYear = this.availableYears[0];
        this.toYear = this.availableYears[this.availableYears.length - 1];
    },
    computed: {
        electricityData() : number[] {
            return this.filteredRecords.map(record => record.franceElectricity);
        },
        gasData() : number[] {
            return this.filteredRecords.map(record => record.franceNaturalGas);
        },
        chartLabels() : string[] {
            return this.filteredRecords.map(record => `Année ${record.year} - Semestre ${record.semester}`);
        },
        chartConfiguration() : ChartData<"line"> {
            const configuration = {
                labels: this.chartLabels,
                datasets: [{
                    data: this.electricityData,
                    label: "Prix de l'électricité en France (€/MWh)",
                    borderColor: '#A5C8ED'
                }, {
                    data: this.gasData,
                    label: "Prix du gaz en France (€/MWh)",
                    borderColor: '#e8c3b9'
                }]
            }

            if (this.useEUData) {
                configuration.datasets.push({
                    data: this.records.map(record => record.euElectricity),
                    label: "Prix de l'électricité en Europe (€/MWh)",
                    borderColor: 'red'
                }, {
                    data: this.records.map(record => record.euNaturalGas),
                    label: "Prix du gaz naturel en Europe (€/MWh)",
                    borderColor: 'black'
                })
            }

            return configuration
        },
        filteredToYears() : number[] {
            return this.availableYears.filter(year => year > this.fromYear);
        },
        filteredRecords() : PriceElectricityGasInfo[] {
            return this.records.filter(record => record.year >= this.fromYear && record.year <= this.toYear);
        }
    },
})

</script>
