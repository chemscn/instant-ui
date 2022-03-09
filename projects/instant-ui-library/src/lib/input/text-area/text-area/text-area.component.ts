import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'iu-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAreaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
