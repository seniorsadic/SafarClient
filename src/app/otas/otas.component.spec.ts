import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtasComponent } from './otas.component';

describe('OtasComponent', () => {
  let component: OtasComponent;
  let fixture: ComponentFixture<OtasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
