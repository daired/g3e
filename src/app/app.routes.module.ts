import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {G3eResolver} from './modules/g3e/guards/g3e.resolver';
import {G3eComponent} from './modules/g3e/components/g3e.component';
import {RenderViewComponent} from './modules/g3e/components/render-view/render-view.component';

// Route Configuration
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'en/example',
    },
    {
        path: ':lang/:translationKey',
        resolve: {
            resolvedData: G3eResolver,
        },
        component: G3eComponent,
        children: [
            {
                path: '',
                component: RenderViewComponent,
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'en/example',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabled',
            onSameUrlNavigation: 'reload',
        }),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
