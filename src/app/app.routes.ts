import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    // routes for home component
    { path: '', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) },

    // // routes for bios
    // { path: 'bio', loadChildren: () => import('./bio/bio.module').then(m => m.BioModule) },
    // // routes for events
    // { path: 'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule) },
    // // routes for photos
    // { path: 'photo', loadChildren: () => import('./photo/photo.module').then(m => m.PhotoModule) },
];
