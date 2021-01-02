import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Article} from '../../models/article.model';


@Component({
    selector: 'app-news-card',
    templateUrl: './news-card.component.html',
    styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
    isActive = false;
    @Input() article: Article;
    count = 0;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }
}
