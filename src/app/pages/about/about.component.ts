import { Component, Injector, WritableSignal, effect, signal } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Company } from '../../types/company';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  companyAboutInfo: Company | undefined;

  constructor(public apiService: ApiService, private injector: Injector) { }

  ngOnInit() {
    effect(() => {
     this.companyAboutInfo = this.apiService.company();
     console.log(this.companyAboutInfo);

    }, {injector: this.injector})
    

    console.log(this.companyAboutInfo);
  }

}
