import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StreamerService{

    // StreamGuess API
    private _url: string = "http://ec2-34-202-235-176.compute-1.amazonaws.com/api/streamlinks"

    constructor(private _http: Http){}
    // Return observable of API data.
    getStreamers(){
        return this._http.get(this._url)
        .map((response:Response) => response.json())
        .catch(error => {
            console.error(error);
            return Observable.throw(error.json())
        });
    }

}

