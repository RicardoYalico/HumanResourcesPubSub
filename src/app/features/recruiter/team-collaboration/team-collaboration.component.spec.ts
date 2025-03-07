import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCollaborationComponent } from './team-collaboration.component';

describe('TeamCollaborationComponent', () => {
  let component: TeamCollaborationComponent;
  let fixture: ComponentFixture<TeamCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamCollaborationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
