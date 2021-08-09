import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalService } from './services/global.service';
import { UserService } from './services/user.service';
import { AppGlobalErrorHandler } from './services/_base_services/app-global-errorHandler';
import { AuthGuard } from './services/_base_services/auth.guard';
import { AuthInterceptor } from './services/_base_services/AuthInterceptor';
import { ErrorHandleService } from './services/_base_services/error-Handle.service';
import { MainService } from './services/_base_services/main.service';
import { RoleGuardService } from './services/_base_services/role-guard.service';
import { UserRolesService } from './services/_base_services/user-roles.service';
import { DefaultLayoutComponent } from './_default_layout';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { tr_TR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import tr from '@angular/common/locales/tr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { RouterModule } from '@angular/router';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { StoreModule } from '@ngrx/store';
import { gkhnReducer } from 'src/@core/ngrx/reducers/gkhn.reducer';
import { workOrderReducer } from 'src/@core/ngrx/reducers/workorder.reducer';
import { countryReducer } from 'src/@core/ngrx/reducers/country.reducer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { SignaturePadModule } from 'angular2-signaturepad';

import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { faultRequestReducer, faultTypeReducer } from 'src/@core/ngrx/reducers/workOrderExt.reducer';
import { statusReducer } from 'src/@core/ngrx/reducers/status.reducer';

registerLocaleData(tr);

const _default_layout = [
  DefaultLayoutComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ..._default_layout,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NzNotificationModule,
    BrowserAnimationsModule,
    RouterModule,
    NzAvatarModule,
    NzDropDownModule,
    NzIconModule,
    NzBadgeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    NzSpaceModule,
    SignaturePadModule,
    StoreModule.forRoot({
      gkhn: gkhnReducer, 
      workOrders: workOrderReducer,
      country: countryReducer,
      faultType: faultTypeReducer,
      faultRequest: faultRequestReducer,
      statuses : statusReducer
    }),
    StoreDevtoolsModule.instrument({
     // maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
     // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

  ],
  providers: [
    MainService,
    GlobalService,
    UserService,
    ErrorHandleService,
    AuthGuard,
    UserRolesService,
    RoleGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AppGlobalErrorHandler },
    { provide: NZ_I18N, useValue: tr_TR },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
