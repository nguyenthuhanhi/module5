// @ts-ignore

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  product: Product;
  categories: Category[];

  // tslint:disable-next-line:variable-name max-line-length
  displayStyle = 'none';

  // tslint:disable-next-line:variable-name max-line-length
  constructor(private _formBuilder: FormBuilder, private _productService: ProductService, private _activatedRoute: ActivatedRoute, private _router: Router, private _categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.findAllCategory();
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
    this._productService.findById(this.id).subscribe(product => {
      this.product = product;
      this.productForm = this._formBuilder.group({
        id: [this.product.id],
        name: [this.product.name],
        price: [this.product.price],
        description: [this.product.description],
        category: []
      });
    });
  }

  submit(id: number) {
    this._productService.delete(this.id).subscribe(() => {
      this._router.navigate(['/product/list']);
    }, error => {
      console.log(error);
    });
  }

  // @ts-ignore
  findAllCategory(): Category[] {
    this._categoryService.getAll().subscribe(value => {
      this.categories = value;
    });
  }

  openPopup() {
    this.displayStyle = 'block';
  }

  closePopup() {
    // this.displayStyle = 'none';
    this._productService.delete(this.id).subscribe(() => {
      this._router.navigate(['/product/list']);
    });
  }
}
