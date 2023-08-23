import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[];

  // tslint:disable-next-line:variable-name max-line-length
  constructor(private _formBuilder: FormBuilder, private _productService: ProductService, private _router: Router, private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll();
    this.productForm = this._formBuilder.group({
      id: [],
      name: [],
      price: [],
      description: [],
      category: []
    });
  }
  submit() {
    const product = this.productForm.value;
    this._productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      alert('Tạo thành công');
      this._router.navigate(['/product/list']);
    }, e => {
      console.log(e);
    });
  }
  getAll() {
    this._categoryService.getAll().subscribe(value => {
      this.categories = value;
    });
  }
}
