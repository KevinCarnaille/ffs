import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastArticlesComponent } from './last-articles/last-articles.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LastArticlesComponent],
  declarations: [LastArticlesComponent]
})
export class HomepageModuleModule { }
