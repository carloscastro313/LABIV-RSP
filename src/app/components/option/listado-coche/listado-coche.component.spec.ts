import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCocheComponent } from './listado-coche.component';

describe('ListadoCocheComponent', () => {
  let component: ListadoCocheComponent;
  let fixture: ComponentFixture<ListadoCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCocheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
