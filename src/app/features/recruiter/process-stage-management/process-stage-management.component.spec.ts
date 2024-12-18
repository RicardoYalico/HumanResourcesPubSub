import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessStageManagementComponent } from './process-stage-management.component';

describe('ProcessStageManagmentComponent', () => {
  let component: ProcessStageManagementComponent;
  let fixture: ComponentFixture<ProcessStageManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessStageManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessStageManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
