import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LastArticlesService{
    constructor(private http: Http){}

    getLastArticles() {
        return this.http.get('app/homepage-module/last-articles/last.json').map(
            (res: Response) => res.json()
        );
    }

}
