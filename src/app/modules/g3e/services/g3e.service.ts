
import { Injectable, Inject } from '@angular/core';
import {G3eConfig} from '../g3e.config';
import {translations} from './translations';

@Injectable()
export class G3eService {
  private _resolvedData: any;

  constructor(@Inject('G3E_CONFIG') private config: G3eConfig,
              @Inject(translations) private _translations: any,) { }

  public setResolvedData(data: any): void {
      // console.log('resolved data:');
      // console.log(data);
      this._resolvedData = data;
  }

    public get resolvedData(): any {
        return this._resolvedData;
    }

    private translate(key: string): string {
        // private perform translate
        const translation = key;

        if ( this._translations[this._resolvedData.language] && this._translations[this._resolvedData.language][key] ) {
            return this._translations[this._resolvedData.language][key];
        }

        return translation;
    }

    public instant(key: string) {
        // call translate
        return this.translate(key);
    }
}
