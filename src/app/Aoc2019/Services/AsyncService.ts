import { Injectable } from '@angular/core';


@Injectable()
export class AsyncService {

    public async GetData(): Promise< number[] > {

        // const wait = new Promise<string>((res) => {
        //     setTimeout(() => {
        //         res('balsdbask');
        //     }, 3000);
        // });
        const newPromise = new Promise<number[]>((result) => this.CalculateData());

        return newPromise;
    }

    CalculateData(): number[] {
        const array = [];
        for (let i = 0; i < 100000000; i++) {
            array.push(i);
        }
        return array;
    }
}
