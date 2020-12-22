import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
// Might want to remove the menu dependency

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/old/home/home.component';
import {AggregationComponent} from './components/old/aggregation/aggregation.component';
import {PageNotFoundComponent} from './components/old/page-not-found/page-not-found.component';
import {CardTestComponent} from './components/old/modules/card-test/card-test.component';
import {NewsCardComponent} from './components/news-card/news-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { AggregationDashComponent } from './components/old/aggregation-dash/aggregation-dash.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './components/old/nav/nav.component';
import { SimilarityCheckComponent } from './components/old/similarity-check/similarity-check.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
// import { SimilarNewsComponent } from './components/similar-news/similar-news.component';

// const appRoutes: Routes = [
//     // {path: '', redirectTo: 'home'},
//     // {path: '', component: HomeComponent},
//     // {path: 'similarity', component: SimilarityCheckComponent},
//     // {path: '**', component: PageNotFoundComponent}
// ];

@NgModule({
    declarations: [
        AppComponent,
        NewsCardComponent,
        routingComponents
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatChipsModule,
        MatMenuModule,
        LayoutModule,
        MatSidenavModule,
        MatListModule,
        MatBadgeModule,
        MatTooltipModule,
        MatPaginatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
