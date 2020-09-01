import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar',
})
export class AvatarPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length === 0) {
      return 'N/A';
    }
    value = value.toUpperCase();
    const words = value.split(' ');
    if (words.length === 1) {
      return words[0].length > 1 ? words[0][0] + words[0][1] : words[0][0];
    } else {
      return words[0][0] + words[1][0];
    }
  }
}
