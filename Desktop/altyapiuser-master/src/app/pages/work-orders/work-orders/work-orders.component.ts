import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/@core/ngrx/app.state';
import { Country } from 'src/@core/ngrx/model/country.model';
import { WorkOrder } from 'src/@core/ngrx/model/workorder.model';
import { GlobalService } from 'src/app/services/global.service';
import * as WorkorderActions from './../../../../@core/ngrx/actions/workorder.actions';

import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.scss']
})
export class WorkOrdersComponent implements OnInit {
  works: any;
  countries: Observable<Country[]>;
  WorkOrder: Observable<WorkOrder>;
  loading = true;
  fcm: any;

  tutRef: AngularFirestoreCollection<any> = null;

  udata: any;
  GroupData: any;

  GroupKeys: any;

  FcmUsers: any;
  FcmUsersId: any;
  FcmUsersData: any;

  isOneTime = false;
  isOneTime2 = false;

  Status: any;

  currentStatusName = "All";
  allWorkOrders;

  BacksupWorks;

  goDetails(item) {
    this.store.dispatch(new WorkorderActions.AddWorkOrder(item))
    this.router.navigate([`/is-emirleri/detay/${item?.id}`])
  }


  constructor(private service: GlobalService, private store: Store<AppState>, private db: AngularFirestore, private Uservice: UserService, private router: Router, private angularFireMessaging: AngularFireMessaging) {
    // this.service.getCountriesState();
    // this.countries = store.select('country')
    this.tutRef = this.db.collection('users');

    this.udata = this.db.collection('users', ref => ref.where("appId", "==", parseInt(this.Uservice.user['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'])));

    this.GroupData = this.tutRef.doc("cDBTLu02nTa8uTfQxZEl").valueChanges().subscribe((resp) => {
      console.log(resp);
      this.GroupKeys = resp;

    });
    this.service.Get("/WorkOrders/getworkerbyclaims").subscribe((resp: any) => {
      this.works = resp.data;
      this.BacksupWorks = resp.data;
      this.loading = false;
      this.service.Get("/Status/getusertatuses").subscribe((resp: any) => {
        this.Status = resp.data;
        console.log(this.Status);

        resp?.data?.forEach(element => {
          const tempList = this.works.filter(x => x?.instantStatusId == element?.id);
          element.WorkOrders = tempList;
          console.log(element);


        });


      })
    })




  }

  ngOnInit() {
    this.requestPermission();
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        this.fcm = token;
        console.log(token)
        this.FcmUsers = this.db.collection('users', ref => ref.where("fcm", "array-contains", token));

        this.FcmUsers.snapshotChanges().subscribe((resp) => {
          this.FcmUsersId = resp.map(c => c.payload.doc.id);
          this.FcmUsersData = resp.map(c => c.payload.doc.data().fcm);

        })

        setTimeout(() => {
          this.FcmUsersId.forEach((element, index) => {
            let i = this.FcmUsersData[index].indexOf(token);
            this.FcmUsersData[index].splice(i, 1)

            this.tutRef.doc(element + '').update({ fcm: this.FcmUsersData[index] })

          });
        }, 500);


        setTimeout(() => {
          this.udata.snapshotChanges().subscribe((resp) => {

            if (!this.isOneTime2) {
              this.isOneTime2 = true;

              let npa = [resp[0].payload.doc.data().fcm][0];
              if (npa.indexOf(this.fcm) > -1) {
                console.log("Var");

              } else {
                npa.push(this.fcm);
                this.tutRef.doc(resp[0].payload.doc.id + '').update({ fcm: npa });

              }

            }
          }
          )
        }, 1000);
      },
      (err) => {
        this.fcm = err;
      }
    );


  }

  getStatusFilter(item) {

    if (item == null) {
      this.currentStatusName = "All";
    }
    else{
      this.currentStatusName = item.name;

    }
    
    
    

    if (this.currentStatusName != "All") {
      this.works = item.WorkOrders
    }
    else {
      this.works = this.BacksupWorks;

    }
  }


}
