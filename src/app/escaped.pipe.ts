import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escaped'
})
export class EscapedPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return value;
    if (value) {
      return value.replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
    }
    return ""
  }

}
