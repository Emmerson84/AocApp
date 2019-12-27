import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivationStart } from '@angular/router';
import { SolutionService } from '../Aoc2019/Services/solutions.service';

@Component({
    // templateUrl: 'aoc-year-overview.component.html'
    template: `
            <div>Overview: {{selectedYear}}</div>
            <day-thumbnail *ngFor="let solution of solutions" [solution]="solution" [selectedYear]="selectedYear"></day-thumbnail>`
})

export  class YearOverviewComponent implements OnInit {
    selectedYear: number;
    solutions: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private solutionService: SolutionService) {}

    ngOnInit() {
        this.selectedYear = +this.route.snapshot.params.year;
        this.solutions = this.solutionService.GetSolutions(this.selectedYear);

        this.router.events.subscribe(event => {
            if (event instanceof ActivationStart) {
                this.selectedYear = +event.snapshot.params.year;
                this.solutions = this.solutionService.GetSolutions(this.selectedYear);
            }
        });
    }
}
