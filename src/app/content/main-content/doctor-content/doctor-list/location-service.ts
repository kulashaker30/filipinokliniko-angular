import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LocationService {

    private apiUrl = "http://localhost:3000/api/locations";

    constructor(private http:Http) {
    }

    getStates():Observable<any[]> {
        return this.http.get(this.apiUrl + "/states")
            .map(this.extractData)
            .catch(this.handleError);
    }

    getDoctorsByLocation(location: string): Observable<any[]>  {
        return this.http.get(this.apiUrl + "/" + location + "/doctors")
            .map(this.extractSPData)
            .catch(this.handleError);        
    }

    private extractData(res:Response) {
        let body = res.json();
        return body || [];
    }

    private extractSPData(res: Response) {
        let body = res.json()[0];
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