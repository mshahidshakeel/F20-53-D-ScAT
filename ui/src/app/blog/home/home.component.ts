import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../services/blog.service';
import {TestData} from '../../models/test-data.model';
import {Summary} from '../../models/summary.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  type: string;
  // summaries: Summary[];

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



    // console.log('init');

    // Data
    // this.blogData.getRecords().subscribe(data => {
    //   this.summaries = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       ...e.payload.doc.data() as {}
    //     } as Summary;
    //   });
    // });

    // console.log(this.summaries);

    // this.blogData.getTestSnapshotChanges().pipe(
    //     map(changes =>
    //       changes.map(c =>
    //           ({id: c.payload.doc.id, ...c.payload.doc.data() as {}})
    //       )
    //     )
    // ).subscribe(data => {
    //   this.testDataset = data;
    // });

    // console.log(this.testDataset);


    // const items: Observable<any[]> = this.blogData.getTestData();
    //
    // console.log(items);

    // @ts-ignore
    // for (const item of items) {
    //   console.log('item: ' + item);
    // }
  }



}
