import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobManagmentComponent } from './job-managment/job-managment.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { StageEvaluationsComponent } from './stage-evaluations/stage-evaluations.component';
import { MessagingCenterComponent } from './messaging-center/messaging-center.component';
import { ProcessStageManagementComponent } from './process-stage-management/process-stage-management.component';
import { AnalyticsReportsComponent } from './analytics-reports/analytics-reports.component';
import { TalentPoolComponent } from './talent-pool/talent-pool.component';
import { TeamCollaborationComponent } from './team-collaboration/team-collaboration.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: 'job-management', component: JobManagmentComponent },
  { path: 'candidate-list', component: CandidateListComponent },
  { path: 'stage-evaluations', component: StageEvaluationsComponent },
  { path: 'messaging-center', component: MessagingCenterComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'process-stage-management', component: ProcessStageManagementComponent },
  { path: 'analytics-reports', component: AnalyticsReportsComponent },
  { path: 'talent-pool', component: TalentPoolComponent },
  { path: 'team-collaboration', component: TeamCollaborationComponent },
  { path: 'candidate-history', component: CandidateListComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecruiterModule { }
