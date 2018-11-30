import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaComprasComponent } from './bolsa-compras.component';

describe('BolsaComprasComponent', () => {
  let component: BolsaComprasComponent;
  let fixture: ComponentFixture<BolsaComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsaComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
