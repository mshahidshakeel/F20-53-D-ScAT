import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export class Summary {
    id: string;
    title: string;
    image: string;
    category: string;
    body: string;
    dateAdded: Timestamp;

    // tslint:disable-next-line:typedef
    string() {
        return this.id + ' ' + this.title;
    }
}
