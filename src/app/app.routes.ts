import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./app.component').then(m => m.AppComponent)
    },
    {
        path: 'auth',
        loadChildren: () => import('./components/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'product',
        canActivate: [authGuard],
        loadChildren: () => import('./components/product/product.routes').then(m => m.PRODUCT_ROUTES)
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
