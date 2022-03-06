import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from './base-button.component';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [BaseButtonComponent],
  imports: [CommonModule, LoadingSpinnerModule],
  exports: [BaseButtonComponent],
})
export class BaseButtonModule {}
