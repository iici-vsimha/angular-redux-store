/*-----------------------------------------------------------------------------
    Description: Main for AOT compilation

    @author:  Vikram Simha

    Created: 2/22/2017
-----------------------------------------------------------------------------*/

//-----------------------------------------------------------------------------
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

//-----------------------------------------------------------------------------