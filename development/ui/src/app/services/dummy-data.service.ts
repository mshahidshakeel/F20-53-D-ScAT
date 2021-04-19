import {Injectable} from '@angular/core';
import {Article} from '../models/article.model';

@Injectable({
    providedIn: 'root'
})
export class DummyDataService {
    private data: Article[] = [];

    constructor() {
        this.loadData();
    }

    /**
     * Initialized 7 Articles as Dummy Data into this.data object
     */
    private loadData(): void {
        this.data[0] = new Article(
            'PM takes notice of officers\' inaction on complaints lodged on Pakistan Citizen Portal app',
            'https://i.dawn.com/large/2019/11/5dc8d459f19ab.jpg',
            'Dawn News'
        );

        this.data[1] = new Article(
            'Fire breaks out at Cybernet-StormFiber Karachi head office, no casualties reported',
            'https://i.dawn.com/large/2019/12/5de3b09d3a5de.jpg',
            'Dawn News',
        );

        this.data[2] = new Article(
            'Hike in oil prices, power tariff to dent plan to lower input cost',
            'https://dailytimes.com.pk/assets/uploads/2017/11/14/FPCCI.jpg',
            'Daily Times'
        );

        this.data[3] = new Article(
            'Jupiter and Saturn meet in closest ëgreat conjunctioní since 1623',
            'https://dailytimes.com.pk/assets/uploads/2020/12/21/3691.jpg',
            'Daily Times'
        );

        this.data[4] = new Article(
            'First-ever study launched to assess Blue Carbon assets in Pakistan',
            'https://dailytimes.com.pk/assets/uploads/2020/02/18/Malik-Amin-Aslam-1.jpg',
            'Daily Times'
        );

        this.data[5] = new Article(
            'Concern among Muslims over halal status of Covid-19 vaccine',
            'https://dailytimes.com.pk/assets/uploads/2020/12/21/Concern-among-Muslims-over-halal-status-of-Covid-19-vaccine.jpeg',
            'Daily Times'
        );

        this.data[6] = new Article(
            '9-year-old Ryan Kaji is this year\'s highest-paid YouTuber',
            'https://i.dawn.com/large/2020/12/5fdeffd1f10a9.jpg',
            'Dawn News'
        );
    }

    /**
     * @return All Available News
     */
    getAllNews(): Article[] {
        return this.data;
    }

    getDawnNews(): Article[] {
        const dawn: Article[] = [];
        for (const article of this.data) {
            if (article.getSource() === 'Dawn News') {
                dawn.push(article);
            }
        }
        return dawn;
    }

    getDailyTimesNews(): Article[] {
        const dailyTimes: Article[] = [];
        for (const article of this.data) {
            if (article.getSource() === 'Daily Times') {
                dailyTimes.push(article);
            }
        }
        return dailyTimes;
    }

    getArticleFor(title: string): Article {
        for (const article of this.data) {
            if (article.getTitle() === title) {
                return article;
            }
        }

        return null;
    }
}
