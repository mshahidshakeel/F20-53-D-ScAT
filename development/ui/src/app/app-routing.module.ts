import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SimilarNewsComponent} from './components/news/similar-news/similar-news.component';
import {NewsArticleComponent} from './components/news/news-article/news-article.component';
import { DashboardComponent } from './components/analytics/dashboard/dashboard.component';

const routes: Routes = [
    {path: '', redirectTo: 'News/All', pathMatch: 'full'},
    {path: 'News/:type', component: SimilarNewsComponent},
    {path: 'NewsArticle/:title', component: NewsArticleComponent},
    {path: 'Dashboard', component: DashboardComponent}
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
