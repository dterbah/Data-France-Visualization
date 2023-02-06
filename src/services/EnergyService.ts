import json from '../data/energy/price-electricity-gas.json';

export type PriceElectricityGasInfo = {
    year: number;
    semester: string;
    franceNaturalGas: number; // in euro
    franceElectricity: number; // in euro
    euNaturalGas: number;
    euElectricity: number;
}

export class EnergyService {
    constructor() {
        // empty
    }

    static getPriceElectricityGas(): PriceElectricityGasInfo[] {
        const data: PriceElectricityGasInfo[] = [];
        json.forEach(currentData => {
            const recordFields = currentData.fields;
            const year: number = parseInt(recordFields.annee);
            const semester: string = recordFields.semestre;
            const franceNaturalGas: number = recordFields.france_gaz_naturel;
            const franceElectricity: number = recordFields.france_electricite;
            const euNaturalGas: number = recordFields.u_e_gaz_naturel;
            const euElectricity: number = recordFields.u_e_electricite;

            data.push({
                year,
                semester,
                franceNaturalGas,
                franceElectricity,
                euNaturalGas,
                euElectricity
            });
        })

        // sort data by the year and semester value
        data.sort((a, b) => {
            if ( a.year < b.year ){
                return -1;
              }
              if ( a.year > b.year ){
                return 1;
              }
              return 0;
        })

        return data;
    }

}