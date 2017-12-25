import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Reservation} from './../reservation';
import {ReservationService} from './../reservation.service';
import 'core-js/es7/array';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css'],
  providers : [ReservationService] 
  
})
export class NewRequestComponent implements OnInit {

  response={};
  isSuccess=false;
  name:"falak";
  constructor(private _reservationService : ReservationService,private router: Router) { }
  
   ngOnInit() {
   }

  onNewReservation(reservation:Reservation)
  {
     this.response={};
     console.log(reservation);
     this._reservationService.newReservation(reservation).
     subscribe(response=>
       {
        // window.location.assign("/my-profile");
         //response.render('/my-profile');
        // this.router.navigateByUrl('/my-profile');
         this.isSuccess=true;
       },
       err=>this.response=err.json());
       
    
  }
}
