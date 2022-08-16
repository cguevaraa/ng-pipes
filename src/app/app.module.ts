import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

// Change app locale
import  '@angular/common/locales/global/es'
import  '@angular/common/locales/global/fr'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    SalesModule,
  ],
  providers: [ 
    {provide: LOCALE_ID, useValue: 'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
