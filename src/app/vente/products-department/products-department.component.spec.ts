import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDepartmentComponent } from './products-department.component';

describe('ProductsDepartmentComponent', () => {
  let component: ProductsDepartmentComponent;
  let fixture: ComponentFixture<ProductsDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
