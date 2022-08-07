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

  //Begin size tests
  it('given that the spinner size is not set, should have a spinner with height and width of 10px', () => {
    component.id = '1';
    fixture.detectChanges();

    component.ngOnChanges({
      size: new SimpleChange('', '', false),
    });

    expect(loadingSpinner.style.height).toBe('10px');
    expect(loadingSpinner.style.width).toBe('10px');
  });
  it('given that the spinner size is set to 50, should have spinner with height and width of 50px', () => {
    component.id = '1';
    fixture.detectChanges();

    component.ngOnChanges({
      size: new SimpleChange('', '50', true),
    });
    component.ngAfterViewInit();
    fixture.detectChanges();

    expect(loadingSpinner.style.height).toBe('50px');
    expect(loadingSpinner.style.width).toBe('50px');
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
