import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { EditContractComponent } from './edit-contract/edit-contract.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListFacilityComponent } from './list-facility/list-facility.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ListContractComponent } from './list-contract/list-contract.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderFooterComponent,
    EditContractComponent,
    AddContractComponent,
    AddServiceComponent,
    EditServiceComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ListFacilityComponent,
    ListCustomerComponent,
    ListContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
