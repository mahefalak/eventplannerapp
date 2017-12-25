import {Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Reservation} from './../reservation';
import {ReservationService} from './../reservation.service';
import 'core-js/es7/array';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-event-requests',
  templateUrl: './event-requests.component.html',
  styleUrls: ['./event-requests.component.css'],
  providers : [ReservationService] 
})
export class EventRequestsComponent implements OnInit {

  registrations: Array<Reservation>;
  constructor(private _reservationService : ReservationService) { }

  ngOnInit() {
    this._reservationService.getReservation().
    subscribe(reservationsData=>this.registrations=reservationsData);

  }

}
