import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPriceComponent } from './products-price.component';

describe('ProductsPriceComponent', () => {
  let component: ProductsPriceComponent;
  let fixture: ComponentFixture<ProductsPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
