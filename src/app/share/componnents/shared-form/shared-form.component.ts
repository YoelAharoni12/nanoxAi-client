import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from "../../models/product.model";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styleUrls: ['./shared-form.component.less']
})
export class SharedFormComponent implements OnChanges {
  @Input() isShowDialog?: boolean
  @Input() product?: Product | null
  @Input() formGroup: FormGroup
  @Input() title: string
  @Output() save = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product) {
      this.setFormValues(this.product);
    }
  }


  get imageArray(): FormArray {
    return this.formGroup.get('image') as FormArray;
  }

  get tagsArray(): FormArray {
    return this.formGroup.get('tags') as FormArray;
  }

  onSave() {
    if (this.isFormValid()) {
      const productToSave = this.product ? {...this.formGroup.value, id: this.product.id} : this.formGroup.value;
      this.save.emit(productToSave);
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  isFormValid(): boolean {
    return this.formGroup.valid;
  }

  private setFormValues(product: Product) {
    this.formGroup.patchValue({
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
