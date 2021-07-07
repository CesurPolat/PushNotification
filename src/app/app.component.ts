import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vatanSeyyar';

  products: any = [
    { 'name': 'Elektronik', 'price': '10TL', 'description': 'Ürün', 'image': 'https://productimages.hepsiburada.net/s/73/300-443/110000014912740.jpg' },
    { 'name': 'Tişört', 'price': '20TL', 'description': 'Ayak', 'image': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
    { 'name': 'Ayakabı', 'price': '20TL', 'description': 'Ayak', 'image': 'https://cdn.dsmcdn.com//ty64/product/media/images/20210323/12/74633312/91892291/1/1_org.jpg' },
    { 'name': 'Valorant Point', 'price': '20TL', 'description': 'Ayak', 'image': 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt86cd8572a30911aa/60cbfdb00ece0255888d895a/V_Ep_03_REFLECTION_Article-Header.jpg?auto=webp&disable=upscale&height=1055' }
  ]

  brandElems: any;
  categoryElems: any;


  constructor(private http: HttpClient, private swPush: SwPush, private swUpdate:SwUpdate) {
    this.http.get('https://api.seyyarcollection.com/api/Brand').subscribe((resp: any) => {
      this.brandElems = resp;
    })

    this.http.get('https://api.seyyarcollection.com/api/Category/GetFront').subscribe((resp: any) => {
      this.categoryElems = resp;
    })



  }

  ngOnInit(): void {


  }

  readonly VAPID_PUBLIC_KEY = "BF2y0VLMNrXADnoNovUBLJLAhV-L22mZaq7BUmLPueyFMt-ASp1SWnJNEQFNj2LpTNk8abZlU9kK0X42ncjJfT8";

  subscribeToNotifications() {
    /* if(!this.swPush.isEnabled){
      console.log("Hata");
    }

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then((sub) => console.log("a",JSON.stringify(sub)))
      .catch(err => console.error("Could not subscribe to notifications", err));
  } */

  this.swPush.requestSubscription({serverPublicKey: this.VAPID_PUBLIC_KEY}).then(sub => {
    console.log("Sub",sub)
    console.log("Au",sub.toJSON().keys.auth)
    console.log("P256",sub.toJSON().keys.p256dh)
  }) 


}
}