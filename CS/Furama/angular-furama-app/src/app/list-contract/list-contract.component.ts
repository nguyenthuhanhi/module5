import { Component, OnInit } from '@angular/core';
import {Contract} from "./contract";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts: Contract[]=[
    {
      idHopDong: 1,
      ngayLamHopDong: '10/10/2022',
      ngayKetThuc: '10/12/2022',
      tienDatCoc: 500000,
      tongTien: 450000
    },
    {
      idHopDong: 2,
      ngayLamHopDong: '17/03/2022',
      ngayKetThuc: '18/06/2022',
      tienDatCoc: 500000,
      tongTien: 560000
    },
    {
      idHopDong: 3,
      ngayLamHopDong: '25/07/2022',
      ngayKetThuc: '08/11/2022',
      tienDatCoc: 1000000,
      tongTien: 2605000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
