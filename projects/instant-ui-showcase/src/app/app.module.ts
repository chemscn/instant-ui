import { InstantUiLibraryModule } from 'projects/instant-ui-library/src/lib/root/instant-ui-library.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InstantUiLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
