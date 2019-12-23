import { Component, OnInit } from '@angular/core';
import { PuzzleInputService } from '../Services/PuzzleInputService';
import { FuelCalculationService } from '../Services/FuelCalculationService';

@Component({
    selector: 'aoc-dayone',
    templateUrl: './aoc2019-dayone.component.html'
})

export class Aoc2019DayOneComponent implements OnInit {
    title = '--- Day 1: The Tyranny of the Rocket Equation ---';
    rawPuzzleInput: string;
    answerPartOne = '';
    answerPartTwo = '';

    constructor(
        private inputService: PuzzleInputService,
        private FuelCalcService: FuelCalculationService) {}

    ngOnInit() {
        this.inputService.GetPuzzleInput('2019', '1')
            .subscribe(result => {
                this.rawPuzzleInput = result;
            });
    }

    GetAnswerPartOne() {
        const inputArray = this.rawPuzzleInput.split('\r\n').map(Number);
        const fuelReq = this.FuelCalcService.GetFuelRequirementsPerModule(inputArray);
        this.answerPartOne = ' the answer is: ' + fuelReq.toString();
    }

    GetAnswerPartTwo() {
        const inputArray = this.rawPuzzleInput.split('\r\n').map(Number);
        const fuelReq = this.FuelCalcService.GetFuelRequirementsPerModuleAndFuelMass(inputArray);
        this.answerPartTwo = ' the answer is: ' + fuelReq.toString();
    }
}
