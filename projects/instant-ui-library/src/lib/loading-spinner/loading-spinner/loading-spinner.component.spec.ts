import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingSpinnerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.id = '1';
    fixture.detectChanges();
    component.ngOnChanges({ changes: new SimpleChange(true, true, false) });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  //Begin sizeMode tests
  it('given that the spinner size is set to medium, should have spinner-medium class', () => {
    component.id = '1';
    component.sizeMode = 'medium';
    fixture.detectChanges();

    component.ngOnChanges({
      sizeMode: new SimpleChange('small', component.sizeMode, false),
    });

    expect(component.spinnerSizeClass).toEqual('spinner-medium');
  });
  it('given that the spinner size is set to large, should have spinner-large class', () => {
    component.id = '1';
    component.sizeMode = 'large';
    fixture.detectChanges();

    component.ngOnChanges({
      sizeMode: new SimpleChange('small', component.sizeMode, false),
    });

    expect(component.spinnerSizeClass).toEqual('spinner-large');
  });
  it('given that the spinner size is set to xlarge, should have spinner-xlarge class', () => {
    component.id = '1';
    component.sizeMode = 'xlarge';
    fixture.detectChanges();

    component.ngOnChanges({
      sizeMode: new SimpleChange('small', component.sizeMode, false),
    });

    expect(component.spinnerSizeClass).toEqual('spinner-xlarge');
  });
  it('given that the spinner size is not set, should have spinner-small class', () => {
    component.id = '1';
    fixture.detectChanges();

    component.ngOnChanges({
      changes: new SimpleChange(true, true, false),
    });

    expect(component.spinnerSizeClass).toEqual('spinner-small');
  });
  it('given that the spinner size is set to small, should have spinner-small class', () => {
    component.id = '1';
    component.sizeMode = 'small';
    fixture.detectChanges();

    component.ngOnChanges({
      changes: new SimpleChange(true, true, false),
    });

    expect(component.spinnerSizeClass).toEqual('spinner-small');
  });

  //Begin variant color testing
  it('given that variant is not set, should have spinner-primary class', () => {
    component.id = '1';
    fixture.detectChanges();

    component.ngOnChanges({
      changes: new SimpleChange(true, true, false),
    });

    expect(component.spinnerColorClass).toEqual('spinner-primary');
  });
  it('given that variant is set to primary, should have spinner-primary class', () => {
    component.id = '1';
    component.variant = 'primary';
    fixture.detectChanges();

    component.ngOnChanges({
      changes: new SimpleChange(true, true, false),
    });

    expect(component.spinnerColorClass).toEqual('spinner-primary');
  });
  it('given that variant is set to secondary, should have spinner-secondary class', () => {
    component.id = '1';
    component.variant = 'secondary';
    fixture.detectChanges();

    component.ngOnChanges({
      changes: new SimpleChange(true, true, false),
    });

    expect(component.spinnerColorClass).toEqual('spinner-secondary');
  });
  it('given that variant is set to tertiary, should have spinner-tertiary class', () => {
    component.id = '1';
    component.variant = 'tertiary';
    fixture.detectChanges();

    component.ngOnChanges({
      changes: new SimpleChange(true, true, false),
    });

    expect(component.spinnerColorClass).toEqual('spinner-tertiary');
  });
  it('given that variant is set to highlight, should have spinner-highlight class', () => {
    component.id = '1';
    component.variant = 'highlight';
    fixture.detectChanges();

    component.ngOnChanges({
      changes: new SimpleChange(true, true, false),
    });

    expect(component.spinnerColorClass).toEqual('spinner-highlight');
  });
  it('given that variant is set to disabled, should have spinner-disabled class', () => {
    component.id = '1';
    component.variant = 'disabled';
    fixture.detectChanges();

    component.ngOnChanges({
      changes: new SimpleChange(true, true, false),
    });

    expect(component.spinnerColorClass).toEqual('spinner-disabled');
  });
});
