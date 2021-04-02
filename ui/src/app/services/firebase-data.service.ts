import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {
  private analyticsPath =  '/analytics';
  private categoryWiseAnalyticsPath = this.analyticsPath + '/category-wise';

  // categoryAnalytics: AngularFireList<CategoryAnalytics> = null

  // businessAnalytica: CategoryAnalytics = null


  constructor(private db: AngularFireDatabase) {
    // console.log(this.categoryWiseAnalyticsPath)
      // this.categoryAnalytics = this.db.list(this.categoryWiseAnalyticsPath)
      // console.log('FirebaseDataService: ' + this.categoryAnalytics)
      // console.log(this.db.object('/analytics'));

    const business = this.db.object(this.categoryWiseAnalyticsPath + '/Business');
    // const businessData: Observable<any> = business.valueChanges();
    console.log('-------------------------->>');
    console.log(business);
    console.log(business);
    console.log('-------------------------->>');
   }

  // getClusters(): void {
  //
  // }

  // getAnalytica(): CategoryAnalytics {
  //
  // }
  //
  // getAll(): AngularFireList<CategoryAnalytics> {
  //   return this.categoryAnalytics;
  // }
}
