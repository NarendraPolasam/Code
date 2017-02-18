import { Headers, RequestOptions } from '@angular/http';
import { Injectable, Provider} from '@angular/core';

@Injectable()
export class  HttpRequestConstants {

 get RequestOptions (): RequestOptions {
        let contentHeaders = new Headers();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');
        contentHeaders.append('Access-Control-Allow-Origin', '*');
        contentHeaders.append('Access-Control-Allow-Headers','Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
        contentHeaders.append('Access-Control-Allow-Methods','GET, POST, OPTIONS');
        return new RequestOptions({ headers: contentHeaders });
  }

}

