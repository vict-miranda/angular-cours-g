import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'noimage'
})
export class NoImagePipe implements PipeTransform {

    constructor(private domSanitizer: DomSanitizer) { }

    transform(value: any, args?: any): any {        
        if (!value) {
            return "assets/images/noimage.png";
        }

        if (value.length == 0) {
            return "assets/images/noimage.png";
        }
        else {
            return this.cleanURL(value);
        }
    }

    cleanURL(oldURL: string): SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustUrl(oldURL);
    }

}
