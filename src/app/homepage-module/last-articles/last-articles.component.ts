import { Component, OnInit } from '@angular/core';
import { LastArticlesService } from './last-articles.service';
import {Router} from '@angular/router';
import { Slug } from 'ng2-slugify';
import 'rxjs/add/operator/map';

@Component({
  selector: 'last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.sass'],
  providers: [LastArticlesService]
})
export class LastArticlesComponent implements OnInit {

  constructor(private LastArticlesService : LastArticlesService) { }
  articles = [];
  private slug = new Slug('default');

  public loadArticles(): void {
    this.LastArticlesService.getLastArticles().subscribe(data => {
        this.articles = data;
        data.forEach((article, i) => article.url = this.slug.slugify(article.name))
    });
  }

  ngOnInit() {
    this.loadArticles();
  }

  // goToArticle(article){
  //   this.router.navigate(['/article', article.id, article.url]);
  // }

}
