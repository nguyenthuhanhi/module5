import {IWord} from "../model/IWord";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Dictionary {
  iWords: IWord [] = [
    {word: 'television', mean: 'tivi'},
    {word: 'bed', mean: 'cái giường'},
    {word: 'cabinet', mean: 'cái tủ '},
    {word: 'table', mean: 'cái bàn'},
    {word: 'bookcase', mean: 'tủ sách'}

  ];

  findAll(): IWord[] {
    return this.iWords;
  }

  findByIWord(word: string): IWord {
    return this.iWords.find(obj => obj.word === word);
  }
  constructor() {
  }
}
