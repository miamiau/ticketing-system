import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogService } from '../services/error-dialog.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private errorDialogService: ErrorDialogService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && event.status != 200) {
                    console.log('event: ', event);
                    this.errorDialogService.openErrorDialog(event.status + ' ' + event.statusText);
                }
                return event;
            }), catchError((error: HttpErrorResponse) => {
                let data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                this.errorDialogService.openErrorDialog(data.reason + data.status);
                return throwError(error);
            }));
    }
}
