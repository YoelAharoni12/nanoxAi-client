import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from 'rxjs';
import {ProductService} from "./products.service";
import {Product} from "../share/models/product.model";

@Injectable()
export class DataService {
  private _products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  data$: Observable<Product[]>

  constructor(private productService: ProductService) {
    this.fetchInitialData();
    this.data$ = this._products$.asObservable();
  }

  private fetchInitialData() {
    this.productService.loadProducts$().subscribe(products => {
      this._products$.next(products);
    })
  }

  updateItem(id: string, updatedData: Partial<Product>) {
    this.productService.updateProduct$(id, updatedData).subscribe(() => {
      const currentData = this._products$.getValue();
      const updatedDataList = currentData.map(item =>
        item.id === id ? {...item, ...updatedData} : item
      );
      this._products$.next(updatedDataList);
    })

  }

  deleteItem(id: string) {
    this.productService.deleteProduct$(id).subscribe(() => {
      const currentData = this._products$.getValue();
      const updatedData = currentData.filter((item) => item.id !== id);
      this._products$.next([...updatedData]);
    })
  }

  addItem(newProduct: Omit<Product, 'id'>) {
    this.productService.addProduct$(newProduct).subscribe((product) => {
      const currentData = this._products$.getValue();
      this._products$.next([...currentData, product]);
    })
  }

  setSearch(searchTerm: string) {
    this.searchTerm$.next(searchTerm)
  }

  getFilteredProducts$(): Observable<Product[]> {
    return combineLatest(this.data$, this.searchTerm$).pipe(
      map(([products, searchTerm]) => products.filter(product =>
        `${product.name}`.toLowerCase().includes(searchTerm.toLowerCase()))),
    )
  }
}
