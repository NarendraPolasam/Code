import { Headers, RequestOptions } from '@angular/http';
import { Injectable, Provider} from '@angular/core';

@Injectable()
export class  HttpRequestConstants {

 get RequestOptions (): RequestOptions {
        let contentHeaders = new Headers();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');
        return new RequestOptions({ headers: contentHeaders });
  }

}

