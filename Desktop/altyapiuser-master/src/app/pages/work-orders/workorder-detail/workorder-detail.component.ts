import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/@core/ngrx/app.state';
import { GlobalService } from 'src/app/services/global.service';
import { SignaturePad } from 'angular2-signaturepad';



@Component({
  selector: 'app-workorder-detail',
  templateUrl: './workorder-detail.component.html',
  styleUrls: ['./workorder-detail.component.scss']
})
export class WorkorderDetailComponent implements OnInit {

  item: any;   // => WORKORDER
  workOrderStatus = new WorkOrderStatus();
  woStatusUsers : any;

  constructor(private service: GlobalService, private router: ActivatedRoute, private store: Store<AppState>) {
    this.store.subscribe((resp: any) => {
      this.item = resp.workOrders[0];  // store da sadece incleye basılan workorder saklanıyor
      this.workOrderStatus.workOrderId = parseInt(this?.item?.id);
      console.log('WORKORDER DETAIL OBJECT - STATE ten GELİYOR', this.item)
    })
    if (this.item == undefined) {
      window.location.href = '/';
    }
  }





  ngOnInit(): void {
    this.service.GetID('/WorkOrderStatus/getallbyworkorderid', this.item.id).subscribe((getallbyworkorderid: any) => {
      console.log('/WorkOrderStatus/getallbyworkorderid', getallbyworkorderid.data)
      //console.log('******resp:Workorder ID', getallbyworkorderid.data.pop())
      this.woStatusUsers = getallbyworkorderid.data.pop() ;

      console.log('getallbyworkorderid.data  => Son eklenen' , this.woStatusUsers )
    })
  }





}


export class WorkOrderStatus {
  id = 0;
  createdDate = new Date();
  endDate: Date;
  description: string;
  workOrderId: number;
  statusId: number;
  carId: number;
  addStatusUserId: number;
  isClosed: boolean;
  signatory: string;
  signature: string = null;
}



