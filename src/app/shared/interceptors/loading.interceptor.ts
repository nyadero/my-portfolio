// loading.interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { LoadingService } from '../service/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Check if request is for CSS or image files
    if (req.url.endsWith('.css') || req.url.match(/\.(jpeg|jpg|gif|png|svg)$/)) {
      this.loadingService.setLoading(true);
    }

    return next.handle(req).pipe(
      tap(() => {}),
      finalize(() => {
        if (req.url.endsWith('.css') || req.url.match(/\.(jpeg|jpg|gif|png|svg)$/)) {
          this.loadingService.setLoading(false);
        }
      })
    );
  }
}
