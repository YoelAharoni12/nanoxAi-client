import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from "../../../share/models/product.model";

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.less']
})
export class AddProductDialogComponent {
  productForm: FormGroup;

  @Output() save = new EventEmitter<Omit<Product, 'id'>>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      barcode: ['', [Validators.required, Validators.maxLength(13)]],
      price: [0, [Validators.required, Validators.min(0.01)]],
      rating: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
      image: this.fb.array([''], Validators.required),
      tags: this.fb.array([''], Validators.required)
    });
  }

  get imageArray(): FormArray {
    return this.productForm.get('image') as FormArray;
  }

  get tagsArray(): FormArray {
    return this.productForm.get('tags') as FormArray;
  }

  onSave() {
    if (this.isFormValid()) {
      this.save.emit(this.productForm.value);
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  isFormValid(): boolean {
    return this.productForm.valid;
  }
}
