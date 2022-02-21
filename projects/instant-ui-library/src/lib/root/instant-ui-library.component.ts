import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'iu-root',
  template: `<ng-content></ng-content> `,
  styleUrls: ['../styles/_global.styles.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InstantUiLibraryComponent {}
