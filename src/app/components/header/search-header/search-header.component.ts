import {Component} from '@angular/core';
import {Product} from "../../../share/models/product.model";
import {DataService} from "../../../core/data-service";


@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.less']
})
export class SearchHeaderComponent {
  showDialog: boolean = false;

  constructor(private dataService: DataService) {
  }

  openAddProductDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  saveProduct(product: Omit<Product, 'id'>) {
    this.dataService.addItem(product)
    this.closeDialog();
  }

  filterProduct(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value.toLowerCase();
    this.dataService.setSearch(searchTerm);
  }

}
