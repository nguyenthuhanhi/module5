import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayStyle = 'none';
  products: Product[] = [];
  idProduct: number;
  p = 1;

  // tslint:disable-next-line:variable-name
  private Swal: any;
  private msg: boolean;

  constructor(private productService: ProductService, private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    // this.products = this.productService.getAll();
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  openPopup(id: number) {
    this.displayStyle = 'block';
    this.idProduct = id;
  }

  closePopup() {
    this.displayStyle = 'none';
  }

  delete() {
    this.productService.delete(this.idProduct).subscribe(() => {
      this.closePopup();
      this.ngOnInit();
    });
  }

  search(inputSerach: HTMLInputElement) {
    this.productService.search(inputSerach.value).subscribe(next => {
      this.products = next;
      if (this.products.length === 0) {
        this.msg = true;
      } else {
        this.msg = false;
      }
    });
  }
}
