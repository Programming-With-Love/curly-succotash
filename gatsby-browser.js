import React from 'react'
import wrapPageElementWithTransition from './src/helpers/wrapPageElement'
import AppProvider from './src/store/provider'
require("prismjs/themes/prism-coy.css")
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}

export const wrapPageElement = wrapPageElementWithTransition
