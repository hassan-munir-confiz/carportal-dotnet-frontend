import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductsByBrandComponent } from './view-all-products-by-brand.component';

describe('ViewAllProductsByBrandComponent', () => {
  let component: ViewAllProductsByBrandComponent;
  let fixture: ComponentFixture<ViewAllProductsByBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllProductsByBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllProductsByBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
