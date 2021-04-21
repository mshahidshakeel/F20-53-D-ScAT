import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SimilarNewsComponent} from './components/news/similar-news/similar-news.component';
import { DashboardComponent } from './components/analytics/dashboard/dashboard.component';
import {HomeComponent} from './blog/home/home.component';
import {ArticleComponent} from './blog/article/article.component';
import {ClusterComponent} from './blog/cluster/cluster.component';
import {AggrArticleComponent} from './blog/aggr-article/aggr-article.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'blog/:type', component: HomeComponent},
    {path: 'article/:id', component: ArticleComponent},
    {path: 'article/:aggr/:id', component: AggrArticleComponent},
    {path: 'cluster/:id', component: ClusterComponent},
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
