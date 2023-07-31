import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { ContractComponent } from './contract/contract.component';
import { CustomerComponent } from './customer/customer.component';
import { EditComponent } from './service/edit.component';
import { ServiceComponent } from './service/service.component';
import { EditContractComponent } from './edit-contract/edit-contract.component';
import { AddContractComponent } from './add-contract/add-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderFooterComponent,
    ContractComponent,
    CustomerComponent,
    EditComponent,
    ServiceComponent,
    EditContractComponent,
    AddContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }