import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from "../../share/models/product.model";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.less']
})
export class EditProductDialogComponent implements OnChanges {
  productForm: FormGroup
  @Input() product: Product | null = null;
  @Output() save = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: [''],
      barcode: ['', [Validators.maxLength(13)]],
      price: [0, [Validators.min(0.01)]],
      rating: [0, [Validators.min(1), Validators.max(5)]],
      image: this.fb.array(['']),
      tags: this.fb.array([''])
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product) {
      this.setFormValues(this.product);
    }
  }

  get imageArray(): FormArray {
    return this.productForm.get('image') as FormArray;
  }

  get tagsArray(): FormArray {
    return this.productForm.get('tags') as FormArray;
  }

  onSave() {
    if (this.isFormValid()) {
      this.save.emit({...this.productForm.value, id: this.product!.id});
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  isFormValid(): boolean {
    return this.productForm.valid;
  }

  private setFormValues(product: Product) {
    this.productForm.patchValue({
      name: product.name,
      barcode: product.barcode,
      price: product.price,
      rating: product.rating
    });

    this.setFormArray(this.imageArray, product.image[0]);
    this.setFormArray(this.tagsArray, product.tags[0]);
  }

  private setFormArray(formArray: FormArray, value: string) {
    formArray.clear();
    formArray.push(this.fb.control(value));

  }
}
