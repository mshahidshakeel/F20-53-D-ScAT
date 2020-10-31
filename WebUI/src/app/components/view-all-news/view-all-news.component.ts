import { Component, OnInit, Input } from '@angular/core';
import { RawNewsService } from 'src/app/raw-news.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-all-news',
  templateUrl: './view-all-news.component.html',
  styleUrls: ['./view-all-news.component.css']
})
export class ViewAllNewsComponent implements OnInit {
  newsList: any;
  channels = ['Dawn', 'DailyTimes'];

  constructor(private newsService: RawNewsService) {
      this.retrieveNews();
  }

  ngOnInit(): void {
  }

  retrieveNews(): void {
    this.newsService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.newsList = data;
    });
  }

  search(channel: string): void {
    this.newsService.getChannel(channel).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.newsList = data;
      // window.location.reload();
    });
  }
}
