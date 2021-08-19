import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '@core/authentication/authentication.guard';
import { Tabs } from '@core/tabs/tabs.service';

const routes: Routes = [
  Tabs.childRoutes([
    {
      path: 'influencers',
      loadChildren: () => import('./features/influencer/influencer.module').then((m) => m.InfluencerModule),
      canActivate: [AuthenticationGuard],
    },
    {
      path: 'notes',
      loadChildren: () => import('./features/note/note.module').then((m) => m.NotePageModule),
      canActivate: [AuthenticationGuard],
    },
    { path: '**', redirectTo: '/influencers', pathMatch: 'full' },
  ]),
  {
    path: '**',
    redirectTo: '/tabs/influencers',
    pathMatch: 'full',
  },
  {
    path: 'note',
    loadChildren: () => import('./features/note/note.module').then((m) => m.NotePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
