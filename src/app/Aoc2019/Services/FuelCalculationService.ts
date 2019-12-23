import { Injectable } from '@angular/core';

@Injectable()
export class FuelCalculationService {

    public GetFuelRequirementsPerModule(modules: number[]): number {
        let totalFuel = 0;
        modules.forEach(m => { totalFuel += this.CalcFuelForMass(m); });
        return totalFuel;
    }

    public GetFuelRequirementsPerModuleAndFuelMass(modules: number[]): number {
        let totalFuel = 0;
        modules.forEach(m => { totalFuel += this.GetTotalFuelRequirements(m); });
        return totalFuel;
    }

    private GetTotalFuelRequirements(mass: number): number {
        let final = 0;
        if (this.CalcFuelForMass(mass) > 0 ) {
            const fuelMass: number  = this.CalcFuelForMass(mass);
            final += fuelMass;
            final += this.GetTotalFuelRequirements(fuelMass);
        }
        return final;
    }

    private CalcFuelForMass(mass: number): number {
        return Math.floor(mass / 3) - 2;
    }
}
