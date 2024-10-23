import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rainbows',
  standalone: true
})
export class RainbowsPipe implements PipeTransform {

  transform(value: string, separator: string = '🌈'): string {
    return value.split('').join(separator);
  }

  
}
