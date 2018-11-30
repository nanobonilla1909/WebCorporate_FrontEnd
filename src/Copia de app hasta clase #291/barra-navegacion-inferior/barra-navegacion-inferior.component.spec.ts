import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionInferiorComponent } from './barra-navegacion-inferior.component';

describe('BarraNavegacionInferiorComponent', () => {
  let component: BarraNavegacionInferiorComponent;
  let fixture: ComponentFixture<BarraNavegacionInferiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraNavegacionInferiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacionInferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
