import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-news-card',
    templateUrl: './news-card.component.html',
    styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
    isActive = false;

    @Input() public title = 'Default Title';
    @Input() public imageUrl = '../../../assets/unavailable-image.jpg';
    @Input() public source = 'Unknown Source';
    @Input() public count = 0;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    cardClicked(title: string, imageUrl: string, source: string): void {
        this.router.navigateByUrl('news-article');
    }
}
