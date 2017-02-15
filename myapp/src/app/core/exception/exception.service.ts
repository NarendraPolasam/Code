import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ExceptionService {

  constructor() { }
  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    let res = <Response>errorResponse;
    let err = res.json();
    if (err.error){
      return Observable.throw(err.error);
    }

    let emsg = err ?
      (err.error ? err.error : JSON.stringify(err)) :
      (res.statusText || 'unknown error');
     
     console.log('Oops! Something went wrong! Please contact system administrator.');
      return Observable.of();
  }
}