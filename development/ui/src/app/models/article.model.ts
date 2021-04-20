export class Article {
    private readonly title: string;
    private readonly imageUrl: string;
    private readonly source: string;
    private readonly category: string;


    constructor(title: string, imageUrl: string, source: string, category: string) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.source = source;
        this.category = category;
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

    getCategory(): string {
        return this.category;
    }
}
