"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var article_service_1 = require('./article.service');
var ArticlesComponent = (function () {
    function ArticlesComponent(articleService) {
        this.articleService = articleService;
    }
    ArticlesComponent.prototype.onSelect = function (article) {
        this.selectedArticle = article;
    };
    ArticlesComponent.prototype.getArticles = function () {
        var _this = this;
        this.articleService.getArticles().then(function (articles) { return _this.articles = articles; });
    };
    ArticlesComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    ArticlesComponent = __decorate([
        core_1.Component({
            selector: 'my-articles',
            providers: [article_service_1.ArticleService],
            template: "\n<div class=\"articles\">\n<ul>\n<li *ngFor=\"let article of articles\" (click)=\"onSelect(article)\">\n{{article.title}} <br> {{article.description}}</li>\n</ul>\n</div>\n<div class=\"detail\">\n<article-detail [article]=\"selectedArticle\"></article-detail>\n</div>\n",
            styles: ["\n.articles {\nfloat: left;\nmargin-right: 40px;\n}\n\nli {\ncursor: pointer;\n}\n"]
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService])
    ], ArticlesComponent);
    return ArticlesComponent;
}());
exports.ArticlesComponent = ArticlesComponent;
//# sourceMappingURL=articles.component.js.map