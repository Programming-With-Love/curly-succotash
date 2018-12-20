import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { get } from 'lodash'

export interface StoreState {
  isSidebarVisible: boolean
}

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export type TOGGLE_SIDEBAR = typeof TOGGLE_SIDEBAR
export interface ToggleSidebar {
  type: TOGGLE_SIDEBAR
}

export const ToggleSidebar
