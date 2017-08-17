import { Component, OnInit, Directive, Input } from '@angular/core';

@Component({
  selector: '[app-doctor-item]',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.css']
})
export class DoctorItemComponent implements OnInit {

  @Input() doctor: any;

  constructor() { }

  ngOnInit() {
  }

}
