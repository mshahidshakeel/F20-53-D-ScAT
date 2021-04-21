import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggrCardComponent } from './aggr-card.component';

describe('AggrCardComponent', () => {
  let component: AggrCardComponent;
  let fixture: ComponentFixture<AggrCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggrCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggrCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
