import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../types/product';

@Pipe({
  name: 'soldPercent',
  standalone: true
})
export class SoldPercentPipe implements PipeTransform {

  transform(value: Product): number {
    if (!value?.total || !value?.soldToday) { return 0; }

    return Math.round((value.soldToday / value.total) * 100);
  }

}
