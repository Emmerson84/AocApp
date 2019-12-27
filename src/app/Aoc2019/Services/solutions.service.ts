import { Injectable } from '@angular/core';

@Injectable()
export class SolutionService {
    GetSolutions(year: number) {
        // tslint:disable-next-line: no-use-before-declare
        return Solutions.find(y => y.year === year).solutions;
    }
}

const Solutions = [
    {
        year: 2019,
        solutions: [
            {
                day: 1,
                title: '--- Day 1: The Tyranny of the Rocket Equation ---',
                partOne: 'Calculate fuel requirements per module',
                partTwo: 'Calculate total fuel requirements'
            },
            {
                day: 2,
                title: '--- Day 2: 1202 Program Alarm ---',
                partOne: 'Restoring gravity assist program',
                partTwo: 'Complete gravity assist around the moon'
            }
        ],
    },
    {
        year: 2018,
        solutions: [
            {
                day: 1,
                title: '--- Day 1: Chronal Calibration ---',
                partOne: 'part one',
                partTwo: 'part two'
            },
            {
                day: 2,
                title: '--- Day 2: Inventory Management System ---',
                partOne: 'part one',
                partTwo: 'part two'
            }
        ]
    },
    {
        year: 2017,
        solutions: []
    },
    {
        year: 2016,
        solutions: []
    },
    {
        year: 2015,
        solutions: []
    }
];
