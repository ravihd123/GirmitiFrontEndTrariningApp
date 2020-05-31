import { Injectable } from '@angular/core';
import { AddTrainingConfigConstants } from './addtraining-constant';
import { HttpClientService } from 'src/app/services/http-client.service';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/shared/utilities/utils';

@Injectable({
  providedIn: 'root'
})
export class AddtrainingsService {

  constructor(
    private httpSrv: HttpClientService
  ) { }


  getCategories(): Observable<any> {
    return this.httpSrv.get(AddTrainingConfigConstants.Category.URL);
  }

  getSubcategories(id): Observable<any> {
    return this.httpSrv.get(AddTrainingConfigConstants.SubCategory.URL + id);
  }

  addCategories(data): Observable<any> {
    const createFormData = {
      "categoryName": data
    }
    return this.httpSrv.callApi('POST', AddTrainingConfigConstants.addCategory.URL, createFormData)
  }

  addSubCategories(data, id): Observable<any> {
    const createFormData = {
      "categoryId": id,
      "subCategoryName": data
    }
    return this.httpSrv.callApi('POST', AddTrainingConfigConstants.addSubCategory.URL, createFormData);
  }

  createTraining(formData, isEdit, data): Observable<any> {
    console.log(data)
    const createFormData = {
      "trainingName": formData.trainingname,
      "category": formData.category.categoryName,
      "subCategory": formData.subcategory.subCategoryName,
      "status": formData.status,
      "createdBy": Utils.GET_SESSION_STORAGE('loggedInUser')

    }
    if (isEdit) {
      return this.httpSrv.callApi('PUT', AddTrainingConfigConstants.updateTraining.URL + data._id, createFormData);
    } else {
      return this.httpSrv.callApi('POST', AddTrainingConfigConstants.CreateTraining.URL, createFormData);

    }
  }

}
