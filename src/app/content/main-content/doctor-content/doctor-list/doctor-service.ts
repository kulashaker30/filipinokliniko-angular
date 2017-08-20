import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DoctorListItem } from './../../../../models/doctor.doctor-list-item';

@Injectable()
export class DoctorService {

    private apiUrl = "http://localhost:3000/api";

    constructor(private http:Http) {
    }

    getDefaultDoctors():Observable<DoctorListItem[]> {
        return this.http.get(this.apiUrl + "/doctors")
            .map(this.extractData)
            .catch(this.handleError);
    }

    getDoctorsBySpectionlization(specializationId:string):Observable<DoctorListItem[]> {
        return this.http.get(this.apiUrl + '/specializations/' + specializationId + '/doctors')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        return body || [];
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}