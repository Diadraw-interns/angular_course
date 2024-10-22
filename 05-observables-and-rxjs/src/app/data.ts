import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product, Review } from './products/product';

export class AppData implements InMemoryDbService {
  createDb(): { products: Product[]; reviews: Review[] } {
    return { products, reviews };
  }
}

const products: Product[] = [
  {
    id: 1,
    productName: 'Wireless Earbuds',
    productCode: 'WLB-1234',
    description: 'Noise-canceling wireless earbuds with Bluetooth 5.0.',
    price: 89.99,
    quantityInStock: 150,
    hasReviews: true,
  },
  {
    id: 2,
    productName: 'Smartwatch',
    productCode: 'SMW-5678',
    description: 'Water-resistant smartwatch with heart rate monitor.',
    price: 199.99,
    quantityInStock: 75,
    hasReviews: true,
  },
  {
    id: 3,
    productName: '4K TV',
    productCode: 'TV-1122',
    description: '55-inch 4K UHD Smart TV with HDR support.',
    price: 499.99,
    quantityInStock: 20,
    hasReviews: false,
  },
  {
    id: 4,
    productName: 'Laptop',
    productCode: 'LPT-3344',
    description: 'Lightweight laptop with Intel i7 and 16GB RAM.',
    price: 1199.99,
    quantityInStock: 35,
    hasReviews: true,
  },
  {
    id: 5,
    productName: 'Gaming Mouse',
    productCode: 'GM-9987',
    description: 'Ergonomic gaming mouse with customizable RGB lighting.',
    price: 49.99,
    quantityInStock: 200,
    hasReviews: true,
  },
  {
    id: 6,
    productName: 'Bluetooth Speaker',
    productCode: 'BSP-2255',
    description: 'Portable Bluetooth speaker with 360-degree sound.',
    price: 59.99,
    quantityInStock: 180,
    hasReviews: false,
  },
  {
    id: 7,
    productName: 'Electric Toothbrush',
    productCode: 'ETB-1023',
    description: 'Rechargeable electric toothbrush with 5 brushing modes.',
    price: 29.99,
    quantityInStock: 90,
    hasReviews: true,
  },
  {
    id: 8,
    productName: 'Fitness Tracker',
    productCode: 'FT-3245',
    description: 'Fitness tracker with step counter and sleep monitoring.',
    price: 39.99,
    quantityInStock: 120,
    hasReviews: true,
  },
  {
    id: 9,
    productName: 'Wireless Charger',
    productCode: 'WC-8765',
    description: '10W fast charging wireless pad for smartphones.',
    price: 24.99,
    quantityInStock: 95,
    hasReviews: false,
  },
  {
    id: 10,
    productName: 'Noise-Cancelling Headphones',
    productCode: 'NCH-4432',
    description:
      'Over-ear noise-canceling headphones with up to 30-hour battery life.',
    price: 299.99,
    quantityInStock: 60,
    hasReviews: true,
  },
];

const reviews: Review[] = [
  {
    id: 1,
    productId: 1,
    userName: 'JohnDoe123',
    title: 'Excellent sound quality!',
    text: 'These earbuds provide amazing sound and the noise cancelation is top-notch. Highly recommend!',
  },
  {
    id: 2,
    productId: 2,
    userName: 'FitnessFanatic',
    title: 'Great fitness companion',
    text: 'The smartwatch has been a great addition to my fitness routine. Accurate tracking and comfortable to wear.',
  },
  {
    id: 3,
    productId: 4,
    userName: 'TechieGal',
    title: 'Powerful and portable',
    text: 'This laptop is perfect for both work and play. Lightweight yet packs a punch with performance!',
  },
  {
    id: 4,
    productId: 5,
    userName: 'GamerGuy98',
    title: 'Awesome mouse for gaming',
    text: 'Very comfortable to use during long gaming sessions, and the RGB lighting is a nice touch.',
  },
  {
    id: 5,
    productId: 7,
    userName: 'HealthySmile',
    title: 'My teeth feel cleaner than ever',
    text: 'Love the various modes on this toothbrush. My dentist even noticed an improvement!',
  },
  {
    id: 6,
    productId: 8,
    userName: 'FitLife',
    title: 'Great value for the price',
    text: 'This fitness tracker does everything I need without the hefty price tag of other brands.',
  },
  {
    id: 7,
    productId: 10,
    userName: 'MusicLover',
    title: 'Fantastic noise-canceling!',
    text: 'Perfect for listening to music in noisy environments. Battery life is also amazing.',
  },
  {
    id: 8,
    productId: 1,
    userName: 'SarahSmith',
    title: 'Good but could be better',
    text: "The sound is great, but they aren't as comfortable as I had hoped. Still good for the price.",
  },
  {
    id: 9,
    productId: 2,
    userName: 'RunnerUp',
    title: 'Great for runners',
    text: 'Tracks my runs perfectly and syncs well with my phone. A must-have for runners.',
  },
  {
    id: 10,
    productId: 5,
    userName: 'ProGamer',
    title: 'Smooth and responsive',
    text: "I've used this mouse in competitive gaming and it's performed really well. No issues so far.",
  },
];
