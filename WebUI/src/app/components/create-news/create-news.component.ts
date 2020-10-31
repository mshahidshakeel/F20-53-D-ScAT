import { Component, OnInit } from '@angular/core';
import { RawNewsService } from 'src/app/raw-news.service';
import { RawNews } from 'src/app/raw-news.model';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
  news: RawNews = new RawNews();
  submitted = false;


  constructor(private newsService: RawNewsService) { }

  ngOnInit(): void {
  }

  saveNews(): void {
    this.newsService.create(this.news).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newNews(): void {
    this.submitted = false;
    this.news = new RawNews();
  }

}
