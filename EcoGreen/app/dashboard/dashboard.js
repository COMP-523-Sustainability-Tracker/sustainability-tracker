import { Frame, Application } from '@nativescript/core';

import { DashboardViewModel } from './dashboard-view-model';

export function onLoaded(args) {
  const drawerComponent = args.object
  drawerComponent.bindingContext = new DashboardViewModel()
}

export function onNavigationItemTap(args) {
  const component = args.object
  const componentRoute = component.route
  const componentTitle = component.title
  const bindingContext = component.bindingContext

  bindingContext.set('selectedPage', componentTitle)

  Frame.topmost().navigate({
    moduleName: componentRoute,
    transition: {
      name: 'fade',
    },
  })

  const drawerComponent = Application.getRootView()
  drawerComponent.closeDrawer()
}