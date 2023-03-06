import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostListComponent } from './post-list/post-list.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { HighlightDirective } from './highlight.directive';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    PostListComponent,
    ViewPostComponent,
    TruncatePipe,
    PaginatorComponent,
    HighlightDirective,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TruncatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
