import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import {HomepageModuleModule} from "../homepage-module/homepage-module.module";
import { PreviousArticleComponent } from './previous-article/previous-article.component';
import {NextArticleComponent} from "./next-article/next-article.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomepageModuleModule
  ],
  exports: [ArticleComponent, PreviousArticleComponent],
  declarations: [ArticleComponent, PreviousArticleComponent, NextArticleComponent]
})
export class ArticleModuleModule { }
