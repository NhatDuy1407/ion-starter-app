import { Routes, Route } from '@angular/router';
import { AuthenticationGuard } from '../authentication/authentication.guard';
import { TabsPage } from './tabs.page';

/**
 * Provides helper methods to create routes.
 */
export class Tabs {
  /**
   * Creates routes using the shell component and authentication.
   *
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: 'tabs',
      component: TabsPage,
      children: routes,
      canActivate: [AuthenticationGuard],
    };
  }
}
