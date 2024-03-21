import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdvisorComponent } from './advisor/advisor.component';
import { ResearchComponent } from './research/research.component';
import { PublicationsComponent } from './publications/publications.component';
import { MembersComponent } from './members/members.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    { path: 'advisor', component: AdvisorComponent },
    { path: 'research', component: ResearchComponent },
    { path: 'publications', component: PublicationsComponent },
    { path: 'members', component: MembersComponent },
    { path: 'courses', component: CoursesComponent },
    { path: '', component: HomeComponent },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];