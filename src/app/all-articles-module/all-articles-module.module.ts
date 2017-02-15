import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ArticlesListComponent],
  declarations: [ArticlesListComponent]
})
export class AllArticlesModuleModule { }
