import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Self,
  Optional,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MaskingType } from '../models/masking.model';

@Component({
  selector: 'iu-text-input[label]',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() id: string = 'uniqueIDGeneratorGoesHere';
  @Input() helperText: string = '';
  @Input() required: boolean;
  @Input() mask: MaskingType;
  @ViewChild('textInput') textInput: ElementRef;
  value: string | number = '';
  onChange: Function = () => {};
  onTouch: Function = () => {};
  errorMessages: Map<string, Function>;
  constructor(@Self() @Optional() private control: NgControl) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  focusOnTextField = () => {
    this.textInput.nativeElement.focus();
  };

  ngOnInit(): void {}

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }
  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }
  writeValue(value: any): void {
    if (value) return (this.value = value);
    this.value = '';
  }

  public get invalid(): boolean {
    return this.control ? this.control.invalid ?? false : false;
  }

  showError = (): boolean => {
    if (!this.control) {
      return false;
    }

    const { dirty, touched } = this.control;

    return this.invalid ? (dirty ?? false) || (touched ?? false) : false;
  };

  public get errors(): Array<string> {
    if (!this.control) {
      return [];
    }
    const { errors } = this.control;
    if (errors) {
      return Object.keys(errors).map((key) =>
        this.errorMessages.has(key)
          ? this.errorMessages.get?.(key)
          : errors[key] || key
      );
    }
    return [];
  }
}
