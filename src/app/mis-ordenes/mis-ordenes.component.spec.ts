import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisOrdenesComponent } from './mis-ordenes.component';

describe('MisOrdenesComponent', () => {
  let component: MisOrdenesComponent;
  let fixture: ComponentFixture<MisOrdenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisOrdenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
