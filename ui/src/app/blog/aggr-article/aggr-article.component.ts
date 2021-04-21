import { Component, OnInit } from '@angular/core';
import {News} from '../../models/news.model';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-aggr-article',
  templateUrl: './aggr-article.component.html',
  styleUrls: ['./aggr-article.component.css']
})
export class AggrArticleComponent implements OnInit {
  news: News;
  cols: number;

  constructor(private activatedRoute: ActivatedRoute, private blogData: BlogService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const aggr = params.get('aggr');
      const id = params.get('id');
      console.log({aggr, id});
      this.blogData.getArticleForAggrId(aggr, id)
          .valueChanges().subscribe(data => this.news = (data as News));
    });

    this.cols = (window.innerWidth <= 320) ? 1 : (window.innerWidth <= 600) ? 2 : 4;
  }

  onResize(event): void {
    const width = event.target.innerWidth;
    this.cols = (width <= 320) ? 1 : (width <= 600) ? 2 : 4;
  }
}
