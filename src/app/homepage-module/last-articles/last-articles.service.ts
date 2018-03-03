import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LastArticlesService{
    constructor(private http: HttpClient){}

    getLastArticles(id? : number) { // Optionnal param
        return this.http.get('/assets/last.json');
    }

}
