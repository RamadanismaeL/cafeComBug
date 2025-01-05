import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, finalize, Observable } from 'rxjs';
import { OcupadoService } from '../_services/ocupado.service';

/*
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
*/

@Injectable()
export class LoadingInterceptor implements HttpInterceptor
{
  constructor(private ocupadoService: OcupadoService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log("Interceptor chamado");
    this.ocupadoService.ocupado();
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        this.ocupadoService.desocupado();
        console.log("Finalizou a requisição");
      })
    );
  }

}
