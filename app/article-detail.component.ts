import { Component, Input } from '@angular/core';
import { Article } from './article';

@Component({
    selector: 'article-detail',
    template: `
<div *ngIf="article">
    <h2>{{article.title}}</h2>
    <h4>{{article.description}}</h4>
    <div>
      {{article.content}}
    </div>
  </div>
`
})
export class ArticleDetailComponent {
    @Input()
    article: Article;
}
