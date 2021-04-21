import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Article} from '../../models/article.model';
import {Summary} from '../../models/summary.model';


@Component({
    selector: 'app-news-card',
    templateUrl: './news-card.component.html',
    styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
    isActive = false;
    // @Input() summary: Summary;
    @Input() id: string;
    @Input() image: string;
    @Input() title: string;
    count = 0;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }
}
