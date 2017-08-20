import { Component, Directive, Input, OnInit } from '@angular/core';

import { DoctorService } from './doctor-service';
import { LocationService } from './location-service';
import { DoctorListItem } from './../../../../models/doctor.doctor-list-item';
import 'rxjs/add/operator/toPromise';

import {FormControl } from '@angular/forms';

import { ActivatedRoute, Router, ResolveStart } from '@angular/router';

  @Component({
    selector: 'app-doctor-list',
    templateUrl: './doctor-list.component.html',
    styleUrls: ['./doctor-list.component.css']
  })
  export class DoctorListComponent implements OnInit {
    
    private stateCtrl: FormControl;
    private states = [];
    private filteredStates: any;
    private stateErrorMessage:any = '';

    //SpecializationId param coming routing
    private specializationId:string;
    private specialization: string;

    hasLoaded = false;
    isSearchingDoctors = false;

    private doctors:DoctorListItem[];
    private errorMessage:any = '';
        
    constructor(private locationService: LocationService, private doctorService: DoctorService, private route: ActivatedRoute, private router: Router) {
      this.stateCtrl = new FormControl();

      this.filteredStates = this.stateCtrl.valueChanges
          .startWith(null)
          .map(name => this.filterStates(name));         
    }

    searchDoctors() {
      this.isSearchingDoctors = true;
      this.locationService.getDoctorsByLocation(this.stateCtrl.value)
        .subscribe(
          doctors =>  {
            this.doctors = doctors
          },
          error => {
            this.stateErrorMessage = <any>error
          },
          () => {
            this.isSearchingDoctors = false;
          });      
    }

    filterStates(val: string) {
      return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) > -1)
                 : this.states;
    }     

    ngOnInit() {
        this.specializationId = this.route.snapshot.params['specializationid'];
        this.hasLoaded = false;
        // Refreshes the DoctorListComponent when parameter changed.
        this.route.params.subscribe(params => { 
          const id = params['specializationid'];
          this.specialization = params['specialization'];       
          if(id != undefined) {
              this.doctorService.getDoctorsBySpectionlization(id)
              .subscribe(
                  doctors =>  {
                    this.doctors = doctors
                  },
                  error => {
                    this.errorMessage = <any>error
                  },
                  () => {
                    // Idles the output in screen to have 'Loading..' display.
                    setTimeout(() => { this.hasLoaded = true}, 1000)
                  }
              ); 
          }
          else {
            this.getDefaultDoctors();
          }

        });

        this.getStates();
      }

    

      getStates() {
        this.locationService.getStates()
        .subscribe(
            states =>  {
              states.forEach((s) => {
                  this.states.push(s.state);
              });
            },
            error => {
              this.stateErrorMessage = <any>error
            },
            () => {
              // Idles the output in screen to have 'Loading..' display.
              //setTimeout(() => { this.hasLoaded = true}, 1000)
            });
      }      
      
      getDefaultDoctors() {
        this.hasLoaded = false;
        //Check if to load default doctors or by specializationid
        this.doctorService.getDefaultDoctors()
        .subscribe(
            doctors =>  {
              this.doctors = doctors
            },
            error => {
              this.errorMessage = <any>error
            },
            () => {
              // Idles the output in screen to have 'Loading..' display.
              setTimeout(() => { this.hasLoaded = true}, 1000)
            });
      }


}
