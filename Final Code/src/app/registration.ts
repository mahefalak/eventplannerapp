import {Injectable} from "@angular/core";
import {Http,Response,Headers,RequestOptions} from "@angular/http";

@Injectable()
export class Registration {

    private _postUrl = '/api/video';

    constructor(private _http:Http){};

    addRegistration(regis : Registration)
    {
        let headers =new Headers({'Content-Type':'application/json'});
        let options =new RequestOptions({headers:headers});
        ///return this._http.post(this._postUrl,JSON.stringify(regis),options)
        //.map((response: Response)=>response.json());
    }
}

