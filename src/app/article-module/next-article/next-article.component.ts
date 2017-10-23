import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LastArticlesService } from '../../homepage-module/last-articles/last-articles.service';
import {Slug} from 'ng2-slugify';
import "rxjs/Rx"

@Component({
  selector: 'next-article',
  templateUrl: './next-article.component.html',
  styleUrls: ['./next-article.component.sass']
})
export class NextArticleComponent implements OnInit {

  nextArticle : Object;
  isNotLast : boolean = false;

  private slug = new Slug('default');

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private LastArticlesService : LastArticlesService) {
  }

  public getUrlParams() {
    this.nextArticle = {};

    this.activatedRoute.params.subscribe( (param) => {
        this.loadPrevArticle(param);
    })
  }

  public loadPrevArticle(param){
      let id = Number(param['id']); // Converts the original string to number

      return this.LastArticlesService.getLastArticles().subscribe((data: any) => {

          const olderArticle: number = Math.max.apply(Math, data.map((o) => o.id)); // Get oldest article ID
          if (id !== olderArticle){
              this.isNotLast = true;
              const prev = data.find((item) => item.id == id + 1);
              prev.slug_name = this.slug.slugify(prev.name);
              this.nextArticle = prev;
          }else{
              this.isNotLast = false;
          }
      });
  }

  ngOnInit(){
    this.getUrlParams();
  }

}
