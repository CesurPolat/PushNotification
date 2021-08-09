import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandleService {

  constructor() { }
  HandleError(error: Response) {

    if (error.status === 400) {
      return Observable.throw({message :'Hatalı İstek - CODE 400' , error});
    }
    if (error.status === 401) {
      return Observable.throw({message :'Yetkiniz Yok - CODE 401' , error});
    }
    if (error.status === 404) {
      return Observable.throw({message :'Veri Bulunamadı - CODE 404' , error});

    }
    return Observable.throw('Beklenmeyen Bir Hata Oluştu');
  }
}
