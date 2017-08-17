import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {

  public doctors = [
    {
      fullName: 'Chris Brown',
      title: 'Senior Web Developer',
      contactNo: '+63 916 432 0966'
    },
    {
      fullName: 'Marko Luther',
      title: 'Junior Web Developer',
      contactNo: '+63 916 432 0966'
    }    
  ];

  constructor() { }

  ngOnInit() {
  }

}
