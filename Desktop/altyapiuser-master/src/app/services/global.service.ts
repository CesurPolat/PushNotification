import { Injectable } from '@angular/core';
import { MainService } from './_base_services/main.service';
import { ErrorHandleService } from './_base_services/error-Handle.service';
import { HttpClient } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable } from 'rxjs';
import { Country } from 'src/@core/ngrx/model/country.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/@core/ngrx/app.state';
import * as CountryActions from './../../@core/ngrx/actions/country.actions';
import * as StatusActions from './../../@core/ngrx/actions/status.actions';
import * as WorkOrderExtActions from './../../@core/ngrx/actions/workOrderExt.actions';
import { FaultRequest, FaultType } from 'src/@core/ngrx/model/workOrderExt.model';
import { Status } from 'src/@core/ngrx/model/status.model';
declare var $:any;

@Injectable()
export class GlobalService extends MainService {


  constructor(http: HttpClient, errorHandleService: ErrorHandleService,private notification: NzNotificationService,private store: Store<AppState>) {
    super(http, errorHandleService);
  }

  // state management 
  clearStorage() {
    localStorage.removeItem('auth')
  }

  formValidationMessage(invalidItems) {
    let fControls = invalidItems;
    for (const key in fControls) {
      if (Object.prototype.hasOwnProperty.call(fControls, key)) {
        const element = fControls[key];
        if (element.status == 'INVALID') {
          this.notification.create('error', `${key} boş bırakılamaz`, null, { nzKey: `${key}` });
        }
      }
    }
  }

  createNotification(type, title, content) {
    this.notification.create(type, title, content);
  }





  // todo Countries
   getCountries(){
    return new Promise<Array<any>>((resolve)=>{
      this.Get('/countries').subscribe((resp:any)=>{
     //   console.log('resp' , resp)
        resolve(resp.data)
      })
    })
  } 

  getCountriesState(){
    // state kontrol et => dizi boşsa get at listeyi doldur
    // todo store kontrol
    this.store.select('country').subscribe(async (resp:Country[])=>{
      if (resp.length == 0) {
       const countriesList = await this.getCountries();
       this.store.dispatch(new CountryActions.AddListCountry(countriesList));
    //   console.log('resp???' , resp)
      }
    });
  }

    // todo Countries
    getStatuses(){
      return new Promise<Array<any>>((resolve)=>{
        this.Get('/Status/getusertatuses').subscribe((resp:any)=>{
      //    console.log('resp' , resp)
          resolve(resp.data)
        })
      })
    } 
  
    getStatusesState(){
      // state kontrol et => dizi boşsa get at listeyi doldur
      // todo store kontrol
      this.store.select('statuses').subscribe(async (resp:Status[])=>{
        if (resp.length == 0) {
         const statusList = await this.getStatuses();
         this.store.dispatch(new StatusActions.AddListStatus(statusList));
      //   console.log('resp???XXXDDDEEBBUU' , resp)
        }
      });
    }


  // alttakiler şu anda fazladan

    // todo FAULTTYPES
    getFaultTypes(){
      return new Promise<Array<any>>((resolve)=>{
        this.Get('/faultTypes/getall').subscribe((resp:any)=>{
       //   console.log('Global Service Fault Type İstek ' , resp)
          resolve(resp.data)
        })
      })
    } 
  
    getFaultTypesState(){
      // state kontrol et => dizi boşsa get at listeyi doldur
      // todo store kontrol
      this.store.select('faultType').subscribe(async (resp:FaultType[])=>{

        if (resp.length == 0) {
         const faultTypesList = await this.getFaultTypes();
         this.store.dispatch(new WorkOrderExtActions.AddListFaultType(faultTypesList));
       //  console.log('resp???' , resp)
        }
      });
    }



    // todo FAULTREQUESTS
    getFaultRequest(){
      return new Promise<Array<any>>((resolve)=>{
        this.Get('/faultRequests/getall').subscribe((resp:any)=>{
      //    console.log('Global Service Fault requests İstek ' , resp)
          resolve(resp.data)
        })
      })
    } 
  
    getFaultRequestState(){
      // state kontrol et => dizi boşsa get at listeyi doldur
      // todo store kontrol
      this.store.select('faultRequest').subscribe(async (resp:FaultRequest[])=>{

        if (resp.length == 0) {
         const faultRequestList = await this.getFaultRequest();
         this.store.dispatch(new WorkOrderExtActions.AddListFaultRequest(faultRequestList));
       //  console.log('resp???' , resp)
        }
      });
    }


  }
