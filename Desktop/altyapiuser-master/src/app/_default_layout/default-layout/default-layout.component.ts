import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {




  constructor(private router:Router) {
  }






  ngOnInit() {


  }

  signOut() {
    localStorage.removeItem("token");
    this.router.navigate(['/giris']);
  }


}
