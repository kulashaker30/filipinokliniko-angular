import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-medical-rss-feed-item',
  templateUrl: './medical-rss-feed-item.component.html',
  styleUrls: ['./medical-rss-feed-item.component.css']
})
export class MedicalRssFeedItemComponent implements OnInit {

  @Input() feed: any;

  constructor() { }

  ngOnInit() {
  }

}
