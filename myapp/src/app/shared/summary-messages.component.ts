import { Component, Input } from '@angular/core';

export interface Dictionary {
    [ index: string ]: string
}


@Component({
  selector: 'summary-messages',
  template: `<div *ngIf="hasSummaryErrorInfo" class="alert alert-danger msg_summary">
    <span>The following problem(s) occured:</span>
    <ul>
        <li *ngFor="let key of keys();">{{summaryErrorInfo[key]}}</li>
    </ul>
  </div>`
})


export class SummaryMessages {
  @Input() hasSummaryErrorInfo: boolean = false;
  @Input() summaryErrorInfo: any;
  constructor() { }
  keys() : Array<string> {
    return Object.keys(this.summaryErrorInfo);
  }
  
}