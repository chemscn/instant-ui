import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MaskingType } from '../models/masking.model';

@Directive({
  selector: '[iuMasking]',
})
export class MaskingDirective {
  @Input() iuMasking: MaskingType = '';
  private currentKeyPosition = 0;
  private currentValue = '';
  constructor(private el: ElementRef) {}
  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    event.preventDefault();
  }
  @HostListener('keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    this.currentKeyPosition = this.el.nativeElement.selectionStart;
    this.transform(event);
  }
  transform = (event: KeyboardEvent) => {
    const pattern = ['(', 'xxx', '.', 'xx', ')'];
    switch (this.iuMasking) {
      case 'currency':
        event.preventDefault();
        if (
          event.key === '.' &&
          this.currentValue[this.currentKeyPosition] === '.'
        ) {
          this.setSelectionStart(1);
          return;
        }
        if (event.code === 'Backspace') {
          console.log(
            this.el.nativeElement.selectionStart,
            this.el.nativeElement.selectionEnd
          );
          if (
            this.el.nativeElement.selectionStart <
            this.el.nativeElement.selectionEnd
          ) {
            this.setInputValue('');
            return;
          }
        }
        console.log(event.key);
        // if (!/^[0-9]$/.test(event.key)) {
        // 	return;
        // }
        let value = (this.el.nativeElement as HTMLInputElement).value;
        const firstPass = value === '';
        const isNegative = event.key === '-' || value.includes(pattern[0]);
        value = value.replace(pattern[0], '').replace(pattern[4], '');
        if (isNegative && firstPass) {
          value = '0.00';
        } else if (value === '') {
          value = event.key;
        } else {
          const valueParts = [...value];
          valueParts.splice(this.currentKeyPosition - 1, 0, event.key);
          value = valueParts.join('');
        }
        value = isNegative
          ? `(${(+value).toFixed(2)})`
          : `${(+value).toFixed(2)}`;
        this.setInputValue(value);
        //	If first run through add number of spaces to place selector
        this.setSelectionStart(1);
        break;
      default:
        break;
    }
  };
  setSelectionStart = (add: number = 0) => {
    this.el.nativeElement.selectionStart = this.currentKeyPosition + add;
    this.el.nativeElement.selectionEnd = this.currentKeyPosition + add;
  };
  setInputValue = (value: string) => {
    this.currentValue = value;
    (this.el.nativeElement as HTMLInputElement).value = value;
  };
}
