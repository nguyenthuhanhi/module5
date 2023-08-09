import { Component, OnInit } from '@angular/core';
import {Facility} from "./facility";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  facilities: Facility[]=[
    {
      idDichVu: 1,
      tenDichVu: 'dịch vụ cho thuê căn hộ',
      dienTich: 2500,
      soTang: 2,
      soNguoiToiDa: 4,
      chiPhiThue: 1255000,
      trangThai: 'còn trống'
    },
    {
      idDichVu: 2,
      tenDichVu: 'dịch vụ cho thuê homestay',
      dienTich: 4500,
      soTang: 2,
      soNguoiToiDa: 7,
      chiPhiThue: 1755000,
      trangThai: 'còn trống'
    },
    {
      idDichVu: 3,
      tenDichVu: 'dịch vụ cho thuê khách sạn',
      dienTich: 2500,
      soTang: 1,
      soNguoiToiDa: 4,
      chiPhiThue: 1255000,
      trangThai: 'còn trống'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
