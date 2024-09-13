import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../share/models/product.model";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.less']
})
export class EditProductDialogComponent {
  editProductForm: FormGroup
  title: string = "Edit product"
  @Input() product: Product | null = null;
  @Output() save = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.editProductForm = this.fb.group({
      name: [''],
      barcode: ['', [Validators.maxLength(13)]],
      price: [0, [Validators.min(0.01)]],
      rating: [0, [Validators.min(1), Validators.max(5)]],
      image: this.fb.array(['']),
      tags: this.fb.array([''])
    });
  }

  onSave(product: Product) {
    this.save.emit(product);
  }

  onCancel() {
    this.cancel.emit();
  }

}
