import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticlesComponent } from './articles.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
    imports:      [ BrowserModule,
                    FormsModule],
    declarations: [ AppComponent,
                    ArticleDetailComponent,
                    ArticlesComponent
                  ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
