import { SheetsRegistry, GenerateClassName } from 'jss'
import { createMuiTheme, createGenerateClassName, Theme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import { StylesCreator } from '@material-ui/core/styles/withStyles'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
})

export interface ThemeContext {
  theme: Theme
  sheetsManager: Map<StylesCreator, any>
  sheetsRegistry: SheetsRegistry
  generateClassName: GenerateClassName
}

function createPageContext(): ThemeContext {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  }
}

export default createPageContext()
