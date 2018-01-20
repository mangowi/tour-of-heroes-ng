import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MashujaaComponent } from './mashujaa.component';

describe('MashujaaComponent', () => {
  let component: MashujaaComponent;
  let fixture: ComponentFixture<MashujaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MashujaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MashujaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
