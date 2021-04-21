import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SimilarNewsComponent} from './components/news/similar-news/similar-news.component';
import {NewsArticleComponent} from './components/news/news-article/news-article.component';
import { DashboardComponent } from './components/analytics/dashboard/dashboard.component';
import {HomeComponent} from './blog/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'blog/:type', component: HomeComponent},
    {path: 'article/:title', component: NewsArticleComponent},
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
