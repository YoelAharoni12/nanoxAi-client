import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from "./products.service";
import {DataService} from "./data-service";


@NgModule({
  providers: [ProductService, DataService],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
