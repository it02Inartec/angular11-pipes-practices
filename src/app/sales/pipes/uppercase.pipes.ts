import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'upper'
})
export class UppercasePipe implements PipeTransform {

    transform(text: string, isUpper: boolean = true): string {
        return (isUpper) ? text.toUpperCase() : text.toLowerCase();
    }
}