import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, DocumentChangeAction} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private firestore: AngularFirestore) { }

  getUniqueNews(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('unique').snapshotChanges();
  }

  getUniqueNewsFilterBy(category: string): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('unique', ref => ref.where('category', '==', category )).snapshotChanges();
  }

  getArticleForId(id: string): AngularFirestoreDocument {
    return this.firestore.collection('unique').doc(id);
  }

  getAggrNews(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('aggregated').snapshotChanges();
  }

  getAggrNewsFilterBy(category: string): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('aggregated', ref => ref.where('category', '==', category )).snapshotChanges();
  }

  getClusterForId(id: string): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('aggregated').doc(id).collection('originals').snapshotChanges();
  }

  getArticleForAggrId(aggr: string, id: string): AngularFirestoreDocument {
    return this.firestore.collection('aggregated')
        .doc(aggr).collection('originals').doc(id);
  }

  // update(): void {
  //   this.getUniqueNews().subscribe(data => {
  //     data.map(e => {
  //       const ref = this.firestore.collection('unique').doc(e.payload.doc.id);
  //       ref.set(e.payload.doc.data()).then(r => console.log(r));
  //       // console.log(e.payload.doc.id);
  //     });
  //   });
  // }

  getRecords(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('summaries').snapshotChanges();
  }

  getDocFoSummary(id: string): AngularFirestoreDocument {
    return this.firestore.collection('summaries').doc(id);
  }

  getOriginalLinks(id: string): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('summaries')
        .doc(id).collection('original').snapshotChanges();
  }
  getRecordsFilterBy(category: string): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('summaries', ref => ref.where('category', '==', category )).snapshotChanges();

  }
}
