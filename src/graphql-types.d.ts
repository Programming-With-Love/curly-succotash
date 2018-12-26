export interface MarkdownRemark extends Node {
  id: string
  parent: Node | null
  children: Array<Node> | null
  internal: internal_15 | null
  frontmatter: frontmatter_2 | null
  rawMarkdownBody: string | null
  fileAbsolutePath: string | null
  fields: fields_2 | null
  html: string | null
  htmlAst: JSON | null
  excerpt: string | null
  headings: Array<MarkdownHeading> | null
  timeToRead: number | null
  tableOfContents: string | null
  wordCount: wordCount | null
}

export interface internal_15 {
  content: string | null
  type: string | null
  contentDigest: string | null
  owner: string | null
  fieldOwners: fieldOwners_2 | null
}
export interface fieldOwners_2 {
  slug: string | null
}

export interface frontmatter_2 {
  title: string | null
  createdDate: Date | null
  updatedDate: Date | null
  tags: Array<string> | null
  image: File | null
  draft: boolean | null
  //是否是原创
  origin: boolean | null
  _PARENT: string | null
}

export interface fields_2 {
  slug: string | null
}

export interface MarkdownHeading {
  value: string | null
  depth: number | null
}

export interface wordCount {
  paragraphs: number | null
  sentences: number | null
  words: number | null
}

export interface MarkdownRemarkConnection {
  pageInfo: PageInfo
  edges: Array<MarkdownRemarkEdge> | null
  totalCount: number | null
  distinct: Array<string> | null
  group: Array<MarkdownRemarkGroupConnectionConnection> | null
}
export interface PageInfo {
  hasNextPage: boolean
}

export interface MarkdownRemarkEdge {
  node: MarkdownRemark | null
  next: MarkdownRemark | null
  previous: MarkdownRemark | null
}

export interface MarkdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo
  edges: Array<MarkdownRemarkGroupConnectionEdge> | null
  field: string | null
  fieldValue: string | null
  totalCount: number | null
}
export interface MarkdownRemarkGroupConnectionEdge {
  node: MarkdownRemark | null
  next: MarkdownRemark | null
  previous: MarkdownRemark | null
}
export interface Site extends Node {
  id: string
  parent: Node | null
  children: Array<Node> | null
  siteMetadata: siteMetadata_2 | null
  port: Date | null
  host: string | null
  pathPrefix: string | null
  polyfill: boolean | null
  buildTime: Date | null
  internal: internal_16 | null
}
export interface siteMetadata_2 {
  title: string | null
  googleVerification: string | null
  disqus: string | null
}
export interface internal_16 {
  contentDigest: string | null
  type: string | null
  owner: string | null
}
export interface ImageSharp extends Node {
  id: string
  parent: Node | null
  children: Array<Node> | null
  internal: internal_14 | null
  fixed: ImageSharpFixed | null
  resolutions: ImageSharpResolutions | null
  fluid: ImageSharpFluid | null
  sizes: ImageSharpSizes | null
  original: ImageSharpOriginal | null
  resize: ImageSharpResize | null
}

export interface internal_14 {
  contentDigest: string | null
  type: string | null
  owner: string | null
}

export interface ImageSharpFixed {
  base64: string | null
  tracedSVG: string | null
  aspectRatio: number | null
  width: number | null
  height: number | null
  src: string | null
  srcSet: string | null
  srcWebp: string | null
  srcSetWebp: string | null
  originalName: string | null
}

export interface ImageSharpResolutions {
  base64: string | null
  tracedSVG: string | null
  aspectRatio: number | null
  width: number | null
  height: number | null
  src: string | null
  srcSet: string | null
  srcWebp: string | null
  srcSetWebp: string | null
  originalName: string | null
}

export interface ImageSharpFluid {
  base64: string | null
  tracedSVG: string | null
  aspectRatio: number | null
  src: string | null
  srcSet: string | null
  srcWebp: string | null
  srcSetWebp: string | null
  sizes: string | null
  originalImg: string | null
  originalName: string | null
}

export interface ImageSharpSizes {
  base64: string | null
  tracedSVG: string | null
  aspectRatio: number | null
  src: string | null
  srcSet: string | null
  srcWebp: string | null
  srcSetWebp: string | null
  sizes: string | null
  originalImg: string | null
  originalName: string | null
}

export interface ImageSharpOriginal {
  width: number | null
  height: number | null
  src: string | null
}

export interface ImageSharpResize {
  src: string | null
  tracedSVG: string | null
  width: number | null
  height: number | null
  aspectRatio: number | null
  originalName: string | null
}

export interface DataJson extends Node {
  id: string | null
  parent: Node | null
  children: Array<Node> | null
  name: String | null
  avatar: File | null
  bio: String | null
  header: File | null
  internal: internal_13 | null
}
export interface internal_13 {
  contentDigest: string | null
  type: string | null
  owner: string | null
}

export interface File extends Node {
  id: string
  parent: Node | null
  children: Array<Node> | null
  childImageSharp: ImageSharp | null
  childMarkdownRemark: MarkdownRemark | null
  internal: internal_12 | null
  sourceInstanceName: string | null
  absolutePath: string | null
  relativePath: string | null
  extension: string | null
  size: number | null
  prettySize: string | null
  modifiedTime: Date | null
  accessTime: Date | null
  changeTime: Date | null
  birthTime: Date | null
  root: string | null
  dir: string | null
  base: string | null
  ext: string | null
  name: string | null
  relativeDirectory: string | null
  dev: number | null
  mode: number | null
  nlink: number | null
  uid: number | null
  gid: number | null
  rdev: number | null
  blksize: number | null
  ino: number | null
  blocks: number | null
  atimeMs: number | null
  mtimeMs: number | null
  ctimeMs: number | null
  birthtimeMs: number | null
  atime: Date | null
  mtime: Date | null
  ctime: Date | null
  birthtime: Date | null
  publicURL: string | null
}

export interface internal_12 {
  contentDigest: string | null
  type: string | null
  mediaType: string | null
  description: string | null
  owner: string | null
}
export interface ImageSharpFixed {
  base64: string | null
  tracedSVG: string | null
  aspectRatio: number | null
  width: number | null
  height: number | null
  src: string | null
  srcSet: string | null
  srcWebp: string | null
  srcSetWebp: string | null
  originalName: string | null
}

export interface markdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo
  edges: Array<markdownRemarkGroupConnectionEdge> | null
  field: string | null
  fieldValue: string | null
  totalCount: number | null
}
export interface markdownRemarkGroupConnectionEdge {
  node: MarkdownRemark | null
  next: MarkdownRemark | null
  previous: MarkdownRemark | null
}
