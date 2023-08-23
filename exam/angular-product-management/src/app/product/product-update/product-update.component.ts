import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm: FormGroup;
  id: number;
  categories: Category[];
  product: Product;

  // tslint:disable-next-line:variable-name max-line-length
  constructor(private _formBuilder: FormBuilder, private _productService: ProductService,
              // tslint:disable-next-line:variable-name
              private _activatedRoute: ActivatedRoute, private _router: Router,
              // tslint:disable-next-line:variable-name
              private _categoryService: CategoryService) {
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
    const product = this.productForm.value;
    console.log(product);
    // @ts-ignore
    this._productService.updateProduct(product).subscribe(() => {
      alert('Update thành công');
      this._router.navigate(['/product/list']);
    }, error => console.log(error));

  }
  // @ts-ignore
  findAllCategory(): Category[] {
    this._categoryService.getAll().subscribe(value => {
      this.categories = value;
    });
  }
}
