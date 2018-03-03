import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomepageModuleModule } from './homepage-module/homepage-module.module';
import {IncludesModuleModule} from './includes-module/includes-module.module';
import {AllArticlesModuleModule} from './all-articles-module/all-articles-module.module';
import {ArticleModuleModule} from './article-module/article-module.module';
import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import {ContactModuleModule} from './contact-module/contact-module.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HomepageModuleModule,
    IncludesModuleModule,
    AllArticlesModuleModule,
    ArticleModuleModule,
    ContactModuleModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
