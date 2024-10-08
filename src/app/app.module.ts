import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsComponent} from './components/products/products.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ProductCardComponent} from './components/products/product-card/product-card.component';
import {EditProductDialogComponent} from "./components/edit-product-dialog/edit-product-dialog.component";
import {SearchHeaderComponent} from './components/header/search-header/search-header.component';
import {AddProductDialogComponent} from './components/header/add-product-dialog/add-product-dialog.component';
import {CoreModule} from "./core/core.module";
import { SharedFormComponent } from './share/componnents/shared-form/shared-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    EditProductDialogComponent,
    SearchHeaderComponent,
    AddProductDialogComponent,
    SharedFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule, HttpClientModule, CoreModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
