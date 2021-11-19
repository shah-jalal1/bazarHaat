import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Pagination} from '../interfaces/pagination';
import {ProductGeneric} from '../interfaces/product-generic';


const API_TAG = environment.apiBaseLink + '/api/generic/';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * TAG
   */
  addGeneric(data: ProductGeneric) {
    return this.httpClient.post<{ message: string }>(API_TAG + 'add-single-generic', data);
  }

  insertManyGeneric(data: ProductGeneric[]) {
    return this.httpClient.post<{ message: string }>(API_TAG + 'add-multiple-generic', data);
  }


  getAllGenerics(pagination?: Pagination) {
    if (pagination) {
      let params = new HttpParams();
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('page', pagination.currentPage);
      return this.httpClient.get<{ data: ProductGeneric[], message?: string, count: number }>(API_TAG + 'get-all-tags', {params});
    } else {
      return this.httpClient.get<{ data: ProductGeneric[], message?: string, count: number }>(API_TAG + 'get-all-tags');
    }

  }


  getGenericByGenericId(id: string) {
    return this.httpClient.get<{ data: ProductGeneric, message?: string }>(API_TAG + 'get-generic-by-generic-id/' + id);
  }

  editGenericData(data: ProductGeneric) {
    return this.httpClient.put<{ message?: string }>(API_TAG + 'edit-generic-by-generic', data);
  }

  deleteGeneric(id: string) {
    return this.httpClient.delete<{ message?: string }>(API_TAG + 'delete-generic-by-id/' + id);
  }


  getSearchGeneric(searchTerm: string, pagination?: Pagination) {
    const paginate = pagination;
    let params = new HttpParams();
    params = params.append('q', searchTerm);
    params = params.append('pageSize', pagination.pageSize);
    params = params.append('currentPage', pagination.currentPage);
    return this.httpClient.post<{ data: ProductGeneric[], count: number }>(API_TAG + 'get-tags-by-search', paginate, {params});
  }


}
