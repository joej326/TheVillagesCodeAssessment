import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {  }

  ngOnInit() {
    setTimeout(() => {
      this.selectedLink = this.router.url;
    });
  }
  
  selectedLink: string = '';

  links = signal([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Sales', path: '/sales' },
    { name: 'Cart', path: '/cart' },
  ]);

  isMenuOpen = signal(false);

  handleLinkClick(linkPath: string) {
    this.selectedLink = linkPath;
  }

}
