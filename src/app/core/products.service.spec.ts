import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ProductService} from './products.service';
import {Product} from '../share/models/product.model';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:4000/products';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadProducts$', () => {
    it('should fetch a list of products', () => {
      const mockProducts: Product[] = [
        {id: '1', name: 'Product 1', barcode: '12345', price: 10.0, rating: 4, image: ['url1'], tags: ['tag1']},
        {id: '2', name: 'Product 2', barcode: '67890', price: 15.0, rating: 5, image: ['url2'], tags: ['tag2']}
      ];

      service.loadProducts$().subscribe((products) => {
        expect(products.length).toBe(2);
        expect(products).toEqual(mockProducts);
      });

      const req = httpMock.expectOne(apiUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockProducts);
    });
  });

  describe('addProduct$', () => {
    it('should add a product and return the added product', () => {
      const newProduct: Omit<Product, 'id'> = {
        name: 'New Product',
        barcode: '12345',
        price: 12.5,
        rating: 4.5,
        image: ['new-image-url'],
        tags: ["vegetables"]
      };

      const returnedProduct: Product = {
        ...newProduct,
        id: '3'
      };

      service.addProduct$(newProduct).subscribe((product) => {
        expect(product).toEqual(returnedProduct);
      });

      const req = httpMock.expectOne(apiUrl);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(newProduct);

      req.flush(returnedProduct);
    });
  });
});
