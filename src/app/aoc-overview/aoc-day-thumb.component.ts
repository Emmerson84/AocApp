import { Component, Input } from '@angular/core';

@Component({
    selector: 'day-thumbnail',
    // templateUrl: 'aoc-day-thumb.component.html'
    template: `
            <div><h1>{{selectedYear}}</h1>
                <h1>{{solution?.title}}</h1>
                <div><a [routerLink]="[solution.day, 'a']">{{solution?.partOne}}</a></div>
                <div><a [routerLink]="[solution.day, 'b']">{{solution?.partTwo}}</a></div>
            </div>`
})

export class DayThumbnailComponent {
    @Input() solution: any;
    @Input() selectedYear: number;
}
