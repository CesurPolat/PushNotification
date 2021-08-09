import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service:GlobalService,private router:Router) { }

  login(LoginData:any){
/*     this.http.post('https://api.aydemir.ndepo.com/api/Auth/login',LoginData).subscribe((resp:any) => {
      localStorage.setItem("token", resp.data.token);
      this.router.navigate(["/"])
    },
    (error) => {
      console.log(error);  
    }) */
    this.service.Create('/Auth/login' , LoginData).subscribe((resp:any)=>{
      localStorage.setItem("token", resp.data.token);
      //this.router.navigate(["/"])
      window.location.href = '/';
    }) 
    
  }

  ngOnInit(): void {
  }

}
