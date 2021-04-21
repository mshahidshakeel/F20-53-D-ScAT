import {Component, OnInit} from '@angular/core';
import {News} from '../../models/news.model';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../services/blog.service';

@Component({
    selector: 'app-cluster-content',
    templateUrl: './cluster-content.component.html',
    styleUrls: ['./cluster-content.component.css']
})
export class ClusterContentComponent implements OnInit {
    id: string;
    breakpoint: number;

    cluster: News[];

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
            this.id = params.get('id');

            this.blogData.getClusterForId(this.id).subscribe(data => {
                this.cluster = data.map(e => {
                    return {
                        id: e.payload.doc.id,
                        ...e.payload.doc.data() as {}
                    } as News;
                });
            });
        });

        this.breakpoint = (window.innerWidth <= 720) ? 1 : (window.innerWidth <= 1080) ? 2 : 3;
    }

    onResize(event): void {
        const width = event.target.innerWidth;
        this.breakpoint = (width <= 720) ? 1 : (width <= 1080) ? 2 : 3;
    }
}
