import { InstantUiLibraryModule } from 'projects/instant-ui-library/src/lib/root/instant-ui-library.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from 'projects/instant-ui-library/src/lib/button/button.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InstantUiLibraryModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
