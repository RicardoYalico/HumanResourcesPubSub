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
  { path: '', redirectTo: 'job-management', pathMatch: 'full'},
  { path: 'job-management', component: JobManagmentComponent, pathMatch: 'full' },
  { path: 'candidate-list', component: CandidateListComponent, pathMatch: 'full' },
  { path: 'stage-evaluations', component: StageEvaluationsComponent, pathMatch: 'full' },
  { path: 'messaging-center', component: MessagingCenterComponent, pathMatch: 'full' },
  { path: 'notifications', component: NotificationsComponent, pathMatch: 'full' },
  { path: 'process-stage-management', component: ProcessStageManagementComponent, pathMatch: 'full' },
  { path: 'analytics-reports', component: AnalyticsReportsComponent, pathMatch: 'full' },
  { path: 'talent-pool', component: TalentPoolComponent, pathMatch: 'full' },
  { path: 'team-collaboration', component: TeamCollaborationComponent, pathMatch: 'full' },
  { path: 'candidate-history', component: CandidateListComponent, pathMatch: 'full' },
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
