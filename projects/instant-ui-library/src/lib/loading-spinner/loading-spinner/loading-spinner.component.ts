import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
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
  @Input() sizeMode: SizeMode;
  @Input() id: string = '';

  spinnerSizeClass: string = '';
  spinnerColorClass: string = '';
  size = Size;
  mode = Mode;

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      switch (this.sizeMode) {
        case this.size.SMALL:
          this.spinnerSizeClass = 'spinner-small';
          break;
        case this.size.MEDIUM:
          this.spinnerSizeClass = 'spinner-medium';
          break;
        case this.size.LARGE:
          this.spinnerSizeClass = 'spinner-large';
          break;
        case this.size.XLARGE:
          this.spinnerSizeClass = 'spinner-xlarge';
          break;
        default:
          this.spinnerSizeClass = 'spinner-small';
          break;
      }

      switch (this.variant) {
        case this.mode.PRIMARY:
          this.spinnerColorClass = 'spinner-primary';
          break;
        case this.mode.SECONDARY:
          this.spinnerColorClass = 'spinner-secondary';
          break;
        case this.mode.TERTIARY:
          this.spinnerColorClass = 'spinner-tertiary';
          break;
        case this.mode.HIGHLIGHT:
          this.spinnerColorClass = 'spinner-highlight';
          break;
        case this.mode.DISABLED:
          this.spinnerColorClass = 'spinner-disabled';
          break;
        default:
          this.spinnerColorClass = 'spinner-primary';
          break;
      }
    }
  }
}
