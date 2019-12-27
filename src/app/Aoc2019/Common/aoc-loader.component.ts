import { Component } from '@angular/core';

@Component({
    selector: 'aoc-loader',
    template: '<p class="loading">Calculating</p>',
    styles: [`
        .loading:after {
            content: ' .';
            animation: dots 1s steps(5, end) infinite;}
        @keyframes dots {
            0%, 30% {
            color: rgba(0,0,0,0);
            text-shadow:
                .25em 0 0 rgba(0,0,0,0),
                .5em 0 0 rgba(0,0,0,0);}
            40% {
            color: white;
            text-shadow:
                .25em 0 0 rgba(0,0,0,0),
                .5em 0 0 rgba(0,0,0,0);}
            60% {
            text-shadow:
                .25em 0 0 white,
                .5em 0 0 rgba(0,0,0,0);}
            80%, 100% {
            text-shadow:
                .25em 0 0 white,
                .5em 0 0 white;}}
    `]
})

export class LoaderComponent {}
