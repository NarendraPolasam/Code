import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResponseService } from './response/index';
import { HttpRequestConstants } from './provider/index';
import { AuthService,CanActivatedAuthGuard } from './security-guard/index';
import { SpinnerComponent, SpinnerService } from './spinner/index'
import { ExceptionService  } from './exception/index';
import { ValidationService } from './validation/index';
import { EmitService } from './emit/emit.service';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent,CommonModule, FormsModule, RouterModule],
  providers:[ResponseService, HttpRequestConstants,AuthService,CanActivatedAuthGuard,
              SpinnerService,ExceptionService,ValidationService,EmitService]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
       providers: []
    };
  }
}