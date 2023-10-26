import { fromObject } from '@nativescript/core'

import { SelectedPageService } from '../shared/selected-page-service'

export function DashboardViewModel() {
  const viewModel = fromObject({
    selectedPage: '',
  })

  SelectedPageService.getInstance().selectedPage$.subscribe((selectedPage) => {
    viewModel.selectedPage = selectedPage
  })

  return viewModel
}