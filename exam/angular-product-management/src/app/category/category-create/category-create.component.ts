import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });
  // tslint:disable-next-line:variable-name
  constructor(private categoryService: CategoryService, private _router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(category).subscribe(() => {
      this.categoryForm.reset();
      this._router.navigate(['/category/list']);
      alert('Tao moi thanh cong');
      }, error => {
      console.log(error);
      }
    );
  }
}
