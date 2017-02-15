import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LastArticlesService} from "../../homepage-module/last-articles/last-articles.service";

@Component({
    selector: 'article-ffs',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.sass'],
    providers: [LastArticlesService]
})
export class ArticleComponent implements OnInit {
    public articleId: number;
    public article: {};

    constructor(private route: ActivatedRoute, private service: LastArticlesService) {
    }

    public getUrlParam() {
        this.route.params.subscribe(params => { // I subscribe to params URL changes and then force reloading datas with loadArticle() because Component is already initialized
            this.articleId = params['id'];
            return this.loadArticle();
        });
    }

    public loadArticle() {
        this.service.getLastArticles(this.articleId)
            .subscribe((data) => {
                let article = data.filter((item) => item.id == this.articleId);
                return this.article = article[0];
            });
    }

    ngOnInit() {
        this.getUrlParam();
    }

}
