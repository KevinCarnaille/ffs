import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastArticlesComponent } from './last-articles/last-articles.component';
import { RouterModule } from '@angular/router'; // We import RouterModule to allow [routerLink] use in components

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LastArticlesComponent],
  declarations: [LastArticlesComponent]
})
export class HomepageModuleModule { }
