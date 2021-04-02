import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniGraphComponent } from './mini-graph.component';

describe('MiniGraphComponent', () => {
  let component: MiniGraphComponent;
  let fixture: ComponentFixture<MiniGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
