import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { MaskingDirective } from './directives/masking.directive';

@NgModule({
  declarations: [TextInputComponent, MaskingDirective],
  imports: [CommonModule, FormsModule],
  exports: [TextInputComponent],
})
export class TextInputModule {}
