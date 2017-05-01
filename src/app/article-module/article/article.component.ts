import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LastArticlesService} from "../../homepage-module/last-articles/last-articles.service";
import {AddCommentService, AnswerCommentService} from "../comments/comments.service";

@Component({
    selector: 'article-ffs',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.sass'],
    providers: [LastArticlesService, AddCommentService, AnswerCommentService],
})
export class ArticleComponent implements OnInit {

    public articleId: number;
    public displayCommentForm:boolean=false;
    public article: {};
    public comments : Object[];

    constructor(private route: ActivatedRoute,
                private service: LastArticlesService) {}

    getUrlParam() {
        this.route.params.subscribe(params => { // I subscribe to params URL changes and then force reloading datas with loadArticle() because Component is already initialized
            this.articleId = params['id'];
            return this.loadArticle();
        });
    }

    loadArticle() {
        this.service.getLastArticles(this.articleId)
            .subscribe((data) => {
                let article = data.filter((item) => item.id == this.articleId);
                return this.article = article[0];
            });
    }

    onAnswer(showForm){
        this.displayCommentForm = showForm;
    }

    onSubmitNewComment(hideForm){
        if(hideForm){
            this.displayCommentForm = false;
        }
    }

    ngOnInit() {
        this.getUrlParam();
    }

}
