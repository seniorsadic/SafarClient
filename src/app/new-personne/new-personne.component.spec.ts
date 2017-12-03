import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPersonneComponent } from './new-personne.component';

describe('NewPersonneComponent', () => {
  let component: NewPersonneComponent;
  let fixture: ComponentFixture<NewPersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
