import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'aoc-test',
    template: `<button (click)="ClickButton()">refresh</button>
                    <aoc-loader *ngIf="loading"></aoc-loader>`
})


export class TestComponent  {
    loading = false;

    async ClickButton() {
        this.showloader(true);
        const result = await this.DoLongJob();
        this.showloader(false);
    }

    showloader(show: boolean) {
        console.log(`show loader: ${show}`);
        this.loading = show;
    }

    DoLongJob(): Promise< number[] > {
        return new Promise<number[]>(() => this.CalculateData());
    }

     CalculateData(): number[] {
        const array = [];
        for (let i = 0; i < 100000000; i++) {
            array.push(i);
        }
        return array;
    }
}
