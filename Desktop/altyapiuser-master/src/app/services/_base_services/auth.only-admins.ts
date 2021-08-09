// auth.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { GlobalService } from '../global.service';
import { UserService } from '../user.service';

@Injectable()
export class OnlyAdmins implements CanActivate {
  constructor(private user: UserService,private service:GlobalService, private router: Router,private notification: NzNotificationService) { }

  async canActivate() {
    // this.router.navigate(['/login']);
     // 1 token varmı kontrol et
     if (!this.user.isLoggedIn()) {
       this.router.navigate(['/login']);
       return false;
     }
 
   
    // alert('ONLY CASHIER AUTH')
     // tokenı apiden doğrula
      const checkToken = await this.verifyToken();
     if(checkToken){
         return true;
       }  
     return false;
   }
 
   verifyToken(){
   //  console.log('ONLY CASHIER AUTH')
 
     return new Promise((resolve)=>{
       this.service.Get('/UserAction/AdminVerify').subscribe((resp:any)=>{
         console.log('verify data' , resp)
          if (resp) {
          /*   this.notification.create(
             'success',
             'Yetkiniz Onaylandı',
             ''
           );  */ 
           resolve(true)
           return resp;
         }
         this.notification.create(
           'error',
           'Yetkiniz Yok',
           ''
         );
         resolve(false)
       
       }, (error:any)=>{
       //  console.log('err' , error)
       //  sessionStorage.removeItem('digiAuth');
       //  sessionStorage.removeItem('expiration');
       //  this.router.navigate(['/login']);
       this.notification.create(
         'error',
         'Sadece Yetkili Kullanıcılar Giriş Yapabilir ',
         ''
       );
   //   this.router.navigate(['/login']);
         // burası return false olacak
         resolve(false)
       })
    
     })
   }
 
 
 }

 