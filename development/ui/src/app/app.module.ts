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
import {NewsCardComponent} from './components/news/news-card/news-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { LayoutModule } from '@angular/cdk/layout';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NewsArticleComponent } from './components/news/news-article/news-article.component';
import { DashboardComponent } from './components/analytics/dashboard/dashboard.component';
import { NumbersComponent } from './components/analytics/numbers/numbers.component';
import { GraphComponent } from './components/analytics/graph/graph.component';
import { MiniGraphComponent } from './components/analytics/mini-graph/mini-graph.component';
import { HomeComponent } from './blog/home/home.component';
import { CategoryBlockComponent } from './components/blocks/category-block/category-block.component';
import { HomeHeaderComponent } from './components/blocks/home-header/home-header.component';
import { HomeContentComponent } from './components/blocks/home-content/home-content.component';

@NgModule({
    declarations: [
        AppComponent,
        NewsCardComponent,
        routingComponents,
        NewsArticleComponent,
        DashboardComponent,
        NumbersComponent,
        GraphComponent,
        MiniGraphComponent,
        HomeComponent,
        CategoryBlockComponent,
        HomeHeaderComponent,
        HomeContentComponent
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