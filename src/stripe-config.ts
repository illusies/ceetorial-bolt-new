export interface Product {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const products: Product[] = [
  {
    id: 'prod_SV7s2ORUlG6EWj',
    priceId: 'price_1Ra7dCQM4UGMGgffyiJL8pW9',
    name: 'Ceetorial Free Tier',
    description: 'Perfect for getting started with C programming',
    mode: 'payment',
  },
];