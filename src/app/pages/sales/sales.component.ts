import { Component, Signal, WritableSignal, signal } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { CommonModule } from '@angular/common';
import { Sale } from '../../types/sale';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {

  fetchedSales: Sale[] = [];
  currentSort: string = '';

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.fetchedSales = this.apiService.sales();
  }

  handleCustomerSort() {
    if (this.currentSort === 'column') {
      this.fetchedSales = [...this.fetchedSales].reverse();
      return;
    }
    
    this.fetchedSales = this.fetchedSales.sort((a: any, b: any) => {
        if (a.customer < b.customer) {
          return -1;
        }
        if (a.customer > b.customer) {
          return 1;
        }
        return 0;
      });
    
    this.currentSort = 'column';
  }

  handleTotalSort() {
    if (this.currentSort === 'total') {
      this.fetchedSales = [...this.fetchedSales].reverse();
      return;
    }
    this.fetchedSales = [...this.fetchedSales.sort((a: any, b: any) => {
      if (a.total < b.total) {
        return -1;
      }
      if (a.total > b.total) {
        return 1;
      }
      return 0;
    })];

    this.currentSort = 'total';
  }

  handleMethodSort() {
    if (this.currentSort === 'method') {
      this.fetchedSales = [...this.fetchedSales].reverse();
      return;
    }

    this.fetchedSales = [...this.fetchedSales.sort((a: any, b: any) => {
      if (a.method < b.method) {
        return -1;
      }
      if (a.method > b.method) {
        return 1;
      }
      return 0;
    })];

    this.currentSort = 'method';
  }

  handleStatusSort() {
    if (this.currentSort === 'status') {
      this.fetchedSales = [...this.fetchedSales].reverse();
      return;
    }
    this.fetchedSales = [...this.fetchedSales.sort((a: any, b: any) => {
      if (a.status < b.status) {
        return -1;
      }
      if (a.status > b.status) {
        return 1;
      }
      return 0;
    })];

    this.currentSort = 'status';
  }

}
