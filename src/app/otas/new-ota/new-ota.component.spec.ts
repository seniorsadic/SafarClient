import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOtaComponent } from './new-ota.component';

describe('NewOtaComponent', () => {
  let component: NewOtaComponent;
  let fixture: ComponentFixture<NewOtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
