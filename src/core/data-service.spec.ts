import {TestBed} from '@angular/core/testing';

import {ProductService} from './products.service';
import {Product} from '../share/models/product.model';
import {of} from 'rxjs';
import {DataService} from "./data-service";
import {mockProducts} from "../share/mocks/products.mock";

describe('DataService', () => {
  let service: DataService;
  let mockProductService: jasmine.SpyObj<ProductService>;

  beforeEach(() => {
    // Create a spy object for ProductService
    mockProductService = jasmine.createSpyObj('ProductService', [
      'loadProducts$',
      'updateProduct$',
      'deleteProduct$',
      'addProduct$'
    ]);

    TestBed.configureTestingModule({
      providers: [
        DataService,
        {provide: ProductService, useValue: mockProductService}
      ]
    });
    mockProductService.loadProducts$.and.returnValue(of([]))
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('should fetch initial data', () => {
    mockProductService.loadProducts$.and.returnValue(of(mockProducts));

    service.fetchInitialData();
    service.data$.subscribe(data => {
      expect(data).toEqual(mockProducts);
    });
  });

  it('should update an item', () => {
    const updatedProduct: Product = {...mockProducts[0], name: 'Updated Product'};
    mockProductService.loadProducts$.and.returnValue(of(mockProducts));
    service.fetchInitialData();

    mockProductService.updateProduct$.and.returnValue(of(updatedProduct));
    service.updateItem('1', updatedProduct);
    service.data$.subscribe(data => {
      expect(data.find(product => product.id === '1')?.name).toEqual('Updated Product');
    });
  });

  it('should add an item', () => {
    const newProduct: Omit<Product, 'id'> = {
      barcode: '',
      name: 'New Product',
      image: [],
      tags: [],
      rating: 0,
      price: 0
    };

    const addedProduct: Product = {...newProduct, id: 'mock-id'} as Product;
    mockProductService.addProduct$.and.returnValue(of(addedProduct));

    service.addItem(newProduct);
    service.data$.subscribe(data => {
      expect(data.find(product => product.name === 'New Product')).toBeDefined();
    });
  });

  it('should filter products by search term', () => {
    const product: Product = {
      id: '1',
      barcode: '',
      name: 'Searchable Product',
      image: [],
      tags: [],
      rating: 0,
      price: 0
    };
    mockProductService.loadProducts$.and.returnValue(of([product]));
    service.fetchInitialData();
    service.setSearch('searchable');

    service.getFilteredProducts$().subscribe(filteredProducts => {
      expect(filteredProducts).toEqual([product]);
    });
  });
});
