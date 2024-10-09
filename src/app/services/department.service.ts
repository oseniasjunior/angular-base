import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Department} from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  url: string = "http://localhost:8000/api/sale/department/";

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Department[]> {
    return this.http.get<Department[]>(this.url);
  }

  save(department: Department): Observable<Department> {
    return this.http.post<Department>(this.url, department);
  }

}
