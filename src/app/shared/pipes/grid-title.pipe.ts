import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridTitle'
})
export class GridTitlePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const stringWithSpaces = value.replace(/_/g, ' ');

    return stringWithSpaces
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
  }
}