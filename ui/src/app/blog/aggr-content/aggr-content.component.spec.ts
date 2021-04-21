import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggrContentComponent } from './aggr-content.component';

describe('AggrContentComponent', () => {
  let component: AggrContentComponent;
  let fixture: ComponentFixture<AggrContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggrContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggrContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
