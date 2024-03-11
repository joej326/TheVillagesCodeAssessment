import { Component } from '@angular/core';

import { ContentComponent } from './sections/content/content.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContentComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
