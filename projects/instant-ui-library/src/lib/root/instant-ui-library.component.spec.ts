import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantUiLibraryComponent } from './instant-ui-library.component';

describe('InstantUiLibraryComponent', () => {
  let component: InstantUiLibraryComponent;
  let fixture: ComponentFixture<InstantUiLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstantUiLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantUiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
