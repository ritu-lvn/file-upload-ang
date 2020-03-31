import { Pipe, PipeTransform } from '@angular/core';
import {FileModel} from '../model/FileModel'
@Pipe({
  name: 'productFilter'
})
export class FilterName implements PipeTransform {

  transform(value: FileModel[], ...args: string[]) {
    return value && value !== null && value.length > 0 && args && args !== null && args[0] && args[0] !== null ?
        value.filter((p: FileModel) => p.fileName.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) !== -1)
        : value;
}
}
