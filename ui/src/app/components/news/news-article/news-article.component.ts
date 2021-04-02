import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DummyDataService} from '../../../services/dummy-data.service';
import {Article} from '../../../models/article.model';

@Component({
    selector: 'app-news-article',
    templateUrl: './news-article.component.html',
    styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit {
    article: Article;
    body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Ad culpa debitis eos magni quibusdam, quidem. Ad aliquam animi ' +
        'architecto corporis delectus dicta distinctio dolor doloremque eius, ' +
        'et eum excepturi expedita explicabo facilis fuga hic itaque nam ' +
        'necessitatibus nemo obcaecati, odit praesentium provident quae qui ' +
        'quis reiciendis sapiente suscipit ullam vitae voluptas? Culpa delectus ' +
        'nam nostrum porro quae quisquam reiciendis reprehenderit repudiandae. ' +
        'Accusamus aliquam amet aut corporis delectus doloremque doloribus laborum ' +
        'magnam nam natus nemo, perspiciatis quia reiciendis repellendus rerum tempore, ' +
        'veritatis vero. Accusamus aliquam amet asperiores commodi consectetur cumque ' +
        'doloribus, ea eaque fuga libero, nam neque porro quia, quidem sequi.';

    constructor(private activatedRoute: ActivatedRoute, private dummyData: DummyDataService) {
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            this.article = this.dummyData.getArticleFor(params.get('title'));
        });
    }
}
