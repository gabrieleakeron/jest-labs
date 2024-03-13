import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(text: string | null | undefined, limit: number = 0): string {
    if (!text) return '';
    if (text.length <= limit) return text;
    var truncatedText = text.substring(0, limit);
    return truncatedText.concat('...');
  }

}
