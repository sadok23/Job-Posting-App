import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/auth/signup/signup.page').then((m) => m.SignupPage),
  },
  
  {
    path: 'candidate-home',
    loadComponent: () => import('./pages/home/candidate-home/candidate-home.page').then( m => m.CandidateHomePage)
  },
  {
    path: 'recruiter-home',
    loadComponent: () => import('./pages/home/recruiter-home/recruiter-home.page').then( m => m.RecruiterHomePage)
  },
  {
    path: 'add-job',
    loadComponent: () => import('./pages/jobs/add-job/add-job.page').then(m => m.AddJobPage)
  },
  {
    path: 'job/:id',
    loadComponent: () => import('./pages/jobs/job-detail/job-detail.page').then(m => m.JobDetailPage)
  },
  {
    path: 'job/:id/applications',
    loadComponent: () => import('./pages/jobs/job-applications/job-applications.page').then(m => m.JobApplicationsPage)
  },
  {
    path: 'applications',
    loadComponent: () => import('./pages/applications/applications.page').then(m => m.ApplicationsPage)
  },

  {
    path: 'flappy',
    loadComponent: () => import('./pages/flappy/flappy/flappy.page').then( m => m.FlappyPage)
  },
  {
    path: 'all-jobs-map',
    loadComponent: () => import('./pages/jobs/all-jobs-map/all-jobs-map.page').then( m => m.AllJobsMapPage)
  },
];
