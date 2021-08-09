import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SignaturePad } from 'angular2-signaturepad';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { AppState } from 'src/@core/ngrx/app.state';
import { GlobalService } from 'src/app/services/global.service';
import { UserService } from 'src/app/services/user.service';
import { WorkOrderStatus } from '../workorder-detail/workorder-detail.component';


@Component({
  selector: 'app-workorder-status-edit',
  templateUrl: './workorder-status-edit.component.html',
  styleUrls: ['./workorder-status-edit.component.scss']
})

export class WorkorderStatusEditComponent implements OnInit {
  workOrderStatus = new WorkOrderStatus();
  workStatusList: any[] = [];
  isLoading = false;
  status = { instantStatusId: null }

  user;
  userId;
  workOrderStatusPhotos:any[] = [];


  constructor(private service: GlobalService, private router: ActivatedRoute,private store:Store<AppState>, private userService: UserService) { 
 
    router.params.subscribe((resp:any)=>{
    this.service.GetID('/WorkOrderStatus' , parseInt(resp.id)).subscribe((resp2:any)=>{
      console.log('workorderSTATUS' , resp2.data)
      this.workOrderStatus = resp2.data;
      this.service.GetID('/WorkOrderStatusPhotos/getallbystatusid' , parseInt(resp.id)).subscribe((respPhotos:any)=>{
        console.log('***WorkOrderStatusPhotos***' , respPhotos)
        this.workOrderStatusPhotos = respPhotos.data;
      }) 
    })
 
    }) 
  }


  

  async send(fm: NgForm) {
    this.service.formValidationMessage(fm.form.controls);
    if (fm.form.invalid) { return }
    this.isLoading = true;
    let phot = await this.handleUpload(this.workOrderStatus.id.toString());

    this.service.Update('/WorkOrderStatus', this.workOrderStatus).subscribe((resp: any) => {
      this.isLoading = false;
      setTimeout(() => {
        this.isLoading = false;
         this.service.createNotification('success', `<strong> İş Emri Durumu eklendi</strong> `, ``); 
         // window.location.href = '/';
         
      }, 1500);
    }, error => {
      this.service.createNotification('error', `Hata Oluştu`, error.error.error.message)
      this.isLoading = false;
    })
  }


   deletePhoto(id,index){
    this.workOrderStatusPhotos.splice(index,1)
     this.service.Remove('/WorkOrderStatusPhotos' , parseInt(id)).subscribe((resp:any)=>{
     })
     
   }


  ngOnInit(): void {
    this.store.select('statuses').subscribe((resp:any)=>{
      console.log('resp STORE' , resp )
      this.workStatusList = resp;
    })
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


   deleteFileListitem(ind){
      this.fileList.splice(ind,1)

       
   }


  handleUpload(statusId:string) {
    return new Promise((resolve:any)=>{
      let formData = new FormData();
      formData.append('workOrderStatusId', statusId.toString());
      this.fileList.forEach((file: any) => {
        formData.append('formFiles', file);
      });
      this.uploading = true;
      this.service.Update('/WorkOrderStatusPhotos/UploadPhotoFlickr', formData).subscribe((response) => {
        this.service.createNotification('success', `<strong> İş Emri Fottoğrafları yüklendi</strong> `, ``); 
      //  this.message.success("Fotoğraflar başarıyla yüklendi.")
      window.location.href = '/';
      this.uploading = false;
      }, errorResponse => {
        alert('Hata Oluştu. Lütfen Yeniden Deneyin')
      })
      resolve(true)
    }) 
   
 
  }


 
  




}
