import { Component, OnInit } from '@angular/core';
import {SArticlesList} from "./articles-list.service";
import {IArticle} from "../../article-module/article/article.interface";
import {Slug} from 'ng2-slugify';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.sass'],
  providers: [SArticlesList]
})
export class ArticlesListComponent implements OnInit {

  articles: Array<IArticle>;
  private slug = new Slug('default');

  constructor(private articlesList: SArticlesList) { }

  private getArticlesList(){
    this.articlesList.getArticlesList().subscribe( (data: any) => {
      this.articles = data;
      data.forEach((article, i) => article.url = this.slug.slugify(article.name))
    })
  }

  ngOnInit() {
    this.getArticlesList();
  }

}
