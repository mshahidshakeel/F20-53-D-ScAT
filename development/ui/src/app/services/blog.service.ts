import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private firestore: AngularFirestore) { }

  // tslint:disable-next-line:typedef
  getRecords() {
    return this.firestore.collection('summaries').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getTestData() {
    return this.firestore.collection('test').valueChanges();
  }
}
