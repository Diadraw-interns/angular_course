import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './products/product';

export class AppData implements InMemoryDbService {
  createDb(): { products: Product[]; tags: string[] } {
    return { products, tags };
  }
}

const tags = ['Electronics', 'Furniture', 'Lifestyle', 'Footwear'];

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Mouse',
    code: 'WM-001',
    description: 'A high-precision wireless mouse with ergonomic design.',
    price: 25.99,
    quantityInStock: 150,
    tag: 'Electronics',
  },
  {
    id: 2,
    name: 'Bluetooth Headphones',
    code: 'BH-002',
    description: 'Noise-canceling over-ear headphones with deep bass.',
    price: 59.99,
    quantityInStock: 80,
    tag: 'Electronics',
  },
  {
    id: 3,
    name: 'Office Desk',
    code: 'OD-003',
    description: 'Adjustable height office desk with cable management.',
    price: 199.99,
    quantityInStock: 40,
    tag: 'Furniture',
  },
  {
    id: 4,
    name: 'LED Desk Lamp',
    code: 'LD-004',
    description: 'Energy-efficient LED desk lamp with brightness control.',
    price: 18.99,
    quantityInStock: 120,
    tag: 'Furniture',
  },
  {
    id: 5,
    name: 'Water Bottle',
    code: 'WB-005',
    description: 'Eco-friendly stainless steel water bottle, 750ml.',
    price: 15.99,
    quantityInStock: 200,
    tag: 'Lifestyle',
  },
  {
    id: 6,
    name: 'Yoga Mat',
    code: 'YM-006',
    description: 'Non-slip yoga mat with extra cushioning for comfort.',
    price: 29.99,
    quantityInStock: 60,
    tag: 'Lifestyle',
  },
  {
    id: 7,
    name: 'Smart Watch',
    code: 'SW-007',
    description: 'Feature-packed smart watch with heart rate monitoring.',
    price: 149.99,
    quantityInStock: 90,
    tag: 'Electronics',
  },
  {
    id: 8,
    name: 'Running Shoes',
    code: 'RS-008',
    description: 'Breathable and lightweight running shoes for endurance.',
    price: 89.99,
    quantityInStock: 70,
    tag: 'Footwear',
  },
  {
    id: 9,
    name: 'Gaming Keyboard',
    code: 'GK-009',
    description: 'Mechanical gaming keyboard with customizable backlight.',
    price: 69.99,
    quantityInStock: 55,
    tag: 'Electronics',
  },
  {
    id: 10,
    name: 'Sneakers',
    code: 'SN-010',
    description: 'Casual sneakers for daily wear, comfortable and stylish.',
    price: 49.99,
    quantityInStock: 100,
    tag: 'Footwear',
  },
];
