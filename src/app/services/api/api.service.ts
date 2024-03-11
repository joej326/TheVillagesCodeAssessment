import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../types/product';
import { Sale } from '../../types/sale';
import { Company } from '../../types/company';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  company = signal<Company | undefined>(undefined);
  products = signal<Product[]>([]);
  sales = signal<Sale[]>([]);
  dailySubtotal = computed<number>(() => {
    return this.sales().reduce((acc, sale) => {
      return acc + sale.total;
    }, 0);
  });
  collectedTax = signal<number>(0);

  constructor() {
    this.getProducts();

    this.getSales();

    // Simulate a slow real-time API by taking a few seconds to update the company info.
    setTimeout(() => {
      this.getCompanyInfo();
    }, 5000);
  }

  getCompanyInfo() {
    // This is a mock implementation, in a real app you would make a request to an API.
    // This endpoint is provided by a third-party service and is not under our control.
    this.company.set({
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui leo, pellentesque ac semper a, mollis eget orci. Donec ac ante pellentesque, maximus magna sed, luctus tellus. Cras eget justo vitae tortor consequat egestas. Aliquam erat volutpat. In mollis massa dolor, non ultricies tortor aliquam a. In eu augue vitae massa elementum dignissim aliquet rhoncus nulla. Vivamus ornare blandit ex eget fermentum. Cras feugiat sollicitudin eros non tincidunt. Phasellus non sem rhoncus, laoreet quam vitae, cursus turpis. Mauris vehicula enim at nisi convallis venenatis. Vivamus vel felis tristique, commodo metus non, gravida magna. Donec ante elit, iaculis eu scelerisque ullamcorper, porta dignissim nunc. Proin vel fringilla enim, et molestie magna. Duis turpis tortor, egestas quis nisi nec, luctus lobortis risus.

      Morbi feugiat fermentum nulla eget pharetra. Ut ut posuere nisi, eget vehicula massa. Cras finibus rhoncus euismod. Praesent tempor, orci non tincidunt commodo, velit nibh ultricies tellus, quis ultrices dolor metus sed est. Donec ac dictum diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque non turpis a nisi mollis aliquam vitae eget tortor. Sed et nunc quis risus pellentesque finibus a sed sapien. Sed at eros molestie, mattis urna sagittis, volutpat nunc. Etiam molestie ex vitae dui vehicula, nec auctor magna consequat. Sed imperdiet dolor non eros blandit, eu lobortis risus consectetur. Suspendisse a urna sed lectus finibus egestas sit amet vel leo. Nulla ac est a risus dictum ultricies non eget turpis.
      
      Morbi eget consequat ante, a dapibus libero. Proin magna purus, pulvinar quis ultricies vitae, luctus sed libero. Fusce id placerat nisi, ac ultrices diam. Curabitur hendrerit dapibus elit eget finibus. Vivamus sagittis libero rutrum ullamcorper ultricies. Suspendisse aliquet libero vel orci fringilla, in tincidunt augue pharetra. In mauris nisl, tristique sed aliquet sit amet, fermentum et purus. Etiam vel est ultricies, consectetur lectus a, convallis nisi. Vivamus vehicula enim interdum ipsum aliquam commodo. Donec sit amet elementum dolor, ac elementum ante. In risus tellus, luctus auctor mattis in, blandit in lorem. Aliquam eleifend ex eu leo tincidunt tincidunt. Vestibulum arcu ante, condimentum eget maximus sed, tincidunt nec nisi.`,
      address: '555 5th St, The Villages, FL 32169, USA',
      id: '1',
      photoUrl: 'https://cdn.pixabay.com/photo/2021/07/09/02/29/family-6398107_1280.jpg',
      title: 'The Lemonade Company',
    });
  }

  getProducts() {
    // This is a mock implementation, in a real app you would make a request to an API.
    // This endpoint is provided by a third-party service and is not under our control.
    this.products.set([
      {
        available: 26,
        iconUrl: 'assets/lemonade-icon.svg',
        id: 'small-lemonade',
        imageUrl: 'assets/small-lemonade.svg',
        price: 3,
        soldToday: 19,
        title: 'Small Lemonade',
        total: 26 + 19,
      },
      {
        available: 21,
        iconUrl: 'assets/lemonade-icon.svg',
        id: 'large-lemonade',
        imageUrl: 'assets/large-lemonade.svg',
        price: 4,
        soldToday: 14,
        title: 'Large Lemonade',
        total: 21 + 14,
      },
      {
        available: 44,
        iconUrl: 'assets/water-icon.svg',
        id: 'water',
        imageUrl: 'assets/water.svg',
        price: +'$1',
        soldToday: 8,
        title: 'Water',
        total: 44 + 8,
      },
      {
        available: 37,
        iconUrl: 'assets/cookie-icon.svg',
        id: 'cookie',
        imageUrl: 'assets/cookie.svg',
        price: 2,
        soldToday: 16,
        title: 'Cookie',
        total: 37 + 16,
      },
      {
        available: 12,
        iconUrl: 'assets/pie-icon.svg',
        id: 'pie',
        imageUrl: 'assets/pie.svg',
        price: 4,
        soldToday: 4,
        title: 'Pie',
        total: 12 + 4,
      },
      {
        available: 13,
        iconUrl: 'assets/cake-icon.svg',
        id: 'cake',
        imageUrl: 'assets/cake.svg',
        price: 4,
        soldToday: 2,
        title: 'Cake',
        total: 13 + 2,
      },
    ]);
  }

  getSales() {
    // This is a mock implementation, in a real app you would make a request to an API.
    // This endpoint is provided by a third-party service and is not under our control.
    this.sales.set([
      { customer: 'David Taylor', total: 5, method: 'cash', status: 'pending', time: new Date('2024-03-20T17:12:00.000Z'), id: '1' },
      { customer: 'Frank Johnson', total: 8, method: 'debit', status: 'completed', time: new Date('2024-03-20T16:41:00.000Z'), id: '2' },
      { customer: 'Eve Thomas', total: 10, method: 'google-pay', status: 'completed', time: new Date('2024-03-20T16:28:00.000Z'), id: '3' },
      { customer: 'Helen Moore', total: 9, method: 'paypal', status: 'completed', time: new Date('2024-03-20T16:19:00.000Z'), id: '4' },
      { customer: 'Jane Brown', total: 3, method: 'apple-pay', status: 'completed', time: new Date('2024-03-20T16:10:00.000Z'), id: '5' },
      { customer: 'Charlie Smith', total: 8, method: 'cash', status: 'completed', time: new Date('2024-03-20T15:57:00.000Z'), id: '6' },
      { customer: 'Jane Moore', total: 2, method: 'credit', status: 'completed', time: new Date('2024-03-20T15:54:00.000Z'), id: '7' },
      { customer: 'John Jackson', total: 8, method: 'credit', status: 'completed', time: new Date('2024-03-20T15:53:00.000Z'), id: '8' },
      { customer: 'Frank Moore', total: 4, method: 'debit', status: 'completed', time: new Date('2024-03-20T15:47:00.000Z'), id: '9' },
      { customer: 'Eve Smith', total: 4, method: 'paypal', status: 'completed', time: new Date('2024-03-20T15:39:00.000Z'), id: '10' },
      { customer: 'Charlie Jackson', total: 10, method: 'debit', status: 'completed', time: new Date('2024-03-20T14:35:00.000Z'), id: '11' },
      { customer: 'Grace Doe', total: 12, method: 'credit', status: 'completed', time: new Date('2024-03-20T14:12:50.000Z'), id: '12' },
      { customer: 'Charlie Brown', total: 8, method: 'google-pay', status: 'cancelled', time: new Date('2024-03-20T13:48:00.000Z'), id: '13' },
      { customer: 'John Johnson', total: 5, method: 'cash', status: 'completed', time: new Date('2024-03-20T12:15:00.000Z'), id: '14' },
      { customer: 'Bob Thomas', total: 6, method: 'google-pay', status: 'completed', time: new Date('2024-03-20T12:12:00.000Z'), id: '15' },
    ]);
  }

}
