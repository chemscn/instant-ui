import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaModule } from './text-area/text-area.module';
import { TextInputModule } from './text-input/text-input.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [TextAreaModule, TextInputModule],
})
export class InputModule {}
