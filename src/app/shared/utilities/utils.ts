import { HttpParams } from '@angular/common/http';


export class Utils {

  static SET_PARAMS(httpParams: HttpParams, key: string, value: string): HttpParams {
    return httpParams.set(key, value);
  }

  static SET_SESSION_STORAGE(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }
  static GET_SESSION_STORAGE(key: string): string {
    return sessionStorage.getItem(key);
  }

  static IS_UNDEFINED_OR_NULL(value: any): boolean {
    return value === null || value === undefined;
  }
  static CONVERT_DATE_FORMATE(data): any {
    const ListArray = [];
    data.forEach(element => {
      element['createdAt'] = new Date(element.createdAt).toLocaleDateString();
      element['updatedAt'] = new Date(element.createdAt).toLocaleDateString();
      ListArray.push(element);
    });
    return ListArray;
  }
}
