import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;

  let loadingSpinner: HTMLDivElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingSpinnerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    component = fixture.componentInstance;
    loadingSpinner = fixture.nativeElement.querySelector(
      'div'
    ) as HTMLDivElement;
  });

  it('should create', () => {
    component.id = '1';
    fixture.detectChanges();
    component.ngOnChanges({ changes: new SimpleChange(true, true, false) });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  //Begin sizeMode tests
  it('given that the spinner size is not set, should have spinner-small class', () => {
    component.id = '1';
    fixture.detectChanges();

    component.ngOnChanges({
      size: new SimpleChange('', '', false),
    });

    expect(loadingSpinner.className).toContain('spinner--small');
  });
  it('given that the spinner size is set to small, should have spinner-small class', () => {
    component.id = '1';
    component.size = 'small';
    fixture.detectChanges();

    component.ngOnChanges({
      size: new SimpleChange('', 'small', false),
    });

    expect(loadingSpinner.className).toContain('spinner--small');
  });

  it('given that the spinner size is set to medium, should have spinner-medium class', () => {
    component.id = '1';
    component.size = 'medium';
    fixture.detectChanges();

    component.ngOnChanges({
      size: new SimpleChange('small', component.size, true),
    });

    expect(loadingSpinner.className).toContain('spinner--medium');
  });
  it('given that the spinner size is set to large, should have spinner-large class', () => {
    component.id = '1';
    component.size = 'large';
    fixture.detectChanges();

    component.ngOnChanges({
      size: new SimpleChange('small', component.size, true),
    });

    expect(loadingSpinner.className).toContain('spinner--large');
  });
  it('given that the spinner size is set to xlarge, should have spinner-xlarge class', () => {
    component.id = '1';
    component.size = 'xlarge';
    fixture.detectChanges();

    component.ngOnChanges({
      size: new SimpleChange('small', component.size, true),
    });

    expect(loadingSpinner.className).toContain('spinner--xlarge');
  });

  //Begin variant color testing
  it('given that variant is not set, should have spinner-primary class', () => {
    component.id = '1';
    fixture.detectChanges();

    component.ngOnChanges({
      changes: new SimpleChange(true, true, false),
    });

    expect(loadingSpinner.className).toContain('spinner--primary');
  });
  it('given that variant is set to primary, should have spinner-primary class', () => {
    component.id = '1';
    component.variant = 'primary';
    fixture.detectChanges();

    component.ngOnChanges({
      variant: new SimpleChange('', component.variant, true),
    });

    expect(loadingSpinner.className).toContain('spinner--primary');
  });
  it('given that variant is set to secondary, should have spinner-secondary class', () => {
    component.id = '1';
    component.variant = 'secondary';
    fixture.detectChanges();

    component.ngOnChanges({
      changes: new SimpleChange('', component.variant, true),
    });

    expect(loadingSpinner.className).toContain('spinner--secondary');
  });
  it('given that variant is set to tertiary, should have spinner-tertiary class', () => {
    component.id = '1';
    component.variant = 'tertiary';
    fixture.detectChanges();

    component.ngOnChanges({
      changes: new SimpleChange('', component.variant, true),
    });

    expect(loadingSpinner.className).toContain('spinner--tertiary');
  });
  it('given that variant is set to highlight, should have spinner-highlight class', () => {
    component.id = '1';
    component.variant = 'highlight';
    fixture.detectChanges();

    component.ngOnChanges({
      changes: new SimpleChange('', component.variant, true),
    });

    expect(loadingSpinner.className).toContain('spinner--highlight');
  });
  it('given that variant is set to disabled, should have spinner-disabled class', () => {
    component.id = '1';
    component.variant = 'disabled';
    fixture.detectChanges();

    component.ngOnChanges({
      changes: new SimpleChange('', component.variant, true),
    });

    expect(loadingSpinner.className).toContain('spinner--disabled');
  });
});
