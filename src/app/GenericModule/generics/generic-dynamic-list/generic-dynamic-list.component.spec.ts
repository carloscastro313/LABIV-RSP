import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDynamicListComponent } from './generic-dynamic-list.component';

describe('GenericDynamicListComponent', () => {
  let component: GenericDynamicListComponent;
  let fixture: ComponentFixture<GenericDynamicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericDynamicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDynamicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
