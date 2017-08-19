import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { SideBarService } from './sidebar-service';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: '[app-sidebar-content]',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.css']
})
export class SidebarContentComponent implements OnInit {

    private specializations = [];
    private searchSpecializationResult = [];
    private errorMessage:any = '';
    private searchTerm = '';

    constructor(private service: SideBarService, private router: Router) { 
        this.getData();
    }

    ngOnInit() {
      this.router.events.subscribe((evt) => {
        if(evt instanceof NavigationEnd) {
          
        }
      });
    }

    searchSpecialization() {
      this.searchSpecializationResult = this.filterItems(this.searchTerm);
      if(this.searchSpecializationResult.find((s) => { return s.Specialization == "Specialization"; }) == undefined)
        this.searchSpecializationResult.unshift({id:0, Specialization:"Specialization"});
    }

    filterItems (query) {
      let temp = this.specializations.slice();
      return temp.filter((item) => {
          return item.Specialization.toLowerCase().indexOf(query.toLowerCase()) > -1;
      })
    }

    getData() {
      this.service.getSpecialization()
        .subscribe(
          specializations =>  {
            // Trim to array of string instead of object (s.Specialization)
            specializations.forEach((s) => {
              this.specializations.push(s);
            });
            this.searchSpecializationResult = this.specializations;
            this.searchSpecializationResult.unshift({id:0, Specialization:"Specialization"});
          },
          error => this.errorMessage = <any>error,
          () => {
            console.log('Do something here if necessary.')
          }
      );
    }
}
