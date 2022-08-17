import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'flypipe'
})
export class FlyPipe implements PipeTransform {

    transform(value: boolean) {
        // value ? 'flies' : 'doesn\'t fly'; 
        if (value) {
            return 'yes';
        } else {
            return 'no';
        } 
    }
}