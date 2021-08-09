import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import "rxjs/add/operator/do";
// import Swal from 'sweetalert2';
export class AuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        let authToken = localStorage.getItem('token');
        let newRequest: HttpRequest<any>;
        newRequest = request.clone({
            headers: request.headers.set("Authorization" ,  `Bearer ${authToken}`),
         });
   
 
        return next.handle(newRequest)
            .do(
                success => {
                    if (success.type !== 0) {
                    }
                },
                error => {
                    console.error('interceptordan gelen hata' , error);
                    if (request.method === 'POST' || request.method === 'PUT' || request.method === 'DELETE' ) {}
                }
            );
    }
}
