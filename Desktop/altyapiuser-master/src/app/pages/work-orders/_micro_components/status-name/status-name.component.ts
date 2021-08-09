import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/@core/ngrx/app.state';
import { Status } from 'src/@core/ngrx/model/status.model';

@Component({
  selector: 'app-status-name',
  templateUrl: './status-name.component.html',
  styleUrls: ['./status-name.component.scss']
})
export class StatusNameComponent implements OnInit {

  @Input() statusID :any;
  status = new Status();
 
  constructor(private store: Store<AppState>) {
   }

  ngOnInit(): void {
    this.store.select('statuses').subscribe(async (resp:Status[])=>{
      this.status = resp.filter(x=> x.id == this.statusID)[0];
    })
  }

}
