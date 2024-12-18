import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobManagmentComponent } from './job-managment.component';

describe('JobManagmentComponent', () => {
  let component: JobManagmentComponent;
  let fixture: ComponentFixture<JobManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobManagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
