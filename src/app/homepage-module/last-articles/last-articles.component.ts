import { Component, OnInit } from '@angular/core';
import { LastArticlesService } from './last-articles.service';
import {IArticle} from "../../article-module/article/article.interface";
import { Slug } from 'ng2-slugify';
import 'rxjs/add/operator/map';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.sass'],
  providers: [LastArticlesService]
})
export class LastArticlesComponent implements OnInit{

  articles: Array<IArticle>;
  private slug = new Slug('default');

  constructor(private LastArticlesService : LastArticlesService, private route: ActivatedRoute, private router: Router) {}

  public loadArticles(): void {
    this.LastArticlesService.getLastArticles().subscribe((data: any) => {
        this.articles = data;
        data.forEach((article, i) => article.url = this.slug.slugify(article.name))
    });
  }

  ngOnInit() {
    this.loadArticles();
  }

}
