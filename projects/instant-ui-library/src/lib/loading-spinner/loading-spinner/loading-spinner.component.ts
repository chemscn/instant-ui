import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ModeType } from '../../shared/models/color.model';
import { Size, SizeMode } from '../../shared/models/size.model';
import { Mode } from './../../shared/models/color.model';

@Component({
  selector: 'iu-loading-spinner[id]',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinnerComponent implements OnChanges {
  @Input() variant: ModeType;
  @Input() size: Size;
  @Input() id: string = '';

  sizeMode = SizeMode;
  mode = Mode;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['variant']) {
      this.variant = changes['variant'].currentValue;
    }

    if (changes['size']) {
      this.size = changes['size'].currentValue;
    }
  }
}
