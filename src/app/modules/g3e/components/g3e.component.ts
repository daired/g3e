import {AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {G3eConfig} from '../g3e.config';
import {G3eService} from '../services/g3e.service';

@Component({
    selector: 'g3e-outlet',
    template: '<router-outlet></router-outlet>',
})
export class G3eComponent implements OnInit, OnDestroy, AfterViewInit {

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor( @Inject(PLATFORM_ID) private platformId: Object,
                 @Inject('G3E_CONFIG') private config: G3eConfig,
                 private route: ActivatedRoute,
                 private g3eService: G3eService) {

        // console.log('create new instance of G3eComponent ');
        // subscribe once to g3e service get resolved router data
        // at first step after lazy load app child module --> see app.routes
        this.route.data.pipe( takeUntil(this.destroy$) ).subscribe(({ resolvedData }) => {
            this.g3eService.setResolvedData(resolvedData);
        });
    }

    ngOnInit() {
        // console.log('--> G3eComponent ngOnInit');
    }

    ngAfterViewInit() {
        // console.log('--> G3eComponent ngAfterViewInit');
    }

    ngOnDestroy() {
        // console.log('--> G3eComponent ngOnDestroy');
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }


}
