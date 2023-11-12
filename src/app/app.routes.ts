import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./app.component').then(m => m.AppComponent)
    },
    {
        path: 'test-page',
        loadComponent: () => import('./components/test/test.component').then(m => m.TestComponent) // lazy load compoonent
    },
    {
        path: 'dynamic',
        loadChildren: () => import('./components/test/routes').then(m => m.TEST_ROUTES)
    },
    {
        path: 'page-not-found',
        loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
    },
    {
        path: '**',
        redirectTo: 'page-not-found'
    }
];
