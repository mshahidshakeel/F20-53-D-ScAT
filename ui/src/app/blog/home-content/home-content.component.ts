import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../services/blog.service';
import {Summary} from '../../models/summary.model';
import {News} from '../../models/news.model';

@Component({
    selector: 'app-home-content',
    templateUrl: './home-content.component.html',
    styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
    type: string;
    breakpoint: number;

    uniqueNews: News[];

    /**
     * This constructor initializes an ActivatedRoute object
     * that helps in interpreting current URL route
     * @param activatedRoute Current Route
     * @param blogData Service that provides Data
     */
    constructor(private activatedRoute: ActivatedRoute, private blogData: BlogService) {
    }

    ngOnInit(): void {
        /**
         * extracts the type of news from url, 'news/:type'
         * Still need to categorize
         * Not In USE
         */
        this.activatedRoute.paramMap.subscribe(params => {
            this.type = params.get('type');

            if (!this.type || this.type === 'home') {
                // Getting all unique news
                this.blogData.getUniqueNews().subscribe(data => {
                    this.uniqueNews = data.map(e => {
                        return {
                            id: e.payload.doc.id,
                            ...e.payload.doc.data() as {}
                        } as News;
                    });
                });
            } else {
                // get categorized unique news
                this.blogData.getUniqueNewsFilterBy(this.type)
                    .subscribe(data => {
                        this.uniqueNews = data.map(e => {
                            return {
                                id: e.payload.doc.id,
                                ...e.payload.doc.data() as {}
                            } as News;
                        });
                    });
            }

        });

        this.breakpoint = (window.innerWidth <= 720) ? 1 : (window.innerWidth <= 1080) ? 2 : 3;
    }

    onResize(event): void {
        const width = event.target.innerWidth;
        this.breakpoint = (width <= 720) ? 1 : (width <= 1080) ? 2 : 3;
    }
}
