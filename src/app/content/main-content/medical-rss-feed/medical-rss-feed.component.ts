import { Component, OnInit } from '@angular/core';
import { MedicalRssFeedService } from './medical-rss-feed-service';

@Component({
  selector: 'app-medical-rss-feed',
  templateUrl: './medical-rss-feed.component.html',
  styleUrls: ['./medical-rss-feed.component.css']
})
export class MedicalRssFeedComponent implements OnInit {

  private feeds = [];
  private error = '';

  constructor(private rssService: MedicalRssFeedService) { }

  ngOnInit() {
    this.getFeed();
  }
  
  getFeed() {
    this.rssService.getFeedContent()
    .subscribe(
        feeds =>  {
          this.feeds = feeds.items;
        },
        error => {
          this.error = <any>error
        },
        () => {
          console.log('Rss feed complete');
        });    
  }
}
