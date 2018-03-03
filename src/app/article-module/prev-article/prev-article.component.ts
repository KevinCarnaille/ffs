import { Component, OnInit } from '@angular/core';
import {LastArticlesService} from "../../homepage-module/last-articles/last-articles.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Slug} from "ng2-slugify";

@Component({
  selector: 'prev-article',
  templateUrl: './prev-article.component.html',
  styleUrls: ['./prev-article.component.sass']
})
export class PrevArticleComponent implements OnInit {

  prevArticle : Object;
  isFirst : boolean = false;

  private slug = new Slug('default');

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private LastArticlesService : LastArticlesService) {
  }

  public getUrlParams() {
    this.prevArticle = {};

    this.activatedRoute.params.subscribe( (param) => {
      this.loadPrevArticle(param);
    })
  }

  public loadPrevArticle(param){
    let id = Number(param['id']); // Converts the original string to number

    return this.LastArticlesService.getLastArticles().subscribe((data: any) => {

      const recentArticle: number = Math.min.apply(Math, data.map((o) => o.id)); // Get most recent article ID
      if (id > recentArticle){
        this.isFirst = false;
        let prev = data.find((item) => item.id == id - 1);
        prev.slug_name = this.slug.slugify(prev.name);
        this.prevArticle = prev;
      }else{
        this.isFirst = true;
      }
    });
  }

  ngOnInit(){
    this.getUrlParams();
  }

}
