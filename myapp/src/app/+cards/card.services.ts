import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ResponseService, HttpRequestConstants, SpinnerService , ExceptionService } from '../core/index';
import { CONFIG } from '../core/config/config';


@Injectable()

export class CardService {
  constructor(private spinnerService: SpinnerService,
    private exceptionService: ExceptionService,
    private response: ResponseService,
    private http: Http,
    private router: Router,
    private httpRequestConstants: HttpRequestConstants) { }

  
  getDecks() {
    return this.http.get(`${CONFIG.apiUrls.newDeck}`, this.httpRequestConstants.RequestOptions)
      .map((response:Response) => 
           response.json()
       )
      .catch(this.response.handleError)
      .finally(() => {
      });
  }
  getDrawDeck(deckId:string) {
     let drawDeck = CONFIG.apiUrls.drawDeck+deckId+'/draw/?count=2'
      return this.http.get(`${drawDeck}`, this.httpRequestConstants.RequestOptions)
      .map((response: Response) =>
      response.json()
      ).catch(this.response.handleError)
      .finally(() => {
      });
 
    }

    
}