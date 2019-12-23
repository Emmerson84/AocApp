export interface ProcessState {
    Program: number[];
    Pointer: number;
    Finished: boolean;
    Error: string;
    Input: number;
    Output: number;
    Optcode: number;
    ParamModes: ParamModes;
}

export interface ParamModes {
    ParamOne: ParamMode;
    ParamTwo: ParamMode;
    ParamThree: ParamMode;
}

export enum ParamMode {
    PositionMode = 0,
    ImmediateMode = 1
}
