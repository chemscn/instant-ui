import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Mode, ModeType } from '../../shared/models/color.model';

@Component({
  selector: 'iu-button[onClick][text]',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseButtonComponent implements OnChanges {
  constructor() {}
  @Input() text: string;
  @Input() title: string;
  @Input() type: 'submit' | 'reset' | 'button' = 'button';
  @Input() modeType: ModeType = Mode.PRIMARY;
  @Input() disabled: boolean = false;
  @Input() disabledMessage: string = '';
  @Input() redirect: string = 'www.google.com';
  @Input() loading: boolean = false;
  @Output() onClick: EventEmitter<null> = new EventEmitter<null>();
  mode = Mode;

  ngOnChanges(): void {
    if (!this.title || !this.text) {
      this.title = this.text;
    }
  }

  handleOnClick = () => {
    this.onClick.emit(null);
  };
}
