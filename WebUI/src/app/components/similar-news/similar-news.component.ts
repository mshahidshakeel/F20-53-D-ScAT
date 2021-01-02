import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-similar-news',
    templateUrl: './similar-news.component.html',
    styleUrls: ['./similar-news.component.css']
})
export class SimilarNewsComponent implements OnInit {
    type: string;

    /**
     * This constructor initializes an ActivatedRoute object
     * that helps in interpreting current URL route
     * @param activatedRoute Current Route
     */
    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        /**
         * extracts the type of news from url, 'news/:type'
         */
        this.activatedRoute.paramMap.subscribe(params => {
            this.type = params.get('type');
        });
    }

}
