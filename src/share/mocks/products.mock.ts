import {Product} from "../models/product.model";

export const mockProducts: Product[] = [
  {
    id: '1',
    barcode: '1234567890123',
    name: 'Product A',
    image: ['https://example.com/images/product-a.jpg'],
    tags: ['electronics', 'gadget'],
    rating: 4.5,
    price: 299.99
  },
  {
    id: '22',
    barcode: '9876543210987',
    name: 'Product B',
    image: ['https://example.com/images/product-b.jpg'],
    tags: ['home', 'appliance'],
    rating: 3.8,
    price: 89.99
  },
  {
    id: '3',
    barcode: '1122334455667',
    name: 'Product C',
    image: ['https://example.com/images/product-c.jpg'],
    tags: ['fashion', 'accessory'],
    rating: 4.2,
    price: 49.99
  },
  {
    id: '4',
    barcode: '6677889900112',
    name: 'Product D',
    image: ['https://example.com/images/product-d.jpg'],
    tags: ['sports', 'gear'],
    rating: 4.7,
    price: 159.99
  },
  {
    id: '5',
    barcode: '2233445566778',
    name: 'Product E',
    image: ['https://example.com/images/product-e.jpg'],
    tags: ['books', 'literature'],
    rating: 4.0,
    price: 24.99
  }
];
