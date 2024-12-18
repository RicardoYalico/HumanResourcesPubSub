import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageEvaluationsComponent } from './stage-evaluations.component';

describe('StageEvaluationsComponent', () => {
  let component: StageEvaluationsComponent;
  let fixture: ComponentFixture<StageEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageEvaluationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
