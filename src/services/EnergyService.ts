import json from '../data/energy/price-electricity-gas.json';

export type PriceElectricityGasInfo = {
    year: string;
    semester: string;
    franceNaturalGas: number; // in euro
    franceElectricity: number; // in euro
}

export class EnergyService {
    constructor() {
        // empty
    }

    static getPriceElectricityGas(): PriceElectricityGasInfo[] {
        const data: PriceElectricityGasInfo[] = [];
        json.forEach(currentData => {
            const recordFields = currentData.fields;
            const year: string = recordFields.annee;
            const semester: string = recordFields.semestre;
            const franceNaturalGas: number = recordFields.france_gaz_naturel;
            const franceElectricity: number = recordFields.france_electricite;
            data.push({
                year,
                semester,
                franceNaturalGas,
                franceElectricity
            });
        })

        return data;
    }

}