import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Registration} from './../Registration';
import {RegistrationService} from './../registration.service';
import 'core-js/es7/array';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [RegistrationService] 
})
export class LoginComponent implements OnInit {

  response={};
  errorShow=false;
  constructor(private _registerationService : RegistrationService,private router: Router) { }
  
   ngOnInit() {
   }

   onLogin(registration:Registration)
   {
      this.response={};
      
      this._registerationService.login(registration).
        subscribe(response=>
          {
           // window.location.assign("/my-profile");
            //response.render('/my-profile');
            this.router.navigateByUrl('/my-profile');
          },
          err=>this.response=err.json());
          this.errorShow=true;
      
   }

   falak()
   {
      console.log(this.response);
   }

}
