import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Mode, ModeType } from '../../../shared/models/color.model';

@Component({
  selector: 'iu-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAreaComponent implements AfterViewInit {
  constructor() {}

  @Input() label: string;
  @Input() rows: number;
  @Input() name: string;
  @Input() cols: number;
  @Input() variant: ModeType = Mode.PRIMARY;
  @Input() disabled: boolean = false;
  @Input() placeholder: string;
  @Input() readonly: boolean = false;
  @Input() autofocus: boolean = false;
  @Input() id: string;
  @Input() resize: boolean = true;

  @ViewChild('textarea') textarea: ElementRef;

  mode = Mode;

  ngAfterViewInit(): void {
    const textarea = this.textarea.nativeElement as HTMLTextAreaElement;
    this.autofocus ? textarea.focus() : null;
  }
}
