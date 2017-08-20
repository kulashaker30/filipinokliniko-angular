import { Component, OnInit, Directive, Input } from '@angular/core';

import { DoctorItemService } from './doctor-item-service';

@Component({
  selector: '[app-doctor-item]',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.css']
})
export class DoctorItemComponent implements OnInit {

  @Input() doctor: any;

  private hospitals = [];
  private hospitalErrorMessage:any = '';   
  private hospitalLoading: boolean = false; 

  constructor(private doctorItemService: DoctorItemService) { }

  ngOnInit() {
  }

  getHospitalsByDoctorId(doctorId: any) {
    if(this.hospitals.length == 0) {
      this.hospitalLoading = true;
      this.doctorItemService.getHospitalsByDoctorId(doctorId)
      .subscribe(hospitals =>  { setTimeout(() => { this.hospitals = hospitals; this.hospitalLoading = false; }, 1000); }, error => { this.hospitalErrorMessage = <any>error },
          () => {
            
          }); 
    }
  }

}
