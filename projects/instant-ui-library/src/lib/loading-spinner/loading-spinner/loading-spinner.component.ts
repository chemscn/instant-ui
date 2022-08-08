import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ModeType } from '../../shared/models/color.model';
import { Mode } from './../../shared/models/color.model';

@Component({
  selector: 'iu-loading-spinner[id]',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinnerComponent implements OnChanges, AfterViewInit {
  @Input() variant: ModeType;
  @Input() size: number;
  @Input() id: string;
  @ViewChild('spinner') spinner: ElementRef;

  mode = Mode;

  ngAfterViewInit(): void  {
    const loadingSpinner = this.spinner.nativeElement as HTMLDivElement;
    let spinnerSize = 10;
    if(this.size >= 10 && this.size <= 700){
      spinnerSize = this.size;
    }
    loadingSpinner.style.setProperty('height', `${spinnerSize}px`);
    loadingSpinner.style.setProperty('width', `${spinnerSize}px`);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['variant']) {
      this.variant = changes['variant'].currentValue;
    }

    if (changes['size']) {
      this.size = changes['size'].currentValue;
    }
  }
}
