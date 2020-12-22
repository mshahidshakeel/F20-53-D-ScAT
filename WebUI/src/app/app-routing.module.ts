import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SimilarNewsComponent} from './components/similar-news/similar-news.component';
import {NewsCardComponent} from './components/news-card/news-card.component';
import {NewsArticleComponent} from './components/news-article/news-article.component';

const routes: Routes = [
    {path: '', redirectTo: 'news/all', pathMatch: 'full'},
    {path: 'news/:type', component: SimilarNewsComponent},
    {path: 'news-article', component: NewsArticleComponent}
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
