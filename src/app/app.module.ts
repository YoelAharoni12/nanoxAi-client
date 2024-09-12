import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsComponent} from './components/products/products.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ProductService} from "../core/products.service";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "../core/data-service";
import {ProductCardComponent} from './components/products/product-card/product-card.component';
import {EditProductDialogComponent} from "./components/edit-product-dialog/edit-product-dialog.component";
import { SearchHeaderComponent } from './components/header/search-header/search-header.component';
import { AddProductDialogComponent } from './components/header/add-product-dialog/add-product-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    EditProductDialogComponent,
    SearchHeaderComponent,
    AddProductDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule, HttpClientModule
  ],
  providers: [ProductService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
