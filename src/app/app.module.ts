import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { SortingComponent } from './components/header/sorting/sorting.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoCardComponent } from './components/videos/video-card/video-card.component';
import { AuthWidgetComponent } from './components/header/auth-widget/auth-widget.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { LoginIconComponent } from './components/header/auth-widget/login-icon/login-icon.component';
import { ToggleSortComponent } from './components/header/toggle-sort/toggle-sort.component';
import { FormsModule } from '@angular/forms';
import { LikeIconComponent } from './components/videos/video-card/like-icon/like-icon.component';
import { DislikeIconComponent } from './components/videos/video-card/dislike-icon/dislike-icon.component';
import { ViewsIconComponent } from './components/videos/video-card/views-icon/views-icon.component';
import { CommentsIconComponent } from './components/videos/video-card/comments-icon/comments-icon.component';
import { CountFormatPipe } from './pipes/count-format.pipe';
import { CardColorDirective } from './directives/card-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SortingComponent,
    VideosComponent,
    VideoCardComponent,
    AuthWidgetComponent,
    LogoComponent,
    LoginIconComponent,
    ToggleSortComponent,
    LikeIconComponent,
    DislikeIconComponent,
    ViewsIconComponent,
    CommentsIconComponent,
    CountFormatPipe,
    CardColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
