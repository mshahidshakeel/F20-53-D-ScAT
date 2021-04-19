import { Component, OnInit } from '@angular/core';
import { FirebaseDataService } from 'src/app/services/firebase-data.service';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  analytics: any;

  constructor() {}

  ngOnInit(): void {
    // this.retrieveCategoryWiseAnalytics()
    // console.log(this.analytics)
      
  }

  // retrieveCategoryWiseAnalytics(): void {
  //   this.firebaseService.getAll().snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c => 
  //         ({key: c.payload.key, ...c.payload.val() })
  //       )
  //     )
  //   ).subscribe(
  //     data => {
  //       this.analytics = data
  //       console.log('data')
  //       console.log(data)
  //     }
  //   )
  // }

}
