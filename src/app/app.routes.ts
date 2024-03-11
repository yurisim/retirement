import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    // routes for home component
    { path: '', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) },
    { path: 'bios', loadComponent: () => import('./bios/bios.component').then(c => c.BiosComponent) },
    { path: 'photos', loadComponent: () => import('./photos/photos.component').then(c => c.PhotosComponent) },
];
