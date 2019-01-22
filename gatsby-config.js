const config = {
  siteMetadata: {
    // 博客名
    title: `zido的个人博客`,
    short_name: `zido的个人博客`,
    start_url: `/`,
    icon: `data/avatar.jpg`,
    //博客简介
    description: `前后端全栈分享，java/js/golang`,
    siteUrl: `https://www.zido.site`,
  },
  analytics: {
    google: {
      trackingId: 'UA-120357572-1',
    },
    baidu: {
      siteId: '4b78d088162a5bab97170b43a565bb06',
    },
  },
}

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.analytics.google.trackingId,
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-baidu-analytics`,
      options: {
        // baidu analytics siteId
        siteId: config.analytics.baidu.siteId,
        // Put analytics script in the head instead of the body [default:false]
        head: false,
      },
    },
    // This plugin takes your configuration and generates a
    // web manifest file so your website can be added to your
    // homescreen on Android.
    /* eslint-disable camelcase */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteMetadata.title,
        short_name: config.siteMetadata.short_name,
        start_url: config.siteMetadata.start_url,
        background_color: `#f7f7f7`,
        theme_color: `#101012`,
        display: `standalone`,
        icon: config.siteMetadata.icon,
      },
    },
    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    // Parse all markdown files (each plugin add/parse some data into graphQL layer)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              backgroundColor: `#f7f0eb`,
            },
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              class: 'emoji-icon',
              size: 24,
              styles: {
                display: 'inline',
                margin: '0',
                position: 'relative',
                width: '25px',
              },
            },
          },
          {
            resolve: `gatsby-remark-auto-headers`,
            options: {
              attr: `data-id`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    // Parse all images files
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
      },
    },
    // Parse JSON files
    `gatsby-transformer-json`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    // `gatsby-plugin-offline`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.createdDate,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___updatedDate] },
                  filter: {frontmatter: { draft: { ne: true } }}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        createdDate(formatString: "YYYY-MM-DD")
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
  ],
}
