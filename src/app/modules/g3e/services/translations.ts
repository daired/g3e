import {InjectionToken} from '@angular/core';

// import translations
import * as LANG_EN_TRANS from './locale/en.json';
import * as LANG_DE_TRANS from './locale/de.json';
import * as LANG_ES_TRANS from './locale/es_MX.json';
import * as LANG_FR_TRANS from './locale/fr.json';
import * as LANG_PT_TRANS from './locale/pt_BR.json';
import * as LANG_HI_TRANS from './locale/hi_IN.json';
import * as LANG_TE_TRANS from './locale/te_IN.json';
import * as LANG_TA_TRANS from './locale/ta_IN.json';
import * as LANG_MR_TRANS from './locale/mr.json';
import * as LANG_AR_TRANS from './locale/ar.json';
import * as LANG_KN_TRANS from './locale/kn_IN.json';
import * as LANG_UR_TRANS from './locale/ur_IN.json';
import * as LANG_PA_TRANS from './locale/pa_IN.json';
import * as LANG_ML_TRANS from './locale/ml_IN.json';
import * as LANG_BN_TRANS from './locale/bn.json';


// bundles token
export const translations = new InjectionToken<Object>('translations');

// all translations
export const dictionary = {
    ['en']: LANG_EN_TRANS,
    ['de']: LANG_DE_TRANS,
    ['es']: LANG_ES_TRANS,
    ['fr']: LANG_FR_TRANS,
    ['pt']: LANG_PT_TRANS,
    ['hi']: LANG_HI_TRANS,
    ['te']: LANG_TE_TRANS,
    ['ta']: LANG_TA_TRANS,
    ['mr']: LANG_MR_TRANS,
    ['ar']: LANG_AR_TRANS,
    ['kn']: LANG_KN_TRANS,
    ['ur']: LANG_UR_TRANS,
    ['pa']: LANG_PA_TRANS,
    ['ml']: LANG_ML_TRANS,
    ['bn']: LANG_BN_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
  { provide: translations, useValue: dictionary },
];

