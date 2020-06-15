import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatermmComponent } from './calculatermm.component';

describe('CalculatermmComponent', () => {
  let component: CalculatermmComponent;
  let fixture: ComponentFixture<CalculatermmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatermmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatermmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
