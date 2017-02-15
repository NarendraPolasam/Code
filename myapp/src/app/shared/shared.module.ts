import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { ControlMessages }         from './control-messages.component';
import { SummaryMessages }         from './summary-messages.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ ControlMessages,SummaryMessages],
  exports:      [ ControlMessages,SummaryMessages, CommonModule, FormsModule ]
})
export class SharedModule { }