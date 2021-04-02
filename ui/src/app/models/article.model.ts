export class Article {
    private readonly title: string;
    private readonly imageUrl: string;
    private readonly source: string;


    constructor(title: string, imageUrl: string, source: string) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.source = source;
    }


    getTitle(): string {
        return this.title;
    }

    getImageUrl(): string {
        return this.imageUrl;
    }

    getSource(): string {
        return this.source;
    }
}
