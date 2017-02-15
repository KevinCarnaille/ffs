import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { HomepageModuleModule } from './homepage-module/homepage-module.module';
import {IncludesModuleModule} from "./includes-module/includes-module.module";
import {AllArticlesModuleModule} from "./all-articles-module/all-articles-module.module";
import {ArticleModuleModule} from "./article-module/article-module.module";

import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomepageModuleModule,
    IncludesModuleModule,
    AllArticlesModuleModule,
    ArticleModuleModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
