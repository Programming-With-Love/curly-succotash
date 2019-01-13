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
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
type Subtract<T, K> = Omit<T, keyof K>
declare module 'gitment' {
  export interface GitmentOptions {
    id: string
    owner: string
    repo: string
    oauth: {
      client_id: string
      client_secret: string
    }
  }
  export default class Gitment {
    constructor(options?: GitmentOptions)
    render(node: string | Element): void
  }
}

declare const graphql: (query: TemplateStringsArray) => void

declare module 'disqus-react' {
  export class DiscussionEmbed extends React.Component<
    {
      shortname: string
      config: {
        url?: string
        identifier?: string
        title?: string
      }
    },
    {}
  > {}
}

declare module 'ityped' {
  export interface Configuration {
    strings?: string[]
    showCursor?: boolean
    typeSpeed?: number
    backSpeed?: number
    //and more
  }

  export function init(element: Element, config: Configuration): void
}
