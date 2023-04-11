import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AdminLoginComponent } from './components/AdminLogin/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { DrugHomeComponent } from './components/drugs/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ViewDrugComponent } from './components/drugs/view-drug/view-drug.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDrugComponent } from './components/drugs/add-drug/add-drug.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditDrugComponent } from './components/drugs/edit-drug/edit-drug.component';
import { AdminRegisterComponent } from './components/AdminLogin/register/register.component';
import { ViewAdminComponent } from './components/AdminLogin/view-admin/view-admin.component';
import { EditAdminComponent } from './components/AdminLogin/edit-admin/edit-admin.component';
import { AddSuppliersComponent } from './components/suppliers/add-suppliers/add-suppliers.component';
import { SuppliersHomeComponent } from './components/suppliers/home/home.component';
import { ViewSuppliersComponent } from './components/suppliers/view-suppliers/view-suppliers.component';
import { EditSuppliersComponent } from './components/suppliers/edit-suppliers/edit-suppliers.component';
import { AuthHomeComponent } from './components/User-Auth/home/home.component';
import { UserComponent } from './components/User-Auth/user/user.component';
import { RegisterComponent } from './components/User-Auth/register/register.component';
import { EditUserComponent } from './components/User-Auth/edit-user/edit-user.component';
import { CommonModule } from '@angular/common';
import { DoctorInterHomeComponent } from './DoctorInterFace/components/doctor-inter-home/doctor-inter-home.component';
import { BuyDrugComponent } from './DoctorInterFace/components/buy-drug/buy-drug.component';
import { ViewDoctorDrugComponent } from './DoctorInterFace/components/view-drug/view-drug.component';
import { ViewDoctorOrders } from './DoctorInterFace/components/view-doctor-orders/view-doctor-orders.component';
import { ViewDoctorOrderDescComponent } from './DoctorInterFace/components/view-doctor-order-desc/view-doctor-order-desc.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdminLoginComponent,
    FooterComponent,
    AddToCartComponent,
    IndexPageComponent,
    DrugHomeComponent,
    ViewDrugComponent,
    AddDrugComponent,
    EditDrugComponent,
    AdminRegisterComponent,
    ViewAdminComponent,
    EditAdminComponent,
    AddSuppliersComponent,
    ViewSuppliersComponent,
    SuppliersHomeComponent,
    EditSuppliersComponent,
    AuthHomeComponent,
    UserComponent,
    RegisterComponent,
    EditUserComponent,
    DoctorInterHomeComponent,
    BuyDrugComponent,
    ViewDoctorDrugComponent,
    ViewDoctorOrders,
    ViewDoctorOrderDescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
