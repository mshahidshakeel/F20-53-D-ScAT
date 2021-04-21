import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggrNewsCardComponent } from './aggr-news-card.component';

describe('AggrNewsCardComponent', () => {
  let component: AggrNewsCardComponent;
  let fixture: ComponentFixture<AggrNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggrNewsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggrNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
