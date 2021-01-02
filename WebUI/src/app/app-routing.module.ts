import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SimilarNewsComponent} from './components/similar-news/similar-news.component';
import {NewsArticleComponent} from './components/news-article/news-article.component';

const routes: Routes = [
    {path: '', redirectTo: 'News/All', pathMatch: 'full'},
    {path: 'News/:type', component: SimilarNewsComponent},
    {path: 'NewsArticle/:title', component: NewsArticleComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
    SimilarNewsComponent
];
