import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public banners = [
                    { 
                      headerText: 'Filipino Kliniko!',
                      content: 'Find the nearest physicians and doctors near you.',
                      classes: {
                        'carousel-item': true,
                        'active': true
                      }
                    },
                    { 
                      headerText: 'Filipino Kliniko!',
                      content: 'This site is under construction.',
                      classes: {
                        'carousel-item': true,
                        'active': false
                      }
                    }                    
                  ];

  constructor() { }

  ngOnInit() {
  }

}
