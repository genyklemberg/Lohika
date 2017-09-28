import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogBarComponent } from './catalog-bar.component';

describe('CatalogBarComponent', () => {
  let component: CatalogBarComponent;
  let fixture: ComponentFixture<CatalogBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
