import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
})

export class NavBarComponent implements OnInit {

    aocYears: number[];
    constructor(private router: Router) {}

    ngOnInit() {
        const firstAocYear = 2015;
        this.aocYears = this.GetAllAocYears(firstAocYear);
    }

    GetAllAocYears(startYear: number): number[] {
        const currentYear: number = new Date().getFullYear();
        const totalAocYears = currentYear - (startYear - 1);
        const aocYears: number[] = [];

        for (let i = 0; i < totalAocYears; i++) {
            aocYears.push(startYear + i);
        }

        return aocYears;
    }
}
