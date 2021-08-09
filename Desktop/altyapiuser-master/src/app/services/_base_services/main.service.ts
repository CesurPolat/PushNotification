import { environment } from './../../../environments/environment';
import { ErrorHandleService } from './error-Handle.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MainService {
    private baseUrl = environment.apiURL ;

  private authToken:any;
  constructor(private http: HttpClient, private errorHandleService: ErrorHandleService) {
     this.authToken = sessionStorage.getItem('digiUserAuth');
  }

  Get(url:any) {
    return this.http.get(this.baseUrl + url,
      { headers: { 'Authorization':`Bearer ${this.authToken}`  }})
      .catch(this.errorHandleService.HandleError);
  }
  GetFREE(url:any ) {
    return this.http.get(url ,
      { headers: { 'Access-Control-Allow-Origin':`*`  }})
      .catch(this.errorHandleService.HandleError);
  }
 
  GetID(url:any, id:any) {
    return this.http.get(this.baseUrl + url + '/' + id,
      { headers: { 'Authorization':`Bearer ${this.authToken}`  }})
      .catch(this.errorHandleService.HandleError);
  }
  Create(url:any, obj: any, res?: any) {
    return this.http.post(this.baseUrl + url, obj,
      { headers: { 'Authorization':`Bearer ${this.authToken}`  }})
      .catch(this.errorHandleService.HandleError);
  }


  CreateUser(url:any, obj: any, res?: any) {
    return this.http.post(this.baseUrl + url, obj,
      { headers: { 'Control':`UserRegister`  }})
      .catch(this.errorHandleService.HandleError);
  }
  CreateFree(url:any, obj: any, res?: any) {
    return this.http.post( url, obj,
      { headers: { 'Authorization':`Bearer ${this.authToken}`  }})
      .catch(this.errorHandleService.HandleError);
  }
  Post(url:any, obj: any) {
    return this.http.post(this.baseUrl + url, obj,
      { headers: { 'Authorization':`Bearer ${this.authToken}`  }})
      .catch(this.errorHandleService.HandleError);
  }
  Update(url:any, obj: any) {
    return this.http.put(this.baseUrl + url, obj,
      { headers: { 'Authorization':`Bearer ${this.authToken}`  }})
      .catch(this.errorHandleService.HandleError);
  }
  Patch(url:any, id: number, obj: any) {
    return this.http.patch(this.baseUrl + url + '/' + id, obj,
    { headers: { 'Authorization':`Bearer ${this.authToken}`  }})
      .catch(this.errorHandleService.HandleError);
  }
  PatchStr(url:any, id: number, str: string) {
    return this.http.patch(this.baseUrl + url + '/' + id + '/' + str,
    { headers: { 'Authorization':`Bearer ${this.authToken}`  }})
      .catch(this.errorHandleService.HandleError);
  }
  PatchFotoLink(url:any, id: number, obj:any) {
    return this.http.patch(this.baseUrl + url + '/' + id , obj,
    { headers: { 'Authorization':`Bearer ${this.authToken}`  }})
      .catch(this.errorHandleService.HandleError);
  }
  Remove(url:any, id: number) {
    return this.http.delete(this.baseUrl + url + '/' + id,
    { headers: { 'Authorization':`Bearer ${this.authToken}`  }})
  }

  RemoveObj(url:any,obj:any) {
    return this.http.request('delete' , this.baseUrl + url ,
    { 
      body : obj,
      headers: { 'Authorization':`Bearer ${this.authToken}`  ,
    }})
  }

  RemoveUrl(url:any) {
    return this.http.delete(this.baseUrl + url,
    { headers: { 'Authorization':`Bearer ${this.authToken}`  }})
  }
}
