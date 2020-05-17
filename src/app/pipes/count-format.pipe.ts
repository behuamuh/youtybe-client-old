import { Pipe, PipeTransform } from '@angular/core';

const MILLION = 1000000;
const THOUSAND = 1000;
@Pipe({
  name: 'countFormat'
})
export class CountFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value > MILLION) return (value / MILLION).toFixed(1) + 'M';

    if (value > THOUSAND) return (value / THOUSAND).toFixed(1) + 'K';

    return value;
  }

}
