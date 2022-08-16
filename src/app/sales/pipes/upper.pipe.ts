import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'upperpipe'
})
export class UpperPipe implements PipeTransform {

    transform(value: string, upperCase: boolean = true): string {
        if (upperCase) {
            return value.toUpperCase();
        } else {
            return value.toLowerCase();
        }
    }
}