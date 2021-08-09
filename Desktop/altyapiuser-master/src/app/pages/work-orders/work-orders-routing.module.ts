import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkOrdersComponent } from './work-orders/work-orders.component';
import { WorkorderAddNewStatusComponent } from './workorder-add-new-status/workorder-add-new-status.component';
import { WorkorderDetailComponent } from './workorder-detail/workorder-detail.component';
import { WorkorderStatusEditComponent } from './workorder-status-edit/workorder-status-edit.component';

const routes: Routes = [
  { path: ' ', redirectTo: '/is-emirleri/liste' },
  { path: 'liste', component: WorkOrdersComponent},
  { path: 'detay/:id', component: WorkorderDetailComponent},
  { path: 'is-sonlandir/:id', component: WorkorderAddNewStatusComponent},
  { path: 'is-guncelle/:id', component: WorkorderStatusEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkOrdersRoutingModule { }
