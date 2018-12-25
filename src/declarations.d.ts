// package.json
declare module '*/package.json' {
  export const version: string
  export const author: string
}

declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
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
