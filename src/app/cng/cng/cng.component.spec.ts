import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CngComponent } from './cng.component';

describe('CngComponent', () => {
  let component: CngComponent;
  let fixture: ComponentFixture<CngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CngComponent]
    });
    fixture = TestBed.createComponent(CngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
