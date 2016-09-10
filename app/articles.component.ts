import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';


@Component({
    selector: 'my-articles',
    providers: [ArticleService],
    template: `
<div class="articles">
<ul>
<li *ngFor="let article of articles" (click)="onSelect(article)">
{{article.title}} <br> {{article.description}}</li>
</ul>
</div>
<div class="detail">
<article-detail [article]="selectedArticle"></article-detail>
</div>
`,
    styles: [`
.articles {
float: left;
margin-right: 40px;
}

li {
cursor: pointer;
}
`]
})
export class ArticlesComponent implements OnInit {
    articles: Article[];
    selectedArticle: Article;
    constructor(private articleService: ArticleService) { }

    onSelect(article: Article): void {
        this.selectedArticle = article;
    }
    
    getArticles(): void {
        this.articleService.getArticles().then(articles => this.articles = articles);
    }

    ngOnInit(): void {
        this.getArticles();
    }
}
