import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { SoldPercentPipe } from '../../pipes/sold-precent/sold-percent.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, SoldPercentPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(public apiService: ApiService) { }

}
