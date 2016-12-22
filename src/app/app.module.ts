import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleHTTPComponent } from './simple-http/simple-http.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { YouTubeService } from './youtube.service';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHTTPComponent,
    YouTubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
  ],
  providers: [YouTubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
