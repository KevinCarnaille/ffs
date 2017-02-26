import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import {HomepageModuleModule} from "../homepage-module/homepage-module.module";
import { PrevArticleComponent } from './prev-article/prev-article.component';
import {NextArticleComponent} from "./next-article/next-article.component";
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomepageModuleModule
  ],
  exports: [ArticleComponent, PrevArticleComponent],
  declarations: [ArticleComponent, NextArticleComponent, PrevArticleComponent, CommentsComponent]
})
export class ArticleModuleModule { }
