import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {G3eModule} from './modules/g3e/g3e.module';
import {G3eConfig} from './modules/g3e/g3e.config';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
      AppRoutingModule,
      BrowserModule.withServerTransition({
        appId: 'g3e'
      }),
      G3eModule.forRoot(<G3eConfig> environment)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
