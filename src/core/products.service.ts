import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {Product} from "../share/models/product.model";


@Injectable()
export class ProductService {
  private apiUrl = 'http://localhost:4000/products';
  private _productsSubject = new BehaviorSubject<Product[]>([]);
  products$: Observable<Product[]>

  constructor(private http: HttpClient) {
    this.products$ = this._productsSubject.asObservable()
  }

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}`)
  }

  getProducts$(): Observable<Product[]> {
    return this.products$;
  }

  addProduct$(product: Product): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, product);
  }

  updateProduct$(id: string, product: Partial<Product>): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}`, product)
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
