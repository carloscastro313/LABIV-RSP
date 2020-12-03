import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoUsuarioCocheComponent } from './listado-usuario-coche.component';

describe('ListadoUsuarioCocheComponent', () => {
  let component: ListadoUsuarioCocheComponent;
  let fixture: ComponentFixture<ListadoUsuarioCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoUsuarioCocheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoUsuarioCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
