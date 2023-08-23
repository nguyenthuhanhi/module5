import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [{
    id: 1,
    name: 'IPhone'
  }, {
    id: 2,
    name: 'Samsung',
  }, {
    id: 3,
    name: 'LG',
  }];

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  saveCategory(category): Observable<Category> {
    // @ts-ignore
    return this.http.post<Category>('http://localhost:3000/categories/', category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>('http://localhost:3000/categories/' + id);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>('http://localhost:3000/categories/' + id, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>('http://localhost:3000/categories/' + id);
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/categories');
  }
}

