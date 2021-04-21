import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggrArticleComponent } from './aggr-article.component';

describe('AggrArticleComponent', () => {
  let component: AggrArticleComponent;
  let fixture: ComponentFixture<AggrArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggrArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggrArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
