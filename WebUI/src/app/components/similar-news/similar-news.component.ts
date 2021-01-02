import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DummyDataService} from '../../services/dummy-data.service';
import {Article} from '../../models/article.model';

@Component({
    selector: 'app-similar-news',
    templateUrl: './similar-news.component.html',
    styleUrls: ['./similar-news.component.css']
})
export class SimilarNewsComponent implements OnInit {
    private type: string;
    private data: Article[];

    /**
     * This constructor initializes an ActivatedRoute object
     * that helps in interpreting current URL route
     * @param activatedRoute Current Route
     * @param dummyData Service that provides Data
     */
    constructor(private activatedRoute: ActivatedRoute, private dummyData: DummyDataService) {
    }

    ngOnInit(): void {
        /**
         * extracts the type of news from url, 'news/:type'
         * Still need to categorize
         * Not In USE
         */
        this.activatedRoute.paramMap.subscribe(params => {
            this.type = params.get('type');
            switch (this.type) {
                case 'Dawn':
                    this.data = this.dummyData.getDawnNews();
                    break;
                case 'DailyTimes':
                    this.data = this.dummyData.getDailyTimesNews();
                    break;
                default:
                    this.data = this.dummyData.getAllNews();
            }
        });
    }

    getNewsArticles(): Article[] {
        return this.data;
    }
}
