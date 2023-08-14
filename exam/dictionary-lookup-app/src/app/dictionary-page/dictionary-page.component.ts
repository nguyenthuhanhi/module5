import { Component, OnInit } from '@angular/core';
import {IWord} from "../model/IWord";
import {Dictionary} from "../service/dictionary";




@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  iWords: IWord[];
  constructor(private _dictionaryService: Dictionary) { }

  ngOnInit(): void {
    this.iWords = this._dictionaryService.findAll();
  }

}
