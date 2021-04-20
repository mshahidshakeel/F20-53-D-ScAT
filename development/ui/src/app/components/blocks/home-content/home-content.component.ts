import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../models/article.model';
import {ActivatedRoute} from '@angular/router';
import {DummyDataService} from '../../../services/dummy-data.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  type: string;
  data: Article[];

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
        case 'technology':
          this.data = this.dummyData.getTechnologyNews();
          break;
        case 'dailytimes':
          this.data = this.dummyData.getDailyTimesNews();
          break;
        case 'dawn':
          this.data = this.dummyData.getDawnNews();
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
