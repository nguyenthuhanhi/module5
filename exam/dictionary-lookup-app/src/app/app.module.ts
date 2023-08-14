import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictoryDetailComponent } from './dictory-detail/dictory-detail.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DictoryDetailComponent,
    DictionaryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
