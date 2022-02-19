import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'instant-ui',
  template: `<ng-content></ng-content> `,
  styleUrls: ['../styles/_global.styles.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InstantUiLibraryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
