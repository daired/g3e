import { Pipe, PipeTransform } from '@angular/core';
import {G3eService} from '../services/g3e.service';

@Pipe({
    name: 'g3e'
})

export class G3ePipe implements PipeTransform {

    constructor(private g3eService: G3eService) { }


    transform(value: string): any {
        if (!value) return;
        return this.g3eService.instant(value);
    }
}
