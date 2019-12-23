import { Component, OnInit } from '@angular/core';
import { PuzzleInputService } from '../Services/PuzzleInputService';
import { IntComputingService } from '../Services/IntComputingService';
import { IntProgramService } from '../Services/IntProgramService';
import { ProcessState } from '../Models/IntCompModels';

@Component({
    selector: 'aoc-daytwo',
    templateUrl: 'aoc2019-daytwo.component.html'
})

export class Aoc2019DayTwoComponent {
    title = '--- Day 2: 1202 Program Alarm ---';
    rawPuzzleInput: string;
    answerPartOne = '';
    answerPartTwo = '';

    constructor(
        private inputService: PuzzleInputService,
        private intProgramService: IntProgramService,
        private intComputer: IntComputingService) {}

    ngOnInit() {
        this.inputService.GetPuzzleInput('2019', '2')
            .subscribe(result => {
                this.rawPuzzleInput = result;
            });
        }

    GetAnswerPartOne() {
        let intCodeProgram = this.rawPuzzleInput.split(',').map(Number);
        intCodeProgram = this.intProgramService.SetCustomNounAndVerb(intCodeProgram, 12, 2);
        let programState = this.intProgramService.ProgramInit(intCodeProgram, 0);

        while (programState.Finished === false && programState.Error === undefined) {

            // console.clear();
            // console.log("Processing iterations: " + counter);

            programState = this.intComputer.ExecuteCommandSequence(programState);
        }

        if (programState.Error !== undefined) {
            this.answerPartOne = ' ERROR: ' + programState.Error;
        }

        if (programState.Finished) {
            this.answerPartOne = ' DONE - ' ;
        }

        this.answerPartOne += ' the answer is: ' + programState.Program[0];
    }

    GetAnswerPartTwo() {
        let intCodeProgram = this.rawPuzzleInput.split(',').map(Number);
        intCodeProgram = this.intProgramService.SetCustomNounAndVerb(intCodeProgram, 12, 2);
        let programState = this.intProgramService.ProgramInit(intCodeProgram, 0);



        // for (let noun = 0; noun <= 99; noun++) {
        //     for (let verb = 0; verb <= 99; verb++) {

        //         let resetProgram: number[] = [];
        //         resetProgram = this.GetResetProgram(program);
        //         resetProgram = this.intProgramService.SetCustomNounAndVerb(resetProgram, noun, verb);
        //         programState = this.RunProgram(programState);

        //         if(result[0] == 19690720){
        //             return 100 * noun + verb;
        //         }
        //     }
        // }

        this.answerPartTwo += ' the answer is: ' + programState.Program[0];
    }

    GetResetProgram(program: number[]): number[]{
        var resetProgram = [];
        for(var i = 0; i < program.length; i++){
            resetProgram.push(program[i]);
        }    
        return resetProgram;
    }

    RunProgram(programState: ProcessState): ProcessState {
        while (programState.Finished === false && programState.Error === undefined) {

            // console.clear();
            // console.log("Processing iterations: " + counter);

            programState = this.intComputer.ExecuteCommandSequence(programState);
        }

        return programState;
    }
}
