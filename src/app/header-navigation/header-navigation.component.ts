import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {


  private menuCss = [
    {
      menu:'news',
      classes: {
        'nav-item': true,
        'active': true
      }
    },
    {
      menu:'doctors',
      classes: {
        'nav-item': true,
        'active': false
      }
    },
    {
      menu:'hospitals',
      classes: {
        'nav-item': true,
        'active': false
      }
    }, 
    {
      menu:'medicines',
      classes: {
        'nav-item': true,
        'active': false
      }
    },         
  ]

  private activeLink = 'news';

  constructor() { }

  ngOnInit() { }

  private active(menu:string) {
    this.menuCss.forEach((m) => {
      if(m.menu == menu) 
        m.classes.active = true;
      else
        m.classes.active=false;
    })
  }

}
