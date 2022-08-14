import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(public loader:LoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
this.loader.show();
      return next.handle(request).pipe(
        finalize(()=>{
          this.loader.hide();
        })
      );
     
    
  }
}
