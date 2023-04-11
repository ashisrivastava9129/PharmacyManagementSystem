import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { AdminLoginComponent } from './components/AdminLogin/login.component';
import { AddDrugComponent } from './components/drugs/add-drug/add-drug.component';
import { EditDrugComponent } from './components/drugs/edit-drug/edit-drug.component';
import { DrugHomeComponent } from './components/drugs/home/home.component';
import { ViewDrugComponent } from './components/drugs/view-drug/view-drug.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { AddSuppliersComponent } from './components/suppliers/add-suppliers/add-suppliers.component';
import { EditSuppliersComponent } from './components/suppliers/edit-suppliers/edit-suppliers.component';
import { SuppliersHomeComponent } from './components/suppliers/home/home.component';
import { ViewSuppliersComponent } from './components/suppliers/view-suppliers/view-suppliers.component';
import { EditUserComponent } from './components/User-Auth/edit-user/edit-user.component';
import { AuthHomeComponent } from './components/User-Auth/home/home.component';
import { RegisterComponent } from './components/User-Auth/register/register.component';
import { AuthguardService } from './components/User-Auth/Service/authguard.service';
import { UserComponent } from './components/User-Auth/user/user.component';
import { BuyDrugComponent } from './DoctorInterFace/components/buy-drug/buy-drug.component';
import { DoctorInterHomeComponent } from './DoctorInterFace/components/doctor-inter-home/doctor-inter-home.component';
import { ViewDoctorOrderDescComponent } from './DoctorInterFace/components/view-doctor-order-desc/view-doctor-order-desc.component';
import { ViewDoctorOrders } from './DoctorInterFace/components/view-doctor-orders/view-doctor-orders.component';
import { ViewDoctorDrugComponent } from './DoctorInterFace/components/view-drug/view-drug.component';

const routes: Routes = [
  {path:'login', component:AuthHomeComponent},
  {path:'addToCart', component:AddToCartComponent},
  {path:'', component:IndexPageComponent},
  {path:'drugHome', component:DrugHomeComponent},
  {path:'drugHome/:id', component:ViewDrugComponent},
  {path:'drug-add', component:AddDrugComponent},
  {path:'drugHome/:id/drug-edit', component:EditDrugComponent},
  {path:'suppliersHome',component:SuppliersHomeComponent, canActivate: [AuthguardService]},
  {path:'suppliersHome/:id', component:ViewSuppliersComponent},
  {path:'suppliers-add',component:AddSuppliersComponent},
  {path:'suppliersHome/:id/suppliers-edit',component:EditSuppliersComponent},
  {path:'view-user',component:UserComponent},
  {path:'login/register',component:RegisterComponent},
  {path:'view-user/edit-user',component:EditUserComponent},
  {path:'doctorHome',component:DoctorInterHomeComponent, canActivate: [AuthguardService]},
  {path:'doctorOrders',component:ViewDoctorOrders},
  {path:'doctorOrders/:id',component:ViewDoctorOrderDescComponent},
  {path:':id',component:ViewDoctorDrugComponent},
  {path:':id/buy/:id',component:BuyDrugComponent, canActivate: [AuthguardService]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
