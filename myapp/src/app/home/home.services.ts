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

  
  getPopularMovies() {
  let object = '?api_key='+CONFIG.apiUrls.apiKey+'&language=en-US&page=1';
    return this.http.get(`${CONFIG.apiUrls.popularMovie+object}`, this.httpRequestConstants.RequestOptions)
      .map((response:Response) => 
           response.json()
       )
      .catch(this.response.handleError)
      .finally(() => {
      });
  }
  getMovieById(id:number) {
    let key ='?api_key=2eabdeb3ec19cb7abc472ac8bae0bd10&language=en-US';
      return this.http.get(`${CONFIG.apiUrls.moviebyId}/${id}${key}`, this.httpRequestConstants.RequestOptions)
      .map((response: Response) =>
      response.json()
      ).catch(this.response.handleError)
      .finally(() => {
      });
 
    }

}