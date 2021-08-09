import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  constructor(private http:HttpClient) { 
    http.get('https://jsonplaceholder.typicode.com/photos').subscribe((resp:any)=>{
      console.log('photos' , resp)
    })
  }

  ngOnInit(): void {
  }

}
