import { Injectable } from '@angular/core';
import { ContentResourceConstants } from 'src/app/constant/contentresource.constant';

@Injectable({
  providedIn: 'root'
})
export class ContentresourceService {

  constructor() { }

  getContentConstValue(key: string): any {
    return ContentResourceConstants.CONTENTRESOURCES[key];
  }
}
