import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from "@angular/http";
import { Reservation } from './reservation';
import { map } from 'rxjs/operator/map';
import 'rxjs/add/operator/map';

@Injectable()
export class ReservationService {

  private _newReservationUrl = '/api/NewReservation';
  private _getReservationUrl = '/api/GetAllReservation';
  //private _http:Http
  constructor(private _http: Http){};

  getReservation()
  {
    return this._http.get(this._getReservationUrl)
    .map((response: Response)=>response.json());
  }
  //registration:Registration
  public newReservation(reservation:Reservation)
  {
      console.log(reservation);
      let headers =new Headers({'Content-Type':'application/json'});
      let options =new RequestOptions({headers:headers});

      return this._http.post(this._newReservationUrl,JSON.stringify(reservation),options)
        .map((response: Response)=>response.json());
  }

}
