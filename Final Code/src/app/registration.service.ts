import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from "@angular/http";
import { Registration } from './Registration';
import { map } from 'rxjs/operator/map';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {
  private _loginUrl = '/api/Login';
  private _getUserUrl = '/api/GetRegisterUsers';
  private _createUserUrl = '/api/CreateUser';
  private _getPortfolioURL = '/api/GetPortfolio';
  private _postPortfolioURL = '/api/uploadPortfolio';
  //private _http:Http
  constructor(private _http: Http){};

  getPortfolio()
  {
    return this._http.get(this._getPortfolioURL)
    .map((response: Response)=>response.json());
  }
  public uploadPortolio(registration:Registration)
  {
      console.log(registration);
      let headers =new Headers({'Content-Type':'application/json'});
      let options =new RequestOptions({headers:headers});

      return this._http.post(this._postPortfolioURL,JSON.stringify(registration),options)
        .map((response: Response)=>response.json());
  }

  getRegistration()
  {
    return this._http.get(this._getUserUrl)
    .map((response: Response)=>response.json());
  }
  //registration:Registration
  public addRegistration(registration:Registration)
  {
      console.log(registration);
      let headers =new Headers({'Content-Type':'application/json'});
      let options =new RequestOptions({headers:headers});

      return this._http.post(this._createUserUrl,JSON.stringify(registration),options)
        .map((response: Response)=>response.json());
  }

  //Login
  public login(registration:Registration)
  {
      console.log(registration);
      let headers =new Headers({'Content-Type':'application/json'});
      let options =new RequestOptions({headers:headers});
      
      return this._http.post(this._loginUrl,JSON.stringify(registration),options)
        .map((response: Response)=>response.json());
        
  }

}
