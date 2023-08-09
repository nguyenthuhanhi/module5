import { Component, OnInit } from '@angular/core';
import {Customer} from "./customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[]=[
    {
      idKhanhHang: 1,
      hoTen: 'Nguyễn Văn A',
      ngaySinh: '10/10/1999',
      soCMND: 145625894,
      sdt : 84562456984,
      email : 'nguyenvana@gmail.com',
      diaChi: '10 phước lý 10'
    },
    {
      idKhanhHang: 2,
      hoTen: 'Nguyễn Văn B',
      ngaySinh: '01/12/1898',
      soCMND: 548695784,
      sdt : 84758965415,
      email : 'nguyenvanb@gmail.com',
      diaChi: '11 trần hưng đaọ'
    },
    {
      idKhanhHang: 3,
      hoTen: 'Nguyễn Văn C',
      ngaySinh: '17/09/1998',
      soCMND: 236541526,
      sdt : 84123545961,
      email : 'nguyenvanc@gmail.com',
      diaChi: '452 hòa khánh bắc'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
