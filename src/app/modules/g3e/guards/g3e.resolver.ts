import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Inject, Injectable} from '@angular/core';
import {G3eConfig} from '../g3e.config';

@Injectable()
export class G3eResolver implements Resolve<any> {
  constructor( @Inject('G3E_CONFIG') private config: G3eConfig,
               private router: Router, ) { }

  resolve(route: ActivatedRouteSnapshot) {

      const lang = route.paramMap.get('lang');
      const translationKey = route.paramMap.get('translationKey');

      if( !lang || !translationKey ) {
          this.router.navigate(['/en/example']);
      } else {

          return {
              language: lang,
              translation_key: translationKey,
          };
      }


  }
}
