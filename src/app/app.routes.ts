import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdvisorComponent } from './advisor/advisor.component';
import { ResearchComponent } from './research/research.component';
import { PublicationsComponent } from './publications/publications.component';
import { MembersComponent } from './members/members.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    { path: 'advisor', component: AdvisorComponent, title: 'Advisor - INHPC' },
    { path: 'research', component: ResearchComponent, title: 'Research - INHPC' },
    { path: 'publications', component: PublicationsComponent, title: 'Publications - INHPC' },
    { path: 'members', component: MembersComponent, title: 'Members - INHPC' },
    { path: 'courses', component: CoursesComponent, title: 'Courses - INHPC' },
    { path: 'courses/:id', component: CoursesComponent, title: 'Courses - INHPC' },
    { path: '', component: HomeComponent },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent, title: 'HTTP404' }
];