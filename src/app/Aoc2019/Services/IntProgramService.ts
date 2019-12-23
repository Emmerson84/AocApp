// tslint:disable-next-line: quotemark
import { Injectable } from "@angular/core";
import { ProcessState } from '../Models/IntCompModels';

@Injectable()
export class IntProgramService {

    public ProgramInit(program: number[], input: number): ProcessState {
        return {
            Program: program,
            Pointer: 0,
            Error: undefined,
            Finished: false,
            Input: input,
            Output: undefined,
            Optcode: undefined,
            ParamModes: {
                ParamOne: undefined,
                ParamTwo: undefined,
                ParamThree: undefined
            }
        };
    }

    public SetCustomNounAndVerb(program: number[], noun: number, verb: number): number[] {
        program[1] = noun;
        program[2] = verb;
        return program;
    }
}
