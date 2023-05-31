import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import {G3eConfig} from './g3e.config';
import {G3eService} from './services/g3e.service';
import {G3eComponent} from './components/g3e.component';
import {G3eResolver} from './guards/g3e.resolver';
import {RenderViewComponent} from './components/render-view/render-view.component';
import {G3ePipe} from "./pipes/g3e.pipe";
import {TRANSLATION_PROVIDERS} from "./services/translations";

@NgModule({
    declarations: [
        G3eComponent,
        RenderViewComponent,
        G3ePipe
    ],
    exports: [
        G3ePipe
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class G3eModule {
    static forRoot(config: G3eConfig) {
        return {
            ngModule: G3eModule,
            providers: [
                G3eService,
                G3eResolver,
                TRANSLATION_PROVIDERS,
                {
                    provide: 'G3E_CONFIG',
                    useValue: config
                }
            ]
        };
    }
}
