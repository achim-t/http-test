import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { SearchResult } from './search-result';
let YOUTUBE_API_KEY: string = "AIzaSyB3-BD0K0qd5MJfVaWekfE7s9aij_wHrQM";
let YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";
@Injectable()
export class YouTubeService {
  
  constructor(private http: Http) { }

  search(query: string): Observable<SearchResult[]> {
    let params: string = [
      `q=${query}`,
      `key=${YOUTUBE_API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    let queryUrl: string = `${YOUTUBE_API_URL}?${params}`;
    return this.http.get(queryUrl)
      .map((response: Response) => {
        return (<any>response.json()).items.map(item => {
          // console.log("raw item", item);
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description:item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });
  }

}
