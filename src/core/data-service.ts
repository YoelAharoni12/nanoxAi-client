import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {ProductService} from "./products.service";
import {Product} from "../share/models/product.model";

@Injectable()
export class DataService {
  private dataSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>('');
  data$: Observable<Product[]>

  constructor(private productService: ProductService) {
    this.fetchInitialData();
    this.data$ = this.dataSubject.asObservable();
  }

  private fetchInitialData() {
    this.productService.loadProducts().subscribe(products => {
      this.dataSubject.next(products);
    })
  }

  getData(): Observable<Product[]> {
    return this.dataSubject.asObservable();
  }

  updateItem(id: string, updatedData: Partial<Product>) {
    this.productService.updateProduct$(id, updatedData).subscribe(() => {
      const currentData = this.dataSubject.getValue();
      const updatedDataList = currentData.map(item =>
        item.id === id ? {...item, ...updatedData} : item
      );
      this.dataSubject.next(updatedDataList);
    })

  }

  deleteItem(id: string) {

    this.productService.deleteProduct(id).subscribe(() => {
      const currentData = this.dataSubject.getValue();
      const updatedData = currentData.filter((item) => item.id !== id);
      this.dataSubject.next([...updatedData]);
    })
  }

  addItem(newItem: Product) {
    this.productService.addProduct$(newItem).subscribe(() => {
      const currentData = this.dataSubject.getValue();
      this.dataSubject.next([...currentData, newItem]); // Trigger rerender by updating state
    })
  }

  setSearch(searchTerm: string) {
    this.searchTerm.next(searchTerm)
  }
}
