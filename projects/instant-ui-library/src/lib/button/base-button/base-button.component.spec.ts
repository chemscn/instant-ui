import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseButtonComponent } from './base-button.component';

describe('BaseButtonComponent', () => {
  let component: BaseButtonComponent;
  let fixture: ComponentFixture<BaseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('given button is clicked, onClick should emit', () => {
    spyOn(component.onClick, 'emit');
    const button = fixture.nativeElement.querySelector(
      'button'
    ) as HTMLButtonElement;
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.onClick.emit).toHaveBeenCalledTimes(1);
  });

  it('given title or text is not provided, title input should equal text input', () => {
    component.text = '';
    component.title = 'Hello';
    component.ngOnChanges();
    expect(component.title).toEqual('');
  });
});
