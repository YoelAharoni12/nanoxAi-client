import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../share/models/product.model";

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.less']
})
export class EditProductDialogComponent {

  @Input() product: Product | null = null;
  @Output() save = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  onSave() {
    if (this.product) {
      this.save.emit(this.product);
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  isFormValid() {
    if (this.product) {
      return this.product.name.trim() !== '' ||
        this.product.barcode.trim() !== '' ||
        this.product.price > 0 ||
        this.product.rating >= 1 && this.product.rating <= 5 ||
        this.product.image[0].trim() !== '';
    }
    return false;
  }
}
