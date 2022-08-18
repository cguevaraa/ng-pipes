import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'flypipe'
})
export class FlyPipe implements PipeTransform {

    transform(value: boolean) {
        return value ? 'yes' : 'no'; 
    }
}