export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface CartState {
  items: Product[];
}

// TODO: Да се създаде action за добавяне на продукт към количката
// TODO: Да се създаде reducer за количката
// TODO:Да се създаде selector за взимане на броя елементи в количката
