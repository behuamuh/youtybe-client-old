import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { SortingComponent } from './components/header/sorting/sorting.component';
import { UserButtonComponent } from './components/header/user-button/user-button.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoCardComponent } from './components/videos/video-card/video-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SortingComponent,
    UserButtonComponent,
    VideosComponent,
    VideoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
