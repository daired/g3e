import {AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {G3eService} from '../../services/g3e.service';

@Component({
    selector: 'g3e-render-view',
    templateUrl: './render-view.view.html',
    styleUrls: ['./render-view.style.scss']
})
export class RenderViewComponent implements OnInit, OnDestroy, AfterViewInit {

    inputData: any;

    constructor( @Inject(PLATFORM_ID) private platformId: Object,
                 private g3eService: G3eService) {

        // console.log('create new instance of RenderViewComponent ');
        this.inputData = this.g3eService.resolvedData;
    }

    ngOnInit() {
        // console.log('--> RenderViewComponent ngOnInit');
    }

    ngAfterViewInit() {
        // console.log('--> RenderViewComponent ngAfterViewInit');
    }

    ngOnDestroy() {
        // console.log('--> RenderViewComponent ngOnDestroy');
    }

}
