import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalConstants {
    static JK_TOKEN: 'JK_TOKEN';
    static CONTENT_TYPE = 'application/x-www-form-urlencoded';
    static ACCEPT_TYPE_JSON = 'application/json';

}