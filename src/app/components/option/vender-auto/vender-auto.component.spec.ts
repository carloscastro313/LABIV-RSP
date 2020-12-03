import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderAutoComponent } from './vender-auto.component';

describe('VenderAutoComponent', () => {
  let component: VenderAutoComponent;
  let fixture: ComponentFixture<VenderAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
