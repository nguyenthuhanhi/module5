import { Component, OnInit } from '@angular/core';
import {IWord} from "../model/IWord";
import {Dictionary} from "../service/dictionary";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictory-detail',
  templateUrl: './dictory-detail.component.html',
  styleUrls: ['./dictory-detail.component.css']
})
export class DictoryDetailComponent implements OnInit {
  iWord: IWord;
  constructor(private _dictionaryService: Dictionary, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.iWord = this._dictionaryService.findByIWord(this._activatedRoute.snapshot.params.word);
  }

}
