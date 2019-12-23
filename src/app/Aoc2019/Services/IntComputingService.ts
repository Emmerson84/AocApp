import { Injectable } from '@angular/core';
import {  ProcessState } from '../Models/IntCompModels';
import {  ParamMode } from '../Models/IntCompModels';

@Injectable()
export class IntComputingService {

    public ExecuteCommandSequence(process: ProcessState) {
        process = this.GetOptCode(process);
        process = this.GetParamModes(process);

        switch (process.Optcode) {
            case 1: {
                process = this.Add(process); // day 5-a day-2
                process.Pointer = process.Pointer + 4;
                return process;
            }
            case 2: {
                process = this.Multiply(process); // day 5-a day-2
                process.Pointer = process.Pointer + 4;
                return process;
            }
            case 3: {
                process = this.SaveInput(process); // day 5-a
                process.Pointer = process.Pointer + 2;
                return process;
            }
            case 4: {
                process = this.OutputValue(process); // day 5-a
                process.Pointer = process.Pointer + 2;
                return process;
            }
            case 5: {
                return this.JumpIfFirstParamIsNotZero(process); // day 5-b
            }
            case 6: {
                return this.JumpIfFirstParamIsZero(process); // day 5-b
            }
            case 7: {
                process = this.SaveIfLessThen(process); // day 5-b
                process.Pointer = process.Pointer + 4;
                return process;
            }
            case 8: {
                process = this.SaveIfEqual(process); // day 5-b
                process.Pointer = process.Pointer + 4;
                return process;
            }
            case 99: {
                process.Finished = true;
                return process;
            }
            default: {
                process.Error = 'Encountered unknown Intcode';
                return process;
            }
        }
    }

    private GetOptCode(process: ProcessState): ProcessState {
        const instruction = process.Program[process.Pointer];

        if (instruction.toString().length === 1) {
            process.Optcode = instruction;
        } else {
            process.Optcode = +instruction.toString().slice(-2);
        }

        return process;
    }

    private GetParamModes(process: ProcessState): ProcessState {
        process.ParamModes.ParamOne = ParamMode.PositionMode;
        process.ParamModes.ParamTwo = ParamMode.PositionMode;
        process.ParamModes.ParamThree = ParamMode.PositionMode;

        if (process.Program[process.Pointer].toString().length === 3 ) {
            process.ParamModes.ParamOne = +process.Program[process.Pointer].toString()[0];
            return process;
        }

        if (process.Program[process.Pointer].toString().length === 4) {
            process.ParamModes.ParamOne = +process.Program[process.Pointer].toString()[1];
            process.ParamModes.ParamTwo = +process.Program[process.Pointer].toString()[0];
            return process;
        }

        if (process.Program[process.Pointer].toString().length === 5) {
            process.ParamModes.ParamOne = +process.Program[process.Pointer].toString()[2];
            process.ParamModes.ParamTwo = +process.Program[process.Pointer].toString()[1];
            process.ParamModes.ParamThree = +process.Program[process.Pointer].toString()[0];
            return process;
        }

        return process;
    }

    private GetParamValue(process: ProcessState, paramMode: ParamMode, paramNum: number): number {

        switch (paramMode) {
            case ParamMode.PositionMode: {
                const valueIndex = process.Program[process.Pointer + paramNum];
                return process.Program[valueIndex];
            }
            case ParamMode.ImmediateMode: {
                const valueIndex = process.Pointer + paramNum;
                return process.Program[valueIndex];
            }
            default: {
                process.Error = 'Unknown parameter mode: ' + paramMode;
            }
        }
    }

    // ---------------------------------------------------------------------------
    // --   OpCode Operations   --
    // ---------------------------------------------------------------------------

    // If paramOne equals paramTwo write 1 to paramThree else write 0 (ParamMode sensitive)
    private SaveIfEqual(process: ProcessState): ProcessState {
        const valueOne: number = this.GetParamValue(process, process.ParamModes.ParamOne, 1);
        const valueTwo: number = this.GetParamValue(process, process.ParamModes.ParamTwo, 2);

        if (process.ParamModes.ParamThree === ParamMode.ImmediateMode) {
            process.Error = 'Multiply-write-to param is in ImmediateMode, this should never be the case';
            return process;
        }

        const writeIndex = process.Program[process.Pointer + 3];
        if (valueOne === valueTwo) {
            process.Program[writeIndex] = 1;
        } else {
            process.Program[writeIndex] = 0;
        }

        return process;
    }

    // If paramOne is LessThen paramTwo write 1 to paramThree else write 0 (ParamMode sensitive)
    private SaveIfLessThen(process: ProcessState): ProcessState {
        const valueOne: number = this.GetParamValue(process, process.ParamModes.ParamOne, 1);
        const valueTwo: number = this.GetParamValue(process, process.ParamModes.ParamTwo, 2);

        if (process.ParamModes.ParamThree === ParamMode.ImmediateMode) {
            process.Error = 'Multiply-write-to param is in ImmediateMode, this should never be the case';
            return process;
        }

        const writeIndex = process.Program[process.Pointer + 3];
        if (valueOne < valueTwo) {
            process.Program[writeIndex] = 1;
        } else {
            process.Program[writeIndex] = 0;
        }

        return process;
    }

    // Sets Pointer to secondParamValue if FirstParam is Not zero (ParamMode sensitive)
    private JumpIfFirstParamIsNotZero(process: ProcessState): ProcessState {
        const firstParamValue: number = this.GetParamValue(process, process.ParamModes.ParamOne, 1);
        const secondParamValue: number = this.GetParamValue(process, process.ParamModes.ParamTwo, 2);

        if (firstParamValue !== 0) {
                process.Pointer = secondParamValue;
            } else {
                process.Pointer = process.Pointer + 3;
            }

        return process;
    }

    // Sets Pointer to paramTwo if FirstParam Is zero (ParamMode sensitive)
    private JumpIfFirstParamIsZero(process: ProcessState): ProcessState {
        const firstParamValue: number = this.GetParamValue(process, process.ParamModes.ParamOne, 1);
        const secondParamValue: number = this.GetParamValue(process, process.ParamModes.ParamTwo, 2);

        if (firstParamValue === 0) {
            process.Pointer = secondParamValue;
        } else {
            process.Pointer = process.Pointer + 3;
        }

        return process;
    }

    // Sets output to paramOne (ParamMode sensitive)
    private OutputValue(process: ProcessState): ProcessState {
        const outputValue: number = this.GetParamValue(process, process.ParamModes.ParamOne, 1);
        process.Output = outputValue;
        return process;
    }

    // Writes given input to index of paramOne
    private SaveInput(process: ProcessState): ProcessState {
        if (process.ParamModes.ParamOne === ParamMode.ImmediateMode) {
            process.Error = 'SavaInput-write-to param is in ImmediateMode, this should never be the case';
            return process;
        }

        const writeLocation = process.Program[process.Pointer + 1];
        process.Program[writeLocation] = process.Input;

        return process;
    }

    // Adds paramOne and ParamTwo then writes result to paramThree (ParamMode sensitive)
    private Add(process: ProcessState): ProcessState {
        const valueOne: number = this.GetParamValue(process, process.ParamModes.ParamOne, 1);
        const valueTwo: number = this.GetParamValue(process, process.ParamModes.ParamTwo, 2);

        if (process.ParamModes.ParamThree === ParamMode.ImmediateMode) {
            process.Error = 'Multiply-write-to param is in ImmediateMode, this should never be the case';
            return process;
        }

        const writePosition = process.Program[process.Pointer + 3];
        process.Program[writePosition] = valueOne + valueTwo;

        return process;
    }

    // Multiplies paramOne with ParamTwo then writes result to paramThree (ParamMode sensitive)
    private Multiply(process: ProcessState): ProcessState {
        const valueOne: number = this.GetParamValue(process, process.ParamModes.ParamOne, 1);
        const valueTwo: number = this.GetParamValue(process, process.ParamModes.ParamTwo, 2);

        if (process.ParamModes.ParamThree === ParamMode.ImmediateMode) {
            process.Error = 'Multiply-write-to param is in ImmediateMode, this should never be the case';
            return process;
        }

        const writePosition = process.Program[process.Pointer + 3];
        process.Program[writePosition] = valueOne * valueTwo;

        return process;
    }
}
