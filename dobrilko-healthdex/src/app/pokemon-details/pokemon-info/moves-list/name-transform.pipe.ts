import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameTransform'
})
export class NameTransformPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.replace("-", " ");
  }

}
