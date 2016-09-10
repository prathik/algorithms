import { Injectable } from '@angular/core';
import { Article } from './articles';
import { ARTICLES } from './mock-articles';

@Injectable()
export class ArticleService {
       getArticles(): Promise<Article[]> {
           return Promise.resolve(ARTICLES);
       }
}
