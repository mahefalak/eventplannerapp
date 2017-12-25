import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Registration} from './../Registration';
import {RegistrationService} from './../registration.service';
import 'core-js/es7/array';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [RegistrationService] 
})


export class RegisterComponent implements OnInit {

 //constructor(private _http: Http) {
 constructor(private _registerationService : RegistrationService,private router: Router) { }
 
  registrations: Array<Registration>;
  //constructor() { 
    
   //}
  ngOnInit() {
    //this._registerationService.getRegistration().
     // subscribe(resRegistrationsData=>this.registrations=resRegistrationsData);

  }
  ;
  onSumitAddVideo(registration:Registration)
  {
     this._registerationService.addRegistration(registration).
     subscribe(response=>
      {
        this.router.navigateByUrl('/login');
      },
      err=>
      {
        
      });
  }
}
