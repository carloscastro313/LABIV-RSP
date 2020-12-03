import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericformclassComponent } from './genericformclass.component';

describe('GenericformclassComponent', () => {
  let component: GenericformclassComponent;
  let fixture: ComponentFixture<GenericformclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericformclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericformclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
