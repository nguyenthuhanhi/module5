import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Product[] = [{
  //   id: 1,
  //   name: 'IPhone 12',
  //   price: 2400000,
  //   description: 'New'
  // }, {
  //   id: 2,
  //   name: 'IPhone 11',
  //   price: 1560000,
  //   description: 'Like new'
  // }, {
  //   id: 3,
  //   name: 'IPhone X',
  //   price: 968000,
  //   description: '97%'
  // }, {
  //   id: 4,
  //   name: 'IPhone 8',
  //   price: 7540000,
  //   description: '98%'
  // }, {
  //   id: 5,
  //   name: 'IPhone 11 Pro',
  //   price: 1895000,
  //   description: 'Like new'
  // }];


  constructor(private http: HttpClient  ) { }
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  // @ts-ignore
  saveProduct(product): Observable<Product> {
      return this.http.post<Product>('http://localhost:3000/products', product);
  }
  findById(id: number): Observable<Product> {
    // return this.products.find(product => product.id === id);
      return this.http.get<Product>('http://localhost:3000/products/' + id );
  }

  // @ts-ignore
  updateProduct(product: Product, id: number): Observable<Product> {
      return this.http.put<Product>('http://localhost:3000/products/' + product.id, product);
  }

  // @ts-ignore
  delete(id: number): Observable<Product> {
    return this.http.delete<Product>('http://localhost:3000/products/' + id);
  }
  search(input: string): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products'  + '?name_like=' + input);
  }
}
