import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { RawNews } from 'src/app/raw-news.model';

@Injectable({
  providedIn: 'root'
})
export class RawNewsService {
  private dbRef: AngularFireList<RawNews> = null;
  private dbDailyTimesRef: AngularFireList<RawNews> = null;

  constructor(private db: AngularFireDatabase) {
    // Extract Root Data
    this.dbRef = this.db.list("/DailyTimes/Sport/2020-10-31 05:59:00");
    this.dbDailyTimesRef = this.db.list("/DailyTimes/Sports/2020-10-30 21:27:00");
   }

   getAll(): AngularFireList<RawNews> {
    return this.dbRef;
  }

  getChannel(channel: string): AngularFireList<RawNews> {
    if (channel == "DailyTimes"){
        return this.dbRef;
    }
    
    return this.dbRef;
    
  }

  create(rawNews: RawNews): any {
    return this.dbRef.push(rawNews);
  }

  update(key: string, value: any): Promise<void> {
    return this.dbRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.dbRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.dbRef.remove();
  }
}
