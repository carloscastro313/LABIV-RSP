import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCocheComponent } from './eliminar-coche.component';

describe('EliminarCocheComponent', () => {
  let component: EliminarCocheComponent;
  let fixture: ComponentFixture<EliminarCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCocheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
