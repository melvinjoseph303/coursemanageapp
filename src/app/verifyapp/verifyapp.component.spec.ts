import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyappComponent } from './verifyapp.component';

describe('VerifyappComponent', () => {
  let component: VerifyappComponent;
  let fixture: ComponentFixture<VerifyappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
