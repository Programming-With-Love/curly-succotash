// package.json
declare module '*/package.json' {
  export const version: string
  export const author: string
}

declare module '*.module.scss' {
  const content: { [className: string]: string }
  export = content
}

declare module '*.scss'
// type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
type Subtract<T, K> = Omit<T, keyof K>

declare const graphql: (query: TemplateStringsArray) => void

declare module 'ityped' {
  export interface Configuration {
    strings?: string[]
    showCursor?: boolean
    typeSpeed?: number
    backSpeed?: number
    // and more
  }

  export function init(element: Element, config: Configuration): void
}
declare module '@loadable/component'
declare module 'gitalk/dist/gitalk-component'