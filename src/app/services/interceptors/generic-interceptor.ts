import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { HostService } from 'src/app/services/host.service';
import { Utils } from 'src/app/shared/utilities/utils';
import { SpinnerService } from '../spinner.service';
import { catchError, finalize, tap } from 'rxjs/operators';

@Injectable()

export class GeneticInterceptor implements HttpInterceptor {

    constructor(private hostService: HostService, private spinnerService: SpinnerService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let observable;
        this.spinnerService.show();
        if (!req.url.includes('login')) {
            observable = req.clone({
                headers: req.headers.set('auth-token', Utils.GET_SESSION_STORAGE('auth-token')),
                url: this.hostService.getHostURL() + req.url
            });

        } else {
            observable = req.clone({
                url: this.hostService.getHostURL() + req.url
            });
        }
        return next.handle(observable).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.spinnerService.hide();
            }
        }, (error) => {
            this.spinnerService.hide();
        })
        );

    }
}