import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import {HomepageModuleModule} from "../homepage-module/homepage-module.module";

@NgModule({
  imports: [
    CommonModule,
    HomepageModuleModule
  ],
  exports: [ArticleComponent],
  declarations: [ArticleComponent]
})
export class ArticleModuleModule { }
