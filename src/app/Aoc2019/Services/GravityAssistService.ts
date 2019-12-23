import { Injectable } from '@angular/core';
import { IntProgramService } from './IntProgramService';
import { IntComputingService } from './IntComputingService';
import { ProcessState } from '../Models/IntCompModels';

@Injectable()
export class GravityAssistService {

    constructor(
        private intProgramService: IntProgramService,
        private intComputer: IntComputingService) {}

    // RestoreGravityAssistProgram(rawProgram: number[], noun: number, verb: number): number {
    //     rawProgram = this.SetCustomNounAndVerb(rawProgram, noun, verb);
    //     let programState = this.intProgramService.ProgramInit(rawProgram, 0);
    //     programState = RunProgram(programState);
    //     return 0;
    // }

    // RunProgram(programState: ProcessState): ProcessState {

    //     while (programState.Finished === false && programState.Error === undefined) {

    //         // console.clear();
    //         // console.log("Processing iterations: " + counter);

    //         programState = this.intComputer.ExecuteCommandSequence(programState);
    //     }

    //     if (programState.Error !== undefined) {
    //         this.answerPartOne = ' ERROR: ' + programState.Error;
    //     }

    //     if (programState.Finished) {
    //         this.answerPartOne = ' DONE - ' ;
    //     }

    //     return programState;
    // }

    SetCustomNounAndVerb(program: number[], noun: number, verb: number): number[]{
        program[1] = noun;
        program[2] = verb;
        return program;
    }
}
