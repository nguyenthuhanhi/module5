import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from "./dictionary-page/dictionary-page.component";
import {DictoryDetailComponent} from "./dictory-detail/dictory-detail.component";


const routes: Routes = [
  { path: 'home',component: DictionaryPageComponent},
  { path: 'detail/:word', component:DictoryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
