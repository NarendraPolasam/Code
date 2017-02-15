import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ResponseService, HttpRequestConstants, SpinnerService , ExceptionService } from '../core/index';
import { CONFIG } from '../core/config/config';

@Injectable()
export class HomeServices{
 private popularMoviesUrl = CONFIG.apiUrls;
  constructor(private spinnerService: SpinnerService,
    private exceptionService: ExceptionService,
    private response: ResponseService,
    private http: Http,
    private router: Router,
    private httpRequestConstants: HttpRequestConstants) { }

  
  getPopularMovies(object:any) {
    //let body = JSON.stringify(object);
    //this.spinnerService.show();
    return this.http.get("",  this.httpRequestConstants.RequestOptions)
      .map((response:Response) => 
           response.json()
       )
      .catch(this.response.handleError)
      .finally(() => {
        //this.spinnerService.hide()
      });
  }

}