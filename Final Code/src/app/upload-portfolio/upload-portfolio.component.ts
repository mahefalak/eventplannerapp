import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Registration} from './../Registration';
import {RegistrationService} from './../registration.service';
import 'core-js/es7/array';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-portfolio',
  templateUrl: './upload-portfolio.component.html',
  styleUrls: ['./upload-portfolio.component.css'],
  providers : [RegistrationService] 
  
})
export class UploadPortfolioComponent implements OnInit {

 
  response={};
  errorShow=false;
  constructor(private _registerationService : RegistrationService,private router: Router) { }
  
   ngOnInit() {
     
   }

   sendFile = function(file, valid) {        
    
  console.log('sendingfilee');
    };


}
