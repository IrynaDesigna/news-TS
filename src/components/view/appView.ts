import News from './news/news';
import Sources from './sources/sources';

export interface NewsResponse {
    category: string;
    name: string;
    desciption: string;
    id: string;
    language: string;
    url: string;
}

export interface ArticlesDataSources {
    status: string;
    totalResults: number;
    articles?: Articles[];
}

export interface NewsDataSources {
    response: string;
    sources?: NewsResponse[];
}

export interface Articles {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
    source: { id: string; name: string };
}

export class AppView {
    public news: News;
    public sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesDataSources): void {
        const values: Articles[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: NewsDataSources): void {
        const values: NewsResponse[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
