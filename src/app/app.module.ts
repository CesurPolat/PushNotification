import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { tr_TR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import tr from '@angular/common/locales/tr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import {ServiceWorkerModule} from '@angular/service-worker';
import { environment } from '../environments/environment';



registerLocaleData(tr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzCardModule,
    NzDropDownModule,
    ServiceWorkerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true
    })

  ],
  providers: [{ provide: NZ_I18N, useValue: tr_TR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
