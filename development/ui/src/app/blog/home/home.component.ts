import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DummyDataService} from '../../services/dummy-data.service';
import {BlogService} from '../../services/blog.service';
import {TestData} from '../../models/test-data.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private type: string;
  private testDataset: TestData[];

  /**
   * This constructor initializes an ActivatedRoute object
   * that helps in interpreting current URL route
   * @param activatedRoute Current Route
   * @param blogData Service that provides bolg Data
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
    });

    console.log('init');

    // Data
    // this.blogData.getTestData().subscribe(data => {
    //   this.testDataset = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       ...e.payload.doc.data()
    //     } as TestData;
    //   });
    // });

    const items: Observable<any[]> = this.blogData.getTestData();

    console.log(items);

    // @ts-ignore
    // for (const item of items) {
    //   console.log('item: ' + item);
    // }
  }



}
