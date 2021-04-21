import { Component, OnInit } from '@angular/core';
import {News} from '../../models/news.model';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../services/blog.service';
import {Aggr} from '../../models/aggr.model';

@Component({
  selector: 'app-aggr-content',
  templateUrl: './aggr-content.component.html',
  styleUrls: ['./aggr-content.component.css']
})
export class AggrContentComponent implements OnInit {
  type: string;
  breakpoint: number;

  aggrNews: Aggr[];

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
        this.blogData.getAggrNews().subscribe(data => {
          this.aggrNews = data.map(e => {
            console.log(e.payload.doc.id);
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data() as {}
            } as Aggr;
          });
        });
      } else {
        // get categorized unique news
        this.blogData.getAggrNewsFilterBy(this.type)
            .subscribe(data => {
              this.aggrNews = data.map(e => {
                console.log(e.payload.doc.id);
                return {
                  id: e.payload.doc.id,
                  ...e.payload.doc.data() as {}
                } as Aggr;
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
