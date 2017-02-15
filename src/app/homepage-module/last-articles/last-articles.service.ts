import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LastArticlesService{
    constructor(private http: Http){}

    getLastArticles(id? : number) { // Optionnal param
        return this.http.get('./last.json').map(
            (res: Response) => res.json()
        );
    }

}
