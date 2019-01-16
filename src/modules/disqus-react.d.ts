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
