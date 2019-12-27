import { Component, OnInit } from '@angular/core';
import { PuzzleInputService } from 'src/app/Aoc2019/Services/PuzzleInputService';

@Component({
    selector: 'day-details',
    templateUrl: 'aoc-day.component.html'
})

export class DayDetailsComponent implements OnInit {
    solution: string;

    constructor(private dService: PuzzleInputService) {}

    ngOnInit() {
        this.dService.GetSolution().subscribe(result => {
            this.solution = result;
            console.log(result);
        });
    }
}
