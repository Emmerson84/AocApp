import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class PuzzleInputService {

    constructor(private http: HttpClient) {}

    public GetPuzzleInput(year: string, day: string): Observable<string> {
        const url = './assets/data/' + year + '-' + day + '.txt';
        return this.http.get(url, { responseType: 'text'});
    }
}
