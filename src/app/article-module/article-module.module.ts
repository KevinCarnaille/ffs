import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import {HomepageModuleModule} from "../homepage-module/homepage-module.module";
import { PrevArticleComponent } from './prev-article/prev-article.component';
import {NextArticleComponent} from "./next-article/next-article.component";
import { CommentsComponent } from './comments/comments.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomepageModuleModule,
    ReactiveFormsModule
  ],
  exports: [ArticleComponent, PrevArticleComponent],
  declarations: [ArticleComponent, NextArticleComponent, PrevArticleComponent, CommentsComponent, CommentFormComponent]
})
export class ArticleModuleModule { }
