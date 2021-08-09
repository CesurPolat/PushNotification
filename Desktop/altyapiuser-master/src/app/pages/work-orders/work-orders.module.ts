import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkOrdersRoutingModule } from './work-orders-routing.module';
import { WorkOrdersComponent } from './work-orders/work-orders.component';
import { WorkorderDetailComponent } from './workorder-detail/workorder-detail.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SignaturePadModule } from 'angular2-signaturepad';
import { WorkorderStatusEditComponent } from './workorder-status-edit/workorder-status-edit.component';
import { WorkorderAddNewStatusComponent } from './workorder-add-new-status/workorder-add-new-status.component';
import { StatusNameComponent } from './_micro_components/status-name/status-name.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [
    WorkOrdersComponent,
    WorkorderDetailComponent,
    WorkorderStatusEditComponent,
    WorkorderAddNewStatusComponent,
    StatusNameComponent,
   
    
  ],
  imports: [
    CommonModule,
    WorkOrdersRoutingModule,
    RouterModule,
    NzPageHeaderModule,
    NzGridModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzButtonModule,
    FormsModule,
    NzSelectModule,
    NzInputModule,
    SignaturePadModule,
    NzIconModule,
    NzCardModule,
    NzSkeletonModule,
    NzUploadModule,
    NzModalModule,
    NzImageModule
    
  ]
})
export class WorkOrdersModule { }
