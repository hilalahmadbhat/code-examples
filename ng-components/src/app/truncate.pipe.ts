import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const length = parseInt(args[0])
    var str = value.length>length?value.substring(0,length)+'...':value;
    return str;
  }

}
