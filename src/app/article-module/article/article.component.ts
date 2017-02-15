import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LastArticlesService} from "../../homepage-module/last-articles/last-articles.service";

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass'],
  providers: [LastArticlesService]
})
export class ArticleComponent implements OnInit {
  public articleId : number;
  public article: {};

  constructor(private route : ActivatedRoute, private LastArticlesService : LastArticlesService) {}

  public getUrlParam() : void{
    this.route.params.subscribe(params => {
      this.articleId = params['id'];
    });
  }

  public loadArticle() {
    this.getUrlParam();
    this.LastArticlesService.getLastArticles(this.articleId)
        .subscribe((data) => {
          let article = data.filter( (item) => item.id == this.articleId);
          return this.article = article[0];
        });
  }

  ngOnInit() {
    this.loadArticle();
  }

}
