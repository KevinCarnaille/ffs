import { RouterModule, Routes } from '@angular/router';
import {LastArticlesComponent} from "./homepage-module/last-articles/last-articles.component";
import {ArticlesListComponent} from "./all-articles-module/articles-list/articles-list.component";
import {ArticleComponent} from "./article-module/article/article.component";
import {ContactFormComponent} from "./contact-module/contact-form/contact-form.component";


export const ROUTES: Routes = [
    {path: '', component: LastArticlesComponent},
    {path: 'articles', component: ArticlesListComponent, data : { state : 'articles'}},
    {path: 'article/:id/:slug', component: ArticleComponent, data : { state : 'article'}},
    {path: 'contact', component: ContactFormComponent, data : { state : 'contact'}}
];
