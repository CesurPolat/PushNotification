import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SignaturePad } from 'angular2-signaturepad';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/@core/ngrx/app.state';
import { GlobalService } from 'src/app/services/global.service';
import { UserService } from 'src/app/services/user.service';
import { WorkOrderStatus } from '../workorder-detail/workorder-detail.component';



const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });


@Component({
  selector: 'app-workorder-add-new-status',
  templateUrl: './workorder-add-new-status.component.html',
  styleUrls: ['./workorder-add-new-status.component.scss']
})
export class WorkorderAddNewStatusComponent implements OnInit {
  workOrderStatus = new WorkOrderStatus();
  workStatusList: any[] = [];
  isLoading = false;
  status = { instantStatusId: null }

  user;
  userId;

  lastWorkOrderStatus:any;
  
  constructor(private service: GlobalService, private router: ActivatedRoute,private store:Store<AppState>, private userService: UserService,private http: HttpClient) { 
 
    router.params.subscribe((resp:any)=>{
      this.workOrderStatus.workOrderId = parseInt(resp.id);
       service.GetID('/WorkOrderStatus/getallbyworkorderid' , resp.id).subscribe((getallbyworkorderid:any)=>{
         this.lastWorkOrderStatus = getallbyworkorderid.data.pop();
       })

    }) 
  }

  async send(fm: NgForm) {
    this.service.formValidationMessage(fm.form.controls);
    if (fm.form.invalid) { return }
    this.isLoading = true;

    this.workOrderStatus.carId = this.lastWorkOrderStatus.carId;

    console.log('work order', this.workOrderStatus)

    this.service.Create('/WorkOrderStatus', this.workOrderStatus).subscribe((resp: any) => {
      this.service.createNotification('success', `<strong> İş Emri Durumu eklendi</strong> `, ``);
      
      this.handleUpload(resp.data.id);
      setTimeout(() => {
        this.isLoading = false;
         this.service.createNotification('success', `<strong> İş Emri Durumu eklendi</strong> `, ``); 
         // window.location.href = '/';
         
      }, 1500);
    }, error => {
      console.log('errr', error)
      this.service.createNotification('error', `Hata Oluştu`, error.error.error.message)
      this.isLoading = false;
    })
  }



  ngOnInit(): void {
    this.store.select('statuses').subscribe((resp:any)=>{
      this.workStatusList = resp;
    })
    this.workOrderStatus.isClosed = true;
    this.workOrderStatus.addStatusUserId =   this.userId = this.userService.getUserId();
  }



  


  signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasHeight': 300,
    'canvasWidth': 1024 
  };
  signatureImg: string = '';
  @ViewChild(SignaturePad) signaturePad!: SignaturePad;
  drawComplete() {
      this.workOrderStatus.signature = this.signaturePad.toDataURL();
      var splitted = this.signaturePad.toDataURL().split(';base64,')[1];
      // console.log('--XXX--' , splitted)
      this.workOrderStatus.signature = splitted;
    }
    clearSignature() {
      this.signaturePad.clear();
      this.workOrderStatus.signature = null;
    }







  // TODO NEW
    
  uploading = false;
  fileList: NzUploadFile[] = [];

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    console.log('ffiilee' , this.fileList)
    // this.fileList = [file];
    const myReader =  new FileReader();
    myReader.readAsDataURL(file as any);
    myReader.onloadend = (e) => {
      file.preview  = myReader.result;
    }; 
    return false;
    
  };

  handleUpload(statusId:string): void {
    let formData = new FormData();
    formData.append('workOrderStatusId', statusId.toString());
    this.fileList.forEach((file: any) => {
      formData.append('formFiles', file);
    });
    this.uploading = true;
    this.service.Update('/WorkOrderStatusPhotos/UploadPhotoFlickr', formData).subscribe((response) => {
      console.log("gelen response", response)
      this.service.createNotification('success', `<strong> İş Emri Fotoğrafları Yüklendi eklendi</strong> `, ``);
      this.isLoading = false;
      window.location.href = '/';
    //  this.message.success("Fotoğraflar başarıyla yüklendi.")
    this.uploading = false;
    }, errorResponse => {
      alert('Hata Oluştu. Lütfen Yeniden Deneyin')
    })
 
  }


 
  deleteFileListitem(ind){
    this.fileList.splice(ind,1)

     
 }


}



  // TODO FILE OPERATIONS ÇALIŞIYOR

/*

  <!--   <br>
    <br>
    <input nz-button
      class="btn btn-primary mb-5 abtn btn-hovered btn-block waves-effect w-400 waves-float waves-light  "
      type="file" id="name" (change)="handleFileInput($event)" accept=".jpeg,.png,.jpg" multiple>

    <br>
    <br>
    <button *ngIf="isPhotoAdd" id="submit-btn" nz-button [nzLoading]="isLoading" (click)="sendPhoto()"
      class="btn btn-primary mb-5 abtn btn-hovered btn-block waves-effect w-400 waves-float waves-light  ">
      Seçilen fotoğrafları gönder
    </button> -->





  formData: FormData = new FormData();
  nzSkeletonLoading = true;
  isPhotoAdd = false;


  handleFileInput(event: any) {
    console.log('event' , event)
    for (let j = 0; j < event.target.files.length; j++) {
      let fileItem = event.target.files[j];
      console.log('file item' , fileItem )
      // this.files.push(fileItem);

      this.formData.append('formFiles', fileItem);
    }
    this.isPhotoAdd = true;

    console.log("lastFormdata", this.formData);
     this.formData.forEach(element => {
        console.log('sadasda---' , element )
     });
  }


  sendPhoto() {
    this.formData.append('workOrderStatusId', this.workOrderStatus.workOrderId.toString());
  //this.formData.append('workOrderStatusId', '38');

    this.service.Update('/WorkOrderStatusPhotos/UploadPhotoFlickr', this.formData).subscribe((response) => {
      console.log("gelen response", response)
    //  this.message.success("Fotoğraflar başarıyla yüklendi.")

    }, errorResponse => {
     // this.message.error(errorResponse.error.message);
    })
  } */











// TODO SIGNATURE 

/*   drawStart() {
  console.log('begin drawing');
}



   savePad() {
  const base64Data = this.signaturePad.toDataURL();
  this.signatureImg = base64Data;
  var parts = base64Data.split(';base64,');
} 


// download
   download(dataURL: any, filename: any) {
  var blob = this.dataURLToBlob(dataURL);
  var url = window.URL.createObjectURL(blob);

  let a = document.createElement("a");
  //a{style = "display: none";
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();

  window.URL.revokeObjectURL(url);
} 

dataURLToBlob(dataURL: any) {
  // Code taken from https://github.com/ebidel/filer.js
  var parts = dataURL.split(';base64,');
  var contentType = parts[0].split(":")[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}



 saveSVG() {
  if (this.signaturePad.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    var dataURL = this.signaturePad.toDataURL('image/svg+xml');
    this.download(dataURL, "signature.svg");
  }
} */