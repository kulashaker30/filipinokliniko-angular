import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MedicalRssFeedService {

  private rssUrl: string = 'https://rss2json.com/api.json?rss_url=http://rss.medicalnewstoday.com/featurednews.xml';

  constructor(
    private http: Http
  ) { }

  getFeedContent(): Observable<any> {
    debugger;
    return this.http.get(this.rssUrl)
            .map(this.extractFeeds)
            .catch(this.handleError);
  }

  private extractFeeds(res: Response): any {
    let feed = res.json();
    return feed || { };
  }

  

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}