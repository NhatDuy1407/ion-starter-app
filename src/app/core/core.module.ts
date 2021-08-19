import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlerInterceptor } from '@core/interceptors/error-handler.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TabsPageModule } from './tabs/tabs.module';
import { RouterModule } from '@angular/router';

const CUSTOM_HTTP_INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerInterceptor,
    multi: true,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({}), EffectsModule.forRoot(), RouterModule],
  providers: [...CUSTOM_HTTP_INTERCEPTORS],
  exports: [TabsPageModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
