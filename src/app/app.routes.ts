import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ui',
    pathMatch: 'full', // Ensures an exact match to redirect
},
    {
        path: 'ui',
        loadComponent: () => import('./ui/ui.component').then((m) => m.UiComponent),
      },
      {
        path: 'insert',
        loadComponent: () => import('./insert/insert.component').then((m) => m.InsertComponent),
      },
      {
        path: 'edit/:id',  // Ensure you're defining a dynamic parameter
        loadComponent: () => import('./edit/edit.component').then((m) => m.EditComponent),
      },
];
