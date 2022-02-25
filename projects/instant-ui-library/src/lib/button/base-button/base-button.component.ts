import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Mode, ModeType } from '../../shared/models/color.model';

@Component({
  selector: 'iu-button[onClick][text]',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseButtonComponent implements OnInit {
  constructor() {}
  @Input() text: string;
  @Input() title: string;
  @Input() type: 'submit' | 'reset' | 'button' = 'button';
  @Input() modeType: ModeType = 'primary';
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<null> = new EventEmitter<null>();
  mode = Mode;

  ngOnInit(): void {
    if (!this.title) {
      this.title = this.text;
    }
  }

  handleOnClick = () => {
    this.onClick.emit(null);
  };
}
