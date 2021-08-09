import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ErrorHandleService } from './_base_services/error-Handle.service';
import { MainService } from './_base_services/main.service';

@Injectable()
export class RoleStatusService extends MainService {
  constructor(http: HttpClient, errorHandleService: ErrorHandleService,private notification: NzNotificationService) {
    super(http, errorHandleService);
  }

 getAllStatus() {
    return new Promise<any>((resolve) => {
      this.Get('/Status/getall').subscribe(async (resp: any) => {
      //  console.log('seProduct', resp)
        resp.data.forEach(e => {e.active = false;});
       // let returnProd = await this.productMatcher(resp)
        resolve(resp.data);
      })
    })
  }

  getAllRoleFull(){
    return new Promise<any>((resolve) => {
      this.Get('/OperationClaimStatus/getall').subscribe(async (resp: any) => {
       console.log('Roller ve statüler', resp)
        resolve(resp.data);
      })
    })
  }

  getAllRole(allStatusList){
    return new Promise<any>((resolve) => {
      this.Get('/OperationClaimStatus/getallgroup').subscribe(async (resp: any) => {
       console.log('Roller ve statüler', resp)
         let _blankRoleStatusList = await this._createBlankRoleStatusList(resp.data,allStatusList) 
        resolve(_blankRoleStatusList);
      })
    })
  }

  _createBlankRoleStatusList(roleList, allStatusList){
    return new Promise<any>((resolve)=>{
      let incRoleLists:any[] = [];
      roleList.forEach(e => {
        let el = new Object();
        el = Object.assign({} , e)
        incRoleLists.push(el) });

       incRoleLists.forEach(el => {
         if (el.statuses.length == 0) {
        //  el.statuses = allStatusList];
        let allStatusListXs:any[] = [];//Object.assign({} , allStatusList); //[...allStatusList]; 
        allStatusList.forEach(e => {
         let el = new Object();
         el = Object.assign({} , e)
         allStatusListXs.push(el) }); 
         el.statuses = allStatusListXs;
         } 
         else {
        let allStatusListXX:any[] = [];//Object.assign({} , allStatusList); //[...allStatusList]; 
         allStatusList.forEach(e => {
          let el = new Object();
          el = Object.assign({} , e)
          allStatusListXX.push(el) }); 

          allStatusListXX.forEach(esItem => {
          //  console.log('esItem' , esItem)
             esItem.active = el.statuses.some(x=> x.id == esItem.id)
            });
            el.statuses = allStatusListXX;
         }
        
       // el.statuses = allStatusList
      
      }) 
  /*      roleList.forEach(element => {
         element.statuses = allStatusList;
         // console.log('new elem' , newElem)
         incRoleLists.push(element);
      });    */
  //    console.log('orj : ' , roleList , '-' , 'new :' , incRoleLists )
      resolve(incRoleLists) 
    })
  }
  
}
