import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'body',
  template: '<router-outlet ></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'altyapiuser';

  faultTypes:any[] = [];
  constructor(private service:GlobalService) {

    //  this.service.getFaultTypesState();
    //  this.service.getFaultRequestState();
     this.service.getStatusesState();
/*    this.service.Get('/Status/getusertatuses').subscribe((resp:any)=>{
     console.log('---STST---', resp)
   }) */
  }
}
