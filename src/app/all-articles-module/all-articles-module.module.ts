import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // We import RouterModule to allow [routerLink] use in components
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ArticlesListComponent],
  declarations: [ArticlesListComponent]
})
export class AllArticlesModuleModule { }
