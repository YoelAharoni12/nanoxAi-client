import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from "../../../share/models/product.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent {
  @Input() product: Product;
  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<string>();

  onEdit() {
    this.edit.emit(this.product);
  }

  onDelete() {
    this.delete.emit(this.product.id!);
  }
}
