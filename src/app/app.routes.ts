import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplicantModule } from './features/applicant/applicant.module';

export const routes: Routes = [
    {path:'', redirectTo: 'home/recruiter', pathMatch: 'full'},
    // {path:'home/recruiter', component: AppComponent},
    {path: 'home/recruiter', loadChildren: ()=> import('./features/recruiter/recruiter.module').then(m => m.RecruiterModule) }
];
