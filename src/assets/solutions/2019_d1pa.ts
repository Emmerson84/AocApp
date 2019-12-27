function GetFuelRequirementsPerModule(modules: number[]): number {
        let totalFuel = 0;
        modules.forEach(m => { totalFuel += this.CalcFuelForMass(m); });
        return totalFuel;
    }

function GetFuelRequirementsPerModuleAndFuelMass(modules: number[]): number {
    let totalFuel = 0;
    modules.forEach(m => { totalFuel += this.GetTotalFuelRequirements(m); });
    return totalFuel;
}

function GetTotalFuelRequirements(mass: number): number {
    let final = 0;
    if (this.CalcFuelForMass(mass) > 0 ) {
        const fuelMass: number  = this.CalcFuelForMass(mass);
        final += fuelMass;
        final += this.GetTotalFuelRequirements(fuelMass);
    }
    return final;
}

function CalcFuelForMass(mass: number): number {
    return Math.floor(mass / 3) - 2;
}
