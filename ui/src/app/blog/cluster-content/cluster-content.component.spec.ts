import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterContentComponent } from './cluster-content.component';

describe('ClusterContentComponent', () => {
  let component: ClusterContentComponent;
  let fixture: ComponentFixture<ClusterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
