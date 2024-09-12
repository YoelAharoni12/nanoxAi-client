import {Component} from '@angular/core';
import {Product} from "../../../share/models/product.model";
import {combineLatest, map, Observable} from "rxjs";
import {DataService} from "../../../core/data-service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent {
  products$: Observable<Product[]>;
  editProduct: Product | null

  constructor(private dataService: DataService) {
    this.products$ = combineLatest(this.dataService.data$, this.dataService.searchTerm$).pipe(
      map(([products, searchTerm]) => products.filter(product =>
        `${product.name}`.toLowerCase().includes(searchTerm.toLowerCase()))),
    )
  }

  openEditModal(product: Product) {
    this.editProduct = {...product};
  }

  onSaveEditProduct(product: Product) {
    this.dataService.updateItem(product.id, product);
    this.editProduct = null
  }

  onDeleteProduct(id: string) {
    return this.dataService.deleteItem(id)
  }

  onCancelEdit() {
    this.editProduct = null
  }

}
