import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../services/blog.service';
import {News} from '../../models/news.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  news: News;
  cols: number;

  constructor(private activatedRoute: ActivatedRoute, private blogData: BlogService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.blogData.getArticleForId(params.get('id'))
          .valueChanges().subscribe(data => this.news = (data as News));
    });

    this.cols = (window.innerWidth <= 320) ? 1 : (window.innerWidth <= 600) ? 2 : 4;
  }

  onResize(event): void {
    const width = event.target.innerWidth;
    this.cols = (width <= 320) ? 1 : (width <= 600) ? 2 : 4;
  }
}
