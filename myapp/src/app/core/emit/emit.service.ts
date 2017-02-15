import {Output,EventEmitter} from '@angular/core';

export class EmitService {
  navchange:EventEmitter<any> = new EventEmitter();
  constructor() {}
  emitNavChangeEvent(value) {
    this.navchange.emit(value);
  }
  getNavChangeEmitter() {
    return this.navchange;
  }
}