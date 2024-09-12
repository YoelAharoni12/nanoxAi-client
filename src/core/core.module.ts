import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "./products.service";



@NgModule({
  providers: [ProductService],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
