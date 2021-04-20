import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DummyDataService} from '../../services/dummy-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private type: string;

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
    });
  }

}
