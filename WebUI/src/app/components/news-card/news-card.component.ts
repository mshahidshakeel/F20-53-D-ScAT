import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-news-card',
    templateUrl: './news-card.component.html',
    styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
    isActive = false;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    cardClicked(): void {
        this.router.navigateByUrl('news');
    }
}
