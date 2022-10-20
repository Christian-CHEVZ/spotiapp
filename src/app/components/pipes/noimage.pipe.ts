import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imags: any[]): string {
    if( !imags ){
      return 'assets/img/noimage.png';
    }
    if( imags.length > 0 ){
      return imags[0].url;
    }else{
      return 'assets/img/noimage.png';
    }
  }

}
