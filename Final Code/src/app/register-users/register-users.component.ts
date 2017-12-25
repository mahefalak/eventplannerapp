import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Registration} from './../Registration';
import {RegistrationService} from './../registration.service';
import 'core-js/es7/array';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css'],
  providers : [RegistrationService] 
})
export class RegisterUsersComponent implements OnInit {

  registrations: Array<Registration>;
  constructor(private _registerationService : RegistrationService) { }

  ngOnInit() {
    this._registerationService.getRegistration().
    subscribe(resRegistrationsData=>this.registrations=resRegistrationsData);

  }

}
