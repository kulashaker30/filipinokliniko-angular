import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {


  public activeMenu = 'news'

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if(evt instanceof NavigationEnd) {
        if(evt.url == "/" || evt.url == '/news') {
          this.activeMenu = 'news';
        }
        else {
          this.activeMenu = 'doctors'
        }
    }      
    })
  }

}
