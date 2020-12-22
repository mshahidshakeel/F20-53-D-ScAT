import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SimilarNewsComponent} from './components/similar-news/similar-news.component';
import {NewsCardComponent} from './components/news-card/news-card.component';

const routes: Routes = [
    {path: '', component: SimilarNewsComponent},
    {path: 'news', component: NewsCardComponent}
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
