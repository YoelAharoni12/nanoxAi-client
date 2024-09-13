import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../share/models/product.model";

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.less']
})
export class AddProductDialogComponent {
  //TODO: i need to remove the id filed from add product
  product: Omit<Product,'id'> = {
    barcode: '',
    image: [''],
    name: '',
    rating: 0,
    price: 0,
    tags: []
  };
  @Output() save = new EventEmitter<Omit<Product,'id'>>();
  @Output() cancel = new EventEmitter<void>();

  onSave() {
    this.save.emit(this.product);
  }

  onCancel() {
    this.cancel.emit();
  }

  isFormValid(): boolean {
    return this.product.name.trim() !== '' &&
      this.product.barcode.trim() !== '' &&
      this.product.price > 0 &&
      this.product.rating >= 1 && this.product.rating <= 5 &&
      this.product.image[0].trim() !== '';
  }
}
