import { InstantUiLibraryModule } from 'projects/instant-ui-library/src/lib/root/instant-ui-library.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from 'projects/instant-ui-library/src/lib/button/button.module';
import { LoadingSpinnerModule } from 'projects/instant-ui-library/src/lib/loading-spinner/loading-spinner.module';
import { TextAreaModule } from 'projects/instant-ui-library/src/lib/input/text-area/text-area.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InstantUiLibraryModule,
    ButtonModule,
    LoadingSpinnerModule,
    TextAreaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
