/* tslint:disable */

export interface Query {
  allSitePage: SitePageConnection | null;
  allSitePlugin: SitePluginConnection | null;
  allDirectory: DirectoryConnection | null;
  allFile: FileConnection | null;
  allImageSharp: ImageSharpConnection | null;
  allMarkdownRemark: MarkdownRemarkConnection | null;
  allDataJson: DataJsonConnection | null;
  sitePage: SitePage | null;
  sitePlugin: SitePlugin | null;
  site: Site | null;
  directory: Directory | null;
  file: File | null;
  imageSharp: ImageSharp | null;
  markdownRemark: MarkdownRemark | null;
  dataJson: DataJson | null;
}

export interface AllSitePageQueryArgs {
  skip: number | null;
  limit: number | null;
  sort: sitePageConnectionSort | null;
  filter: filterSitePage | null;
}

export interface AllSitePluginQueryArgs {
  skip: number | null;
  limit: number | null;
  sort: sitePluginConnectionSort | null;
  filter: filterSitePlugin | null;
}

export interface AllDirectoryQueryArgs {
  skip: number | null;
  limit: number | null;
  sort: directoryConnectionSort | null;
  filter: filterDirectory | null;
}

export interface AllFileQueryArgs {
  skip: number | null;
  limit: number | null;
  sort: fileConnectionSort | null;
  filter: filterFile | null;
}

export interface AllImageSharpQueryArgs {
  skip: number | null;
  limit: number | null;
  sort: imageSharpConnectionSort | null;
  filter: filterImageSharp | null;
}

export interface AllMarkdownRemarkQueryArgs {
  skip: number | null;
  limit: number | null;
  sort: markdownRemarkConnectionSort | null;
  filter: filterMarkdownRemark | null;
}

export interface AllDataJsonQueryArgs {
  skip: number | null;
  limit: number | null;
  sort: dataJsonConnectionSort | null;
  filter: filterDataJson | null;
}

export interface SitePageQueryArgs {
  jsonName: sitePageJsonNameQueryString | null;
  internalComponentName: sitePageInternalComponentNameQueryString | null;
  path: sitePagePathQueryString_2 | null;
  component: sitePageComponentQueryString | null;
  componentChunkName: sitePageComponentChunkNameQueryString | null;
  context: sitePageContextInputObject | null;
  pluginCreator: sitePagePluginCreatorInputObject | null;
  pluginCreatorId: sitePagePluginCreatorIdQueryString_2 | null;
  componentPath: sitePageComponentPathQueryString | null;
  id: sitePageIdQueryString_2 | null;
  internal: sitePageInternalInputObject_2 | null;
}

export interface SitePluginQueryArgs {
  resolve: sitePluginResolveQueryString_2 | null;
  id: sitePluginIdQueryString_2 | null;
  name: sitePluginNameQueryString_2 | null;
  version: sitePluginVersionQueryString_2 | null;
  pluginOptions: sitePluginPluginOptionsInputObject_2 | null;
  nodeAPIs: sitePluginNodeApIsQueryList_2 | null;
  browserAPIs: sitePluginBrowserApIsQueryList_2 | null;
  ssrAPIs: sitePluginSsrApIsQueryList_2 | null;
  pluginFilepath: sitePluginPluginFilepathQueryString_2 | null;
  packageJson: sitePluginPackageJsonInputObject_2 | null;
  internal: sitePluginInternalInputObject_2 | null;
}

export interface SiteQueryArgs {
  siteMetadata: siteSiteMetadataInputObject_2 | null;
  port: sitePortQueryString_2 | null;
  host: siteHostQueryString_2 | null;
  pathPrefix: sitePathPrefixQueryString_2 | null;
  polyfill: sitePolyfillQueryBoolean_2 | null;
  buildTime: siteBuildTimeQueryString_2 | null;
  id: siteIdQueryString_2 | null;
  internal: siteInternalInputObject_2 | null;
}

export interface DirectoryQueryArgs {
  id: directoryIdQueryString_2 | null;
  internal: directoryInternalInputObject_2 | null;
  sourceInstanceName: directorySourceInstanceNameQueryString_2 | null;
  absolutePath: directoryAbsolutePathQueryString_2 | null;
  relativePath: directoryRelativePathQueryString_2 | null;
  extension: directoryExtensionQueryString_2 | null;
  size: directorySizeQueryInteger_2 | null;
  prettySize: directoryPrettySizeQueryString_2 | null;
  modifiedTime: directoryModifiedTimeQueryString_2 | null;
  accessTime: directoryAccessTimeQueryString_2 | null;
  changeTime: directoryChangeTimeQueryString_2 | null;
  birthTime: directoryBirthTimeQueryString_2 | null;
  root: directoryRootQueryString_2 | null;
  dir: directoryDirQueryString_2 | null;
  base: directoryBaseQueryString_2 | null;
  ext: directoryExtQueryString_2 | null;
  name: directoryNameQueryString_2 | null;
  relativeDirectory: directoryRelativeDirectoryQueryString_2 | null;
  dev: directoryDevQueryInteger_2 | null;
  mode: directoryModeQueryInteger_2 | null;
  nlink: directoryNlinkQueryInteger_2 | null;
  uid: directoryUidQueryInteger_2 | null;
  gid: directoryGidQueryInteger_2 | null;
  rdev: directoryRdevQueryInteger_2 | null;
  blksize: directoryBlksizeQueryInteger_2 | null;
  ino: directoryInoQueryInteger_2 | null;
  blocks: directoryBlocksQueryInteger_2 | null;
  atimeMs: directoryAtimeMsQueryFloat_2 | null;
  mtimeMs: directoryMtimeMsQueryFloat_2 | null;
  ctimeMs: directoryCtimeMsQueryFloat_2 | null;
  birthtimeMs: directoryBirthtimeMsQueryFloat_2 | null;
  atime: directoryAtimeQueryString_2 | null;
  mtime: directoryMtimeQueryString_2 | null;
  ctime: directoryCtimeQueryString_2 | null;
  birthtime: directoryBirthtimeQueryString_2 | null;
}

export interface FileQueryArgs {
  id: fileIdQueryString_2 | null;
  internal: fileInternalInputObject_2 | null;
  sourceInstanceName: fileSourceInstanceNameQueryString_2 | null;
  absolutePath: fileAbsolutePathQueryString_2 | null;
  relativePath: fileRelativePathQueryString_2 | null;
  extension: fileExtensionQueryString_2 | null;
  size: fileSizeQueryInteger_2 | null;
  prettySize: filePrettySizeQueryString_2 | null;
  modifiedTime: fileModifiedTimeQueryString_2 | null;
  accessTime: fileAccessTimeQueryString_2 | null;
  changeTime: fileChangeTimeQueryString_2 | null;
  birthTime: fileBirthTimeQueryString_2 | null;
  root: fileRootQueryString_2 | null;
  dir: fileDirQueryString_2 | null;
  base: fileBaseQueryString_2 | null;
  ext: fileExtQueryString_2 | null;
  name: fileNameQueryString_2 | null;
  relativeDirectory: fileRelativeDirectoryQueryString_2 | null;
  dev: fileDevQueryInteger_2 | null;
  mode: fileModeQueryInteger_2 | null;
  nlink: fileNlinkQueryInteger_2 | null;
  uid: fileUidQueryInteger_2 | null;
  gid: fileGidQueryInteger_2 | null;
  rdev: fileRdevQueryInteger_2 | null;
  blksize: fileBlksizeQueryInteger_2 | null;
  ino: fileInoQueryInteger_2 | null;
  blocks: fileBlocksQueryInteger_2 | null;
  atimeMs: fileAtimeMsQueryFloat_2 | null;
  mtimeMs: fileMtimeMsQueryFloat_2 | null;
  ctimeMs: fileCtimeMsQueryFloat_2 | null;
  birthtimeMs: fileBirthtimeMsQueryFloat_2 | null;
  atime: fileAtimeQueryString_2 | null;
  mtime: fileMtimeQueryString_2 | null;
  ctime: fileCtimeQueryString_2 | null;
  birthtime: fileBirthtimeQueryString_2 | null;
  publicURL: publicUrlQueryString_3 | null;
}

export interface ImageSharpQueryArgs {
  id: imageSharpIdQueryString_2 | null;
  internal: imageSharpInternalInputObject_2 | null;
  fixed: fixedTypeName_3 | null;
  resolutions: resolutionsTypeName_3 | null;
  fluid: fluidTypeName_3 | null;
  sizes: sizesTypeName_3 | null;
  original: originalTypeName_3 | null;
  resize: resizeTypeName_3 | null;
}

export interface MarkdownRemarkQueryArgs {
  id: markdownRemarkIdQueryString_2 | null;
  internal: markdownRemarkInternalInputObject_2 | null;
  frontmatter: markdownRemarkFrontmatterInputObject_2 | null;
  rawMarkdownBody: markdownRemarkRawMarkdownBodyQueryString_2 | null;
  fileAbsolutePath: markdownRemarkFileAbsolutePathQueryString_2 | null;
  fields: markdownRemarkFieldsInputObject_2 | null;
  html: htmlQueryString_3 | null;
  excerpt: excerptQueryString_3 | null;
  headings: headingsQueryList_3 | null;
  timeToRead: timeToReadQueryInt_3 | null;
  tableOfContents: tableOfContentsQueryString_3 | null;
  wordCount: wordCountTypeName_3 | null;
}

export interface DataJsonQueryArgs {
  author: dataJsonAuthorInputObject_2 | null;
  speech: dataJsonSpeechQueryList_2 | null;
  gitment: dataJsonGitmentInputObject_2 | null;
  id: dataJsonIdQueryString_2 | null;
  internal: dataJsonInternalInputObject_2 | null;
}

export interface sitePageConnectionSort {
  fields: Array<SitePageConnectionSortByFieldsEnum>;
  order: sitePageConnectionSortOrderValues | null;
}

export type SitePageConnectionSortByFieldsEnum = "jsonName" | "internalComponentName" | "path" | "component" | "componentChunkName" | "context___headers____about_" | "context___headers____blog_2018_05_02__article_1_" | "context___headers____blog_2018_05_02__article_2_" | "context___headers____blog_2018_04_18__welcoming_" | "context___slug" | "context___header___children" | "context___tag" | "context___skip" | "context___archives" | "context___totalCount" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___description" | "internal___owner";

export type sitePageConnectionSortOrderValues = "ASC" | "DESC";

export interface filterSitePage {
  jsonName: sitePageConnectionJsonNameQueryString | null;
  internalComponentName: sitePageConnectionInternalComponentNameQueryString | null;
  path: sitePageConnectionPathQueryString_2 | null;
  component: sitePageConnectionComponentQueryString | null;
  componentChunkName: sitePageConnectionComponentChunkNameQueryString | null;
  context: sitePageConnectionContextInputObject | null;
  pluginCreator: sitePageConnectionPluginCreatorInputObject | null;
  pluginCreatorId: sitePageConnectionPluginCreatorIdQueryString_2 | null;
  componentPath: sitePageConnectionComponentPathQueryString | null;
  id: sitePageConnectionIdQueryString_2 | null;
  internal: sitePageConnectionInternalInputObject_2 | null;
}

export interface sitePageConnectionJsonNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionInternalComponentNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionComponentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionComponentChunkNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextInputObject {
  headers: sitePageConnectionContextHeadersInputObject | null;
  slug: sitePageConnectionContextSlugQueryString | null;
  header: sitePageConnectionContextHeaderInputObject | null;
  tag: sitePageConnectionContextTagQueryString | null;
  skip: sitePageConnectionContextSkipQueryInteger | null;
  archives: sitePageConnectionContextArchivesQueryList | null;
  totalCount: sitePageConnectionContextTotalCountQueryInteger | null;
}

export interface sitePageConnectionContextHeadersInputObject {
  _about_: sitePageConnectionContextHeadersAboutInputObject | null;
  _blog_2018_05_02__article_1_: sitePageConnectionContextHeadersBlog20180502Article1InputObject | null;
  _blog_2018_05_02__article_2_: sitePageConnectionContextHeadersBlog20180502Article2InputObject | null;
  _blog_2018_04_18__welcoming_: sitePageConnectionContextHeadersBlog20180418WelcomingInputObject | null;
}

export interface sitePageConnectionContextHeadersAboutInputObject {
  children: sitePageConnectionContextHeadersAboutChildrenQueryList | null;
}

export interface sitePageConnectionContextHeadersAboutChildrenQueryList {
  elemMatch: sitePageConnectionContextHeadersAboutChildrenInputObject | null;
}

export interface sitePageConnectionContextHeadersAboutChildrenInputObject {
  fixed: sitePageConnectionContextHeadersAboutChildrenFixedInputObject | null;
}

export interface sitePageConnectionContextHeadersAboutChildrenFixedInputObject {
  src: sitePageConnectionContextHeadersAboutChildrenFixedSrcQueryString | null;
  srcSet: sitePageConnectionContextHeadersAboutChildrenFixedSrcSetQueryString | null;
}

export interface sitePageConnectionContextHeadersAboutChildrenFixedSrcQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextHeadersAboutChildrenFixedSrcSetQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextHeadersBlog20180502Article1InputObject {
  children: sitePageConnectionContextHeadersBlog20180502Article1ChildrenQueryList | null;
}

export interface sitePageConnectionContextHeadersBlog20180502Article1ChildrenQueryList {
  elemMatch: sitePageConnectionContextHeadersBlog20180502Article1ChildrenInputObject | null;
}

export interface sitePageConnectionContextHeadersBlog20180502Article1ChildrenInputObject {
  fixed: sitePageConnectionContextHeadersBlog20180502Article1ChildrenFixedInputObject | null;
}

export interface sitePageConnectionContextHeadersBlog20180502Article1ChildrenFixedInputObject {
  src: sitePageConnectionContextHeadersBlog20180502Article1ChildrenFixedSrcQueryString | null;
  srcSet: sitePageConnectionContextHeadersBlog20180502Article1ChildrenFixedSrcSetQueryString | null;
}

export interface sitePageConnectionContextHeadersBlog20180502Article1ChildrenFixedSrcQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextHeadersBlog20180502Article1ChildrenFixedSrcSetQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextHeadersBlog20180502Article2InputObject {
  children: sitePageConnectionContextHeadersBlog20180502Article2ChildrenQueryList | null;
}

export interface sitePageConnectionContextHeadersBlog20180502Article2ChildrenQueryList {
  elemMatch: sitePageConnectionContextHeadersBlog20180502Article2ChildrenInputObject | null;
}

export interface sitePageConnectionContextHeadersBlog20180502Article2ChildrenInputObject {
  fixed: sitePageConnectionContextHeadersBlog20180502Article2ChildrenFixedInputObject | null;
}

export interface sitePageConnectionContextHeadersBlog20180502Article2ChildrenFixedInputObject {
  src: sitePageConnectionContextHeadersBlog20180502Article2ChildrenFixedSrcQueryString | null;
  srcSet: sitePageConnectionContextHeadersBlog20180502Article2ChildrenFixedSrcSetQueryString | null;
}

export interface sitePageConnectionContextHeadersBlog20180502Article2ChildrenFixedSrcQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextHeadersBlog20180502Article2ChildrenFixedSrcSetQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextHeadersBlog20180418WelcomingInputObject {
  children: sitePageConnectionContextHeadersBlog20180418WelcomingChildrenQueryList | null;
}

export interface sitePageConnectionContextHeadersBlog20180418WelcomingChildrenQueryList {
  elemMatch: sitePageConnectionContextHeadersBlog20180418WelcomingChildrenInputObject | null;
}

export interface sitePageConnectionContextHeadersBlog20180418WelcomingChildrenInputObject {
  fixed: sitePageConnectionContextHeadersBlog20180418WelcomingChildrenFixedInputObject | null;
}

export interface sitePageConnectionContextHeadersBlog20180418WelcomingChildrenFixedInputObject {
  src: sitePageConnectionContextHeadersBlog20180418WelcomingChildrenFixedSrcQueryString | null;
  srcSet: sitePageConnectionContextHeadersBlog20180418WelcomingChildrenFixedSrcSetQueryString | null;
}

export interface sitePageConnectionContextHeadersBlog20180418WelcomingChildrenFixedSrcQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextHeadersBlog20180418WelcomingChildrenFixedSrcSetQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextSlugQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextHeaderInputObject {
  children: sitePageConnectionContextHeaderChildrenQueryList | null;
}

export interface sitePageConnectionContextHeaderChildrenQueryList {
  elemMatch: sitePageConnectionContextHeaderChildrenInputObject | null;
}

export interface sitePageConnectionContextHeaderChildrenInputObject {
  fixed: sitePageConnectionContextHeaderChildrenFixedInputObject | null;
}

export interface sitePageConnectionContextHeaderChildrenFixedInputObject {
  src: sitePageConnectionContextHeaderChildrenFixedSrcQueryString | null;
  srcSet: sitePageConnectionContextHeaderChildrenFixedSrcSetQueryString | null;
}

export interface sitePageConnectionContextHeaderChildrenFixedSrcQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextHeaderChildrenFixedSrcSetQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextTagQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextSkipQueryInteger {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePageConnectionContextArchivesQueryList {
  elemMatch: sitePageConnectionContextArchivesInputObject | null;
}

export interface sitePageConnectionContextArchivesInputObject {
  year: sitePageConnectionContextArchivesYearQueryString | null;
  posts: sitePageConnectionContextArchivesPostsQueryList | null;
}

export interface sitePageConnectionContextArchivesYearQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextArchivesPostsQueryList {
  elemMatch: sitePageConnectionContextArchivesPostsInputObject | null;
}

export interface sitePageConnectionContextArchivesPostsInputObject {
  fields: sitePageConnectionContextArchivesPostsFieldsInputObject | null;
  frontmatter: sitePageConnectionContextArchivesPostsFrontmatterInputObject | null;
}

export interface sitePageConnectionContextArchivesPostsFieldsInputObject {
  slug: sitePageConnectionContextArchivesPostsFieldsSlugQueryString | null;
}

export interface sitePageConnectionContextArchivesPostsFieldsSlugQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextArchivesPostsFrontmatterInputObject {
  title: sitePageConnectionContextArchivesPostsFrontmatterTitleQueryString | null;
  tags: sitePageConnectionContextArchivesPostsFrontmatterTagsQueryList | null;
  createdDate: sitePageConnectionContextArchivesPostsFrontmatterCreatedDateQueryString | null;
  image: sitePageConnectionContextArchivesPostsFrontmatterImageInputObject | null;
}

export interface sitePageConnectionContextArchivesPostsFrontmatterTitleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextArchivesPostsFrontmatterTagsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextArchivesPostsFrontmatterCreatedDateQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextArchivesPostsFrontmatterImageInputObject {
  children: sitePageConnectionContextArchivesPostsFrontmatterImageChildrenQueryList | null;
}

export interface sitePageConnectionContextArchivesPostsFrontmatterImageChildrenQueryList {
  elemMatch: sitePageConnectionContextArchivesPostsFrontmatterImageChildrenInputObject | null;
}

export interface sitePageConnectionContextArchivesPostsFrontmatterImageChildrenInputObject {
  fixed: sitePageConnectionContextArchivesPostsFrontmatterImageChildrenFixedInputObject | null;
}

export interface sitePageConnectionContextArchivesPostsFrontmatterImageChildrenFixedInputObject {
  src: sitePageConnectionContextArchivesPostsFrontmatterImageChildrenFixedSrcQueryString | null;
  srcSet: sitePageConnectionContextArchivesPostsFrontmatterImageChildrenFixedSrcSetQueryString | null;
}

export interface sitePageConnectionContextArchivesPostsFrontmatterImageChildrenFixedSrcQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextArchivesPostsFrontmatterImageChildrenFixedSrcSetQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionContextTotalCountQueryInteger {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePageConnectionPluginCreatorInputObject {
  resolve: sitePageConnectionPluginCreatorResolveQueryString | null;
  id: sitePageConnectionPluginCreatorIdQueryString | null;
  name: sitePageConnectionPluginCreatorNameQueryString | null;
  version: sitePageConnectionPluginCreatorVersionQueryString | null;
  pluginOptions: sitePageConnectionPluginCreatorPluginOptionsInputObject | null;
  nodeAPIs: sitePageConnectionPluginCreatorNodeApIsQueryList | null;
  browserAPIs: sitePageConnectionPluginCreatorBrowserApIsQueryList | null;
  ssrAPIs: sitePageConnectionPluginCreatorSsrApIsQueryList | null;
  pluginFilepath: sitePageConnectionPluginCreatorPluginFilepathQueryString | null;
  packageJson: sitePageConnectionPluginCreatorPackageJsonInputObject | null;
  parent: sitePageConnectionPluginCreatorParentQueryString | null;
  internal: sitePageConnectionPluginCreatorInternalInputObject | null;
}

export interface sitePageConnectionPluginCreatorResolveQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorVersionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsInputObject {
  plugins: sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList | null;
  pathToConfigModule: sitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString | null;
  trackingId: sitePageConnectionPluginCreatorPluginOptionsTrackingIdQueryString | null;
  head: sitePageConnectionPluginCreatorPluginOptionsHeadQueryBoolean | null;
  siteId: sitePageConnectionPluginCreatorPluginOptionsSiteIdQueryString | null;
  name: sitePageConnectionPluginCreatorPluginOptionsNameQueryString | null;
  short_name: sitePageConnectionPluginCreatorPluginOptionsShortNameQueryString | null;
  start_url: sitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString | null;
  background_color: sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString | null;
  theme_color: sitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString | null;
  display: sitePageConnectionPluginCreatorPluginOptionsDisplayQueryString | null;
  icon: sitePageConnectionPluginCreatorPluginOptionsIconQueryString | null;
  path: sitePageConnectionPluginCreatorPluginOptionsPathQueryString | null;
  maxWidth: sitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger | null;
  backgroundColor: sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString_2 | null;
  wrapperStyle: sitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString | null;
  linkImagesToOriginal: sitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  showCaptions: sitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean | null;
  pathPrefix: sitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString | null;
  withWebp: sitePageConnectionPluginCreatorPluginOptionsWithWebpQueryBoolean | null;
  active: sitePageConnectionPluginCreatorPluginOptionsActiveQueryBoolean | null;
  class: sitePageConnectionPluginCreatorPluginOptionsClassQueryString | null;
  size: sitePageConnectionPluginCreatorPluginOptionsSizeQueryInteger | null;
  styles: sitePageConnectionPluginCreatorPluginOptionsStylesInputObject | null;
  attr: sitePageConnectionPluginCreatorPluginOptionsAttrQueryString | null;
  ignoreFileExtensions: sitePageConnectionPluginCreatorPluginOptionsIgnoreFileExtensionsQueryList | null;
  useMozJpeg: sitePageConnectionPluginCreatorPluginOptionsUseMozJpegQueryBoolean | null;
  stripMetadata: sitePageConnectionPluginCreatorPluginOptionsStripMetadataQueryBoolean | null;
  query: sitePageConnectionPluginCreatorPluginOptionsQueryQueryString | null;
  feeds: sitePageConnectionPluginCreatorPluginOptionsFeedsQueryList | null;
  pathCheck: sitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
  elemMatch: sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
  resolve: sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString | null;
  id: sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString | null;
  name: sitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString | null;
  version: sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString | null;
  pluginOptions: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;
  browserAPIs: sitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList | null;
  ssrAPIs: sitePageConnectionPluginCreatorPluginOptionsPluginsSsrApIsQueryList | null;
  pluginFilepath: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  maxWidth: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
  backgroundColor: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;
  wrapperStyle: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
  linkImagesToOriginal: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  showCaptions: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean | null;
  pathPrefix: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
  withWebp: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean | null;
  active: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsActiveQueryBoolean | null;
  class: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsClassQueryString | null;
  size: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsSizeQueryInteger | null;
  styles: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsStylesInputObject | null;
  attr: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsAttrQueryString | null;
  ignoreFileExtensions: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsActiveQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsClassQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsSizeQueryInteger {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsStylesInputObject {
  display: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsStylesDisplayQueryString | null;
  margin: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsStylesMarginQueryString | null;
  position: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsStylesPositionQueryString | null;
  width: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsStylesWidthQueryString | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsStylesDisplayQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsStylesMarginQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsStylesPositionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsStylesWidthQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsAttrQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsSsrApIsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsTrackingIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsHeadQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsSiteIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsShortNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIconQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsWithWebpQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsActiveQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsClassQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsSizeQueryInteger {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsStylesInputObject {
  display: sitePageConnectionPluginCreatorPluginOptionsStylesDisplayQueryString | null;
  margin: sitePageConnectionPluginCreatorPluginOptionsStylesMarginQueryString | null;
  position: sitePageConnectionPluginCreatorPluginOptionsStylesPositionQueryString | null;
  width: sitePageConnectionPluginCreatorPluginOptionsStylesWidthQueryString | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsStylesDisplayQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsStylesMarginQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsStylesPositionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsStylesWidthQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsAttrQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIgnoreFileExtensionsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsUseMozJpegQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsStripMetadataQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsQueryQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsFeedsQueryList {
  elemMatch: sitePageConnectionPluginCreatorPluginOptionsFeedsInputObject | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsFeedsInputObject {
  query: sitePageConnectionPluginCreatorPluginOptionsFeedsQueryQueryString | null;
  output: sitePageConnectionPluginCreatorPluginOptionsFeedsOutputQueryString | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsFeedsQueryQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsFeedsOutputQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePageConnectionPluginCreatorNodeApIsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorSsrApIsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonInputObject {
  name: sitePageConnectionPluginCreatorPackageJsonNameQueryString | null;
  description: sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null;
  version: sitePageConnectionPluginCreatorPackageJsonVersionQueryString | null;
  main: sitePageConnectionPluginCreatorPackageJsonMainQueryString | null;
  license: sitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null;
  dependencies: sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies: sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords: sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch: sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name: sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null;
  version: sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch: sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name: sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version: sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorParentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorInternalInputObject {
  contentDigest: sitePageConnectionPluginCreatorInternalContentDigestQueryString | null;
  type: sitePageConnectionPluginCreatorInternalTypeQueryString | null;
  owner: sitePageConnectionPluginCreatorInternalOwnerQueryString | null;
}

export interface sitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorInternalTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionComponentPathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionInternalInputObject_2 {
  type: sitePageConnectionInternalTypeQueryString_2 | null;
  contentDigest: sitePageConnectionInternalContentDigestQueryString_2 | null;
  description: sitePageConnectionInternalDescriptionQueryString | null;
  owner: sitePageConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePageConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionInternalDescriptionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface SitePageConnection {
  pageInfo: PageInfo;
  edges: Array<SitePageEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<sitePageGroupConnectionConnection> | null;
}

export interface DistinctSitePageConnectionArgs {
  field: sitePageDistinctEnum | null;
}

export interface GroupSitePageConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: sitePageGroupEnum | null;
}

export interface PageInfo {
  hasNextPage: boolean;
}

export interface SitePageEdge {
  node: SitePage | null;
  next: SitePage | null;
  previous: SitePage | null;
}

export interface SitePage extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  jsonName: string | null;
  internalComponentName: string | null;
  path: string | null;
  component: string | null;
  componentChunkName: string | null;
  context: context | null;
  pluginCreator: SitePlugin | null;
  pluginCreatorId: string | null;
  componentPath: string | null;
  internal: internal_9 | null;
}

export interface Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
}

export interface context {
  headers: headers | null;
  slug: string | null;
  header: header | null;
  tag: string | null;
  skip: number | null;
  archives: Array<archives> | null;
  totalCount: number | null;
}

export interface headers {
  _about_: about | null;
  _blog_2018_05_02__article_1_: blog20180502Article1 | null;
  _blog_2018_05_02__article_2_: blog20180502Article2 | null;
  _blog_2018_04_18__welcoming_: blog20180418Welcoming | null;
}

export interface about {
  children: Array<children> | null;
}

export interface children {
  fixed: fixed | null;
}

export interface fixed {
  src: string | null;
  srcSet: string | null;
}

export interface blog20180502Article1 {
  children: Array<children_2> | null;
}

export interface children_2 {
  fixed: fixed_2 | null;
}

export interface fixed_2 {
  src: string | null;
  srcSet: string | null;
}

export interface blog20180502Article2 {
  children: Array<children_3> | null;
}

export interface children_3 {
  fixed: fixed_3 | null;
}

export interface fixed_3 {
  src: string | null;
  srcSet: string | null;
}

export interface blog20180418Welcoming {
  children: Array<children_4> | null;
}

export interface children_4 {
  fixed: fixed_4 | null;
}

export interface fixed_4 {
  src: string | null;
  srcSet: string | null;
}

export interface header {
  children: Array<children_5> | null;
}

export interface children_5 {
  fixed: fixed_5 | null;
}

export interface fixed_5 {
  src: string | null;
  srcSet: string | null;
}

export interface archives {
  year: Date | null;
  posts: Array<posts> | null;
}

export interface YeararchivesArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export type Date = any;

export interface posts {
  fields: fields_2 | null;
  frontmatter: frontmatter_2 | null;
}

export interface fields_2 {
  slug: string | null;
}

export interface frontmatter_2 {
  title: string | null;
  tags: Array<string> | null;
  createdDate: Date | null;
  image: image | null;
}

export interface CreatedDatefrontmatter_2Args {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface image {
  children: Array<children_6> | null;
}

export interface children_6 {
  fixed: fixed_6 | null;
}

export interface fixed_6 {
  src: string | null;
  srcSet: string | null;
}

export interface SitePlugin extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  resolve: string | null;
  name: string | null;
  version: string | null;
  pluginOptions: pluginOptions_3 | null;
  nodeAPIs: Array<string> | null;
  browserAPIs: Array<string> | null;
  ssrAPIs: Array<string> | null;
  pluginFilepath: string | null;
  packageJson: packageJson_2 | null;
  internal: internal_10 | null;
}

export interface pluginOptions_3 {
  plugins: Array<plugins_2> | null;
  pathToConfigModule: string | null;
  trackingId: string | null;
  head: boolean | null;
  siteId: string | null;
  name: string | null;
  short_name: string | null;
  start_url: string | null;
  background_color: string | null;
  theme_color: string | null;
  display: string | null;
  icon: string | null;
  path: string | null;
  maxWidth: number | null;
  backgroundColor: string | null;
  wrapperStyle: string | null;
  linkImagesToOriginal: boolean | null;
  showCaptions: boolean | null;
  pathPrefix: string | null;
  withWebp: boolean | null;
  active: boolean | null;
  class: string | null;
  size: number | null;
  styles: styles_4 | null;
  attr: string | null;
  ignoreFileExtensions: Array<string> | null;
  useMozJpeg: boolean | null;
  stripMetadata: boolean | null;
  query: string | null;
  feeds: Array<feeds_2> | null;
  pathCheck: boolean | null;
}

export interface plugins_2 {
  resolve: string | null;
  id: string | null;
  name: string | null;
  version: string | null;
  pluginOptions: pluginOptions_4 | null;
  browserAPIs: Array<string> | null;
  ssrAPIs: Array<string> | null;
  pluginFilepath: string | null;
}

export interface pluginOptions_4 {
  maxWidth: number | null;
  backgroundColor: string | null;
  wrapperStyle: string | null;
  linkImagesToOriginal: boolean | null;
  showCaptions: boolean | null;
  pathPrefix: string | null;
  withWebp: boolean | null;
  active: boolean | null;
  class: string | null;
  size: number | null;
  styles: styles_3 | null;
  attr: string | null;
  ignoreFileExtensions: Array<string> | null;
}

export interface styles_3 {
  display: string | null;
  margin: string | null;
  position: string | null;
  width: string | null;
}

export interface styles_4 {
  display: string | null;
  margin: string | null;
  position: string | null;
  width: string | null;
}

export interface feeds_2 {
  query: string | null;
  output: string | null;
}

export interface packageJson_2 {
  name: string | null;
  description: string | null;
  version: string | null;
  main: string | null;
  license: string | null;
  dependencies: Array<dependencies_2> | null;
  devDependencies: Array<devDependencies_2> | null;
  peerDependencies: Array<peerDependencies_2> | null;
  keywords: Array<string> | null;
}

export interface dependencies_2 {
  name: string | null;
  version: string | null;
}

export interface devDependencies_2 {
  name: string | null;
  version: string | null;
}

export interface peerDependencies_2 {
  name: string | null;
  version: string | null;
}

export interface internal_10 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface internal_9 {
  type: string | null;
  contentDigest: string | null;
  description: string | null;
  owner: string | null;
}

export type sitePageDistinctEnum = "jsonName" | "internalComponentName" | "path" | "component" | "componentChunkName" | "context___headers____about_" | "context___headers____blog_2018_05_02__article_1_" | "context___headers____blog_2018_05_02__article_2_" | "context___headers____blog_2018_04_18__welcoming_" | "context___slug" | "context___header___children" | "context___tag" | "context___skip" | "context___archives" | "context___totalCount" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___description" | "internal___owner";

export type sitePageGroupEnum = "jsonName" | "internalComponentName" | "path" | "component" | "componentChunkName" | "context___headers____about_" | "context___headers____blog_2018_05_02__article_1_" | "context___headers____blog_2018_05_02__article_2_" | "context___headers____blog_2018_04_18__welcoming_" | "context___slug" | "context___header___children" | "context___tag" | "context___skip" | "context___archives" | "context___totalCount" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___description" | "internal___owner";

export interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<sitePageGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface sitePageGroupConnectionEdge {
  node: SitePage | null;
  next: SitePage | null;
  previous: SitePage | null;
}

export interface sitePluginConnectionSort {
  fields: Array<SitePluginConnectionSortByFieldsEnum>;
  order: sitePluginConnectionSortOrderValues | null;
}

export type SitePluginConnectionSortByFieldsEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___pathToConfigModule" | "pluginOptions___trackingId" | "pluginOptions___head" | "pluginOptions___siteId" | "pluginOptions___name" | "pluginOptions___short_name" | "pluginOptions___start_url" | "pluginOptions___background_color" | "pluginOptions___theme_color" | "pluginOptions___display" | "pluginOptions___icon" | "pluginOptions___path" | "pluginOptions___maxWidth" | "pluginOptions___backgroundColor" | "pluginOptions___wrapperStyle" | "pluginOptions___linkImagesToOriginal" | "pluginOptions___showCaptions" | "pluginOptions___pathPrefix" | "pluginOptions___withWebp" | "pluginOptions___active" | "pluginOptions___class" | "pluginOptions___size" | "pluginOptions___styles___display" | "pluginOptions___styles___margin" | "pluginOptions___styles___position" | "pluginOptions___styles___width" | "pluginOptions___attr" | "pluginOptions___ignoreFileExtensions" | "pluginOptions___useMozJpeg" | "pluginOptions___stripMetadata" | "pluginOptions___query" | "pluginOptions___feeds" | "pluginOptions___pathCheck" | "nodeAPIs" | "browserAPIs" | "ssrAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson___peerDependencies" | "packageJson___keywords" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type sitePluginConnectionSortOrderValues = "ASC" | "DESC";

export interface filterSitePlugin {
  resolve: sitePluginConnectionResolveQueryString_2 | null;
  id: sitePluginConnectionIdQueryString_2 | null;
  name: sitePluginConnectionNameQueryString_2 | null;
  version: sitePluginConnectionVersionQueryString_2 | null;
  pluginOptions: sitePluginConnectionPluginOptionsInputObject_2 | null;
  nodeAPIs: sitePluginConnectionNodeApIsQueryList_2 | null;
  browserAPIs: sitePluginConnectionBrowserApIsQueryList_2 | null;
  ssrAPIs: sitePluginConnectionSsrApIsQueryList_2 | null;
  pluginFilepath: sitePluginConnectionPluginFilepathQueryString_2 | null;
  packageJson: sitePluginConnectionPackageJsonInputObject_2 | null;
  internal: sitePluginConnectionInternalInputObject_2 | null;
}

export interface sitePluginConnectionResolveQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
  plugins: sitePluginConnectionPluginOptionsPluginsQueryList_2 | null;
  pathToConfigModule: sitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2 | null;
  trackingId: sitePluginConnectionPluginOptionsTrackingIdQueryString_2 | null;
  head: sitePluginConnectionPluginOptionsHeadQueryBoolean_2 | null;
  siteId: sitePluginConnectionPluginOptionsSiteIdQueryString_2 | null;
  name: sitePluginConnectionPluginOptionsNameQueryString_2 | null;
  short_name: sitePluginConnectionPluginOptionsShortNameQueryString_2 | null;
  start_url: sitePluginConnectionPluginOptionsStartUrlQueryString_2 | null;
  background_color: sitePluginConnectionPluginOptionsBackgroundColorQueryString_3 | null;
  theme_color: sitePluginConnectionPluginOptionsThemeColorQueryString_2 | null;
  display: sitePluginConnectionPluginOptionsDisplayQueryString_2 | null;
  icon: sitePluginConnectionPluginOptionsIconQueryString_2 | null;
  path: sitePluginConnectionPluginOptionsPathQueryString_2 | null;
  maxWidth: sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 | null;
  backgroundColor: sitePluginConnectionPluginOptionsBackgroundColorQueryString_4 | null;
  wrapperStyle: sitePluginConnectionPluginOptionsWrapperStyleQueryString_2 | null;
  linkImagesToOriginal: sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  showCaptions: sitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2 | null;
  pathPrefix: sitePluginConnectionPluginOptionsPathPrefixQueryString_2 | null;
  withWebp: sitePluginConnectionPluginOptionsWithWebpQueryBoolean_2 | null;
  active: sitePluginConnectionPluginOptionsActiveQueryBoolean_2 | null;
  class: sitePluginConnectionPluginOptionsClassQueryString_2 | null;
  size: sitePluginConnectionPluginOptionsSizeQueryInteger_2 | null;
  styles: sitePluginConnectionPluginOptionsStylesInputObject_2 | null;
  attr: sitePluginConnectionPluginOptionsAttrQueryString_2 | null;
  ignoreFileExtensions: sitePluginConnectionPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
  useMozJpeg: sitePluginConnectionPluginOptionsUseMozJpegQueryBoolean_2 | null;
  stripMetadata: sitePluginConnectionPluginOptionsStripMetadataQueryBoolean_2 | null;
  query: sitePluginConnectionPluginOptionsQueryQueryString_2 | null;
  feeds: sitePluginConnectionPluginOptionsFeedsQueryList_2 | null;
  pathCheck: sitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsQueryList_2 {
  elemMatch: sitePluginConnectionPluginOptionsPluginsInputObject_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve: sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 | null;
  id: sitePluginConnectionPluginOptionsPluginsIdQueryString_2 | null;
  name: sitePluginConnectionPluginOptionsPluginsNameQueryString_2 | null;
  version: sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 | null;
  pluginOptions: sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 | null;
  browserAPIs: sitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2 | null;
  ssrAPIs: sitePluginConnectionPluginOptionsPluginsSsrApIsQueryList_2 | null;
  pluginFilepath: sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth: sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
  backgroundColor: sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
  wrapperStyle: sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
  linkImagesToOriginal: sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  showCaptions: sitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 | null;
  pathPrefix: sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
  withWebp: sitePluginConnectionPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2 | null;
  active: sitePluginConnectionPluginOptionsPluginsPluginOptionsActiveQueryBoolean_2 | null;
  class: sitePluginConnectionPluginOptionsPluginsPluginOptionsClassQueryString_2 | null;
  size: sitePluginConnectionPluginOptionsPluginsPluginOptionsSizeQueryInteger_2 | null;
  styles: sitePluginConnectionPluginOptionsPluginsPluginOptionsStylesInputObject_2 | null;
  attr: sitePluginConnectionPluginOptionsPluginsPluginOptionsAttrQueryString_2 | null;
  ignoreFileExtensions: sitePluginConnectionPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsActiveQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsClassQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsSizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsStylesInputObject_2 {
  display: sitePluginConnectionPluginOptionsPluginsPluginOptionsStylesDisplayQueryString_2 | null;
  margin: sitePluginConnectionPluginOptionsPluginsPluginOptionsStylesMarginQueryString_2 | null;
  position: sitePluginConnectionPluginOptionsPluginsPluginOptionsStylesPositionQueryString_2 | null;
  width: sitePluginConnectionPluginOptionsPluginsPluginOptionsStylesWidthQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsStylesDisplayQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsStylesMarginQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsStylesPositionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsStylesWidthQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsAttrQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsSsrApIsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsTrackingIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsHeadQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginConnectionPluginOptionsSiteIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsShortNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsStartUrlQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsThemeColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsDisplayQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsIconQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsWrapperStyleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginConnectionPluginOptionsPathPrefixQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsWithWebpQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginConnectionPluginOptionsActiveQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginConnectionPluginOptionsClassQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsSizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePluginConnectionPluginOptionsStylesInputObject_2 {
  display: sitePluginConnectionPluginOptionsStylesDisplayQueryString_2 | null;
  margin: sitePluginConnectionPluginOptionsStylesMarginQueryString_2 | null;
  position: sitePluginConnectionPluginOptionsStylesPositionQueryString_2 | null;
  width: sitePluginConnectionPluginOptionsStylesWidthQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsStylesDisplayQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsStylesMarginQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsStylesPositionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsStylesWidthQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsAttrQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsUseMozJpegQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginConnectionPluginOptionsStripMetadataQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginConnectionPluginOptionsQueryQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsFeedsQueryList_2 {
  elemMatch: sitePluginConnectionPluginOptionsFeedsInputObject_2 | null;
}

export interface sitePluginConnectionPluginOptionsFeedsInputObject_2 {
  query: sitePluginConnectionPluginOptionsFeedsQueryQueryString_2 | null;
  output: sitePluginConnectionPluginOptionsFeedsOutputQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsFeedsQueryQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsFeedsOutputQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionBrowserApIsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionSsrApIsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
  name: sitePluginConnectionPackageJsonNameQueryString_2 | null;
  description: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null;
  version: sitePluginConnectionPackageJsonVersionQueryString_2 | null;
  main: sitePluginConnectionPackageJsonMainQueryString_2 | null;
  license: sitePluginConnectionPackageJsonLicenseQueryString_2 | null;
  dependencies: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null;
  devDependencies: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null;
  peerDependencies: sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null;
  keywords: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null;
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch: sitePluginConnectionPackageJsonDependenciesInputObject_2 | null;
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null;
  version: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch: sitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;
  version: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch: sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name: sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null;
  version: sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionInternalInputObject_2 {
  contentDigest: sitePluginConnectionInternalContentDigestQueryString_2 | null;
  type: sitePluginConnectionInternalTypeQueryString_2 | null;
  owner: sitePluginConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface SitePluginConnection {
  pageInfo: PageInfo;
  edges: Array<SitePluginEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<sitePluginGroupConnectionConnection> | null;
}

export interface DistinctSitePluginConnectionArgs {
  field: sitePluginDistinctEnum | null;
}

export interface GroupSitePluginConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: sitePluginGroupEnum | null;
}

export interface SitePluginEdge {
  node: SitePlugin | null;
  next: SitePlugin | null;
  previous: SitePlugin | null;
}

export type sitePluginDistinctEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___pathToConfigModule" | "pluginOptions___trackingId" | "pluginOptions___head" | "pluginOptions___siteId" | "pluginOptions___name" | "pluginOptions___short_name" | "pluginOptions___start_url" | "pluginOptions___background_color" | "pluginOptions___theme_color" | "pluginOptions___display" | "pluginOptions___icon" | "pluginOptions___path" | "pluginOptions___maxWidth" | "pluginOptions___backgroundColor" | "pluginOptions___wrapperStyle" | "pluginOptions___linkImagesToOriginal" | "pluginOptions___showCaptions" | "pluginOptions___pathPrefix" | "pluginOptions___withWebp" | "pluginOptions___active" | "pluginOptions___class" | "pluginOptions___size" | "pluginOptions___styles___display" | "pluginOptions___styles___margin" | "pluginOptions___styles___position" | "pluginOptions___styles___width" | "pluginOptions___attr" | "pluginOptions___ignoreFileExtensions" | "pluginOptions___useMozJpeg" | "pluginOptions___stripMetadata" | "pluginOptions___query" | "pluginOptions___feeds" | "pluginOptions___pathCheck" | "nodeAPIs" | "browserAPIs" | "ssrAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson___peerDependencies" | "packageJson___keywords" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type sitePluginGroupEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___pathToConfigModule" | "pluginOptions___trackingId" | "pluginOptions___head" | "pluginOptions___siteId" | "pluginOptions___name" | "pluginOptions___short_name" | "pluginOptions___start_url" | "pluginOptions___background_color" | "pluginOptions___theme_color" | "pluginOptions___display" | "pluginOptions___icon" | "pluginOptions___path" | "pluginOptions___maxWidth" | "pluginOptions___backgroundColor" | "pluginOptions___wrapperStyle" | "pluginOptions___linkImagesToOriginal" | "pluginOptions___showCaptions" | "pluginOptions___pathPrefix" | "pluginOptions___withWebp" | "pluginOptions___active" | "pluginOptions___class" | "pluginOptions___size" | "pluginOptions___styles___display" | "pluginOptions___styles___margin" | "pluginOptions___styles___position" | "pluginOptions___styles___width" | "pluginOptions___attr" | "pluginOptions___ignoreFileExtensions" | "pluginOptions___useMozJpeg" | "pluginOptions___stripMetadata" | "pluginOptions___query" | "pluginOptions___feeds" | "pluginOptions___pathCheck" | "nodeAPIs" | "browserAPIs" | "ssrAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson___peerDependencies" | "packageJson___keywords" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<sitePluginGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface sitePluginGroupConnectionEdge {
  node: SitePlugin | null;
  next: SitePlugin | null;
  previous: SitePlugin | null;
}

export interface directoryConnectionSort {
  fields: Array<DirectoryConnectionSortByFieldsEnum>;
  order: directoryConnectionSortOrderValues | null;
}

export type DirectoryConnectionSortByFieldsEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___description" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

export type directoryConnectionSortOrderValues = "ASC" | "DESC";

export interface filterDirectory {
  id: directoryConnectionIdQueryString_2 | null;
  internal: directoryConnectionInternalInputObject_2 | null;
  sourceInstanceName: directoryConnectionSourceInstanceNameQueryString_2 | null;
  absolutePath: directoryConnectionAbsolutePathQueryString_2 | null;
  relativePath: directoryConnectionRelativePathQueryString_2 | null;
  extension: directoryConnectionExtensionQueryString_2 | null;
  size: directoryConnectionSizeQueryInteger_2 | null;
  prettySize: directoryConnectionPrettySizeQueryString_2 | null;
  modifiedTime: directoryConnectionModifiedTimeQueryString_2 | null;
  accessTime: directoryConnectionAccessTimeQueryString_2 | null;
  changeTime: directoryConnectionChangeTimeQueryString_2 | null;
  birthTime: directoryConnectionBirthTimeQueryString_2 | null;
  root: directoryConnectionRootQueryString_2 | null;
  dir: directoryConnectionDirQueryString_2 | null;
  base: directoryConnectionBaseQueryString_2 | null;
  ext: directoryConnectionExtQueryString_2 | null;
  name: directoryConnectionNameQueryString_2 | null;
  relativeDirectory: directoryConnectionRelativeDirectoryQueryString_2 | null;
  dev: directoryConnectionDevQueryInteger_2 | null;
  mode: directoryConnectionModeQueryInteger_2 | null;
  nlink: directoryConnectionNlinkQueryInteger_2 | null;
  uid: directoryConnectionUidQueryInteger_2 | null;
  gid: directoryConnectionGidQueryInteger_2 | null;
  rdev: directoryConnectionRdevQueryInteger_2 | null;
  blksize: directoryConnectionBlksizeQueryInteger_2 | null;
  ino: directoryConnectionInoQueryInteger_2 | null;
  blocks: directoryConnectionBlocksQueryInteger_2 | null;
  atimeMs: directoryConnectionAtimeMsQueryFloat_2 | null;
  mtimeMs: directoryConnectionMtimeMsQueryFloat_2 | null;
  ctimeMs: directoryConnectionCtimeMsQueryFloat_2 | null;
  birthtimeMs: directoryConnectionBirthtimeMsQueryFloat_2 | null;
  atime: directoryConnectionAtimeQueryString_2 | null;
  mtime: directoryConnectionMtimeQueryString_2 | null;
  ctime: directoryConnectionCtimeQueryString_2 | null;
  birthtime: directoryConnectionBirthtimeQueryString_2 | null;
}

export interface directoryConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionInternalInputObject_2 {
  contentDigest: directoryConnectionInternalContentDigestQueryString_2 | null;
  type: directoryConnectionInternalTypeQueryString_2 | null;
  description: directoryConnectionInternalDescriptionQueryString_2 | null;
  owner: directoryConnectionInternalOwnerQueryString_2 | null;
}

export interface directoryConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionInternalDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionSourceInstanceNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionRelativePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionExtensionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionSizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionPrettySizeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionModifiedTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionAccessTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionChangeTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionBirthTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionRootQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionDirQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionBaseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionExtQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionRelativeDirectoryQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionDevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionModeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionNlinkQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionUidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionGidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionRdevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionBlksizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionInoQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionBlocksQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionAtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionMtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionCtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionBirthtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryConnectionAtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionMtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionCtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryConnectionBirthtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface DirectoryConnection {
  pageInfo: PageInfo;
  edges: Array<DirectoryEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<directoryGroupConnectionConnection> | null;
}

export interface DistinctDirectoryConnectionArgs {
  field: directoryDistinctEnum | null;
}

export interface GroupDirectoryConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: directoryGroupEnum | null;
}

export interface DirectoryEdge {
  node: Directory | null;
  next: Directory | null;
  previous: Directory | null;
}

export interface Directory extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  internal: internal_11 | null;
  sourceInstanceName: string | null;
  absolutePath: string | null;
  relativePath: string | null;
  extension: string | null;
  size: number | null;
  prettySize: string | null;
  modifiedTime: Date | null;
  accessTime: Date | null;
  changeTime: Date | null;
  birthTime: Date | null;
  root: string | null;
  dir: string | null;
  base: string | null;
  ext: string | null;
  name: string | null;
  relativeDirectory: string | null;
  dev: number | null;
  mode: number | null;
  nlink: number | null;
  uid: number | null;
  gid: number | null;
  rdev: number | null;
  blksize: number | null;
  ino: number | null;
  blocks: number | null;
  atimeMs: number | null;
  mtimeMs: number | null;
  ctimeMs: number | null;
  birthtimeMs: number | null;
  atime: Date | null;
  mtime: Date | null;
  ctime: Date | null;
  birthtime: Date | null;
}

export interface ModifiedTimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface AccessTimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface ChangeTimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface BirthTimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface AtimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface MtimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface CtimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface BirthtimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface internal_11 {
  contentDigest: string | null;
  type: string | null;
  description: string | null;
  owner: string | null;
}

export type directoryDistinctEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___description" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

export type directoryGroupEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___description" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

export interface directoryGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<directoryGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface directoryGroupConnectionEdge {
  node: Directory | null;
  next: Directory | null;
  previous: Directory | null;
}

export interface fileConnectionSort {
  fields: Array<FileConnectionSortByFieldsEnum>;
  order: fileConnectionSortOrderValues | null;
}

export type FileConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___mediaType" | "internal___description" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime" | "publicURL";

export type fileConnectionSortOrderValues = "ASC" | "DESC";

export interface filterFile {
  id: fileConnectionIdQueryString_2 | null;
  internal: fileConnectionInternalInputObject_2 | null;
  sourceInstanceName: fileConnectionSourceInstanceNameQueryString_2 | null;
  absolutePath: fileConnectionAbsolutePathQueryString_2 | null;
  relativePath: fileConnectionRelativePathQueryString_2 | null;
  extension: fileConnectionExtensionQueryString_2 | null;
  size: fileConnectionSizeQueryInteger_2 | null;
  prettySize: fileConnectionPrettySizeQueryString_2 | null;
  modifiedTime: fileConnectionModifiedTimeQueryString_2 | null;
  accessTime: fileConnectionAccessTimeQueryString_2 | null;
  changeTime: fileConnectionChangeTimeQueryString_2 | null;
  birthTime: fileConnectionBirthTimeQueryString_2 | null;
  root: fileConnectionRootQueryString_2 | null;
  dir: fileConnectionDirQueryString_2 | null;
  base: fileConnectionBaseQueryString_2 | null;
  ext: fileConnectionExtQueryString_2 | null;
  name: fileConnectionNameQueryString_2 | null;
  relativeDirectory: fileConnectionRelativeDirectoryQueryString_2 | null;
  dev: fileConnectionDevQueryInteger_2 | null;
  mode: fileConnectionModeQueryInteger_2 | null;
  nlink: fileConnectionNlinkQueryInteger_2 | null;
  uid: fileConnectionUidQueryInteger_2 | null;
  gid: fileConnectionGidQueryInteger_2 | null;
  rdev: fileConnectionRdevQueryInteger_2 | null;
  blksize: fileConnectionBlksizeQueryInteger_2 | null;
  ino: fileConnectionInoQueryInteger_2 | null;
  blocks: fileConnectionBlocksQueryInteger_2 | null;
  atimeMs: fileConnectionAtimeMsQueryFloat_2 | null;
  mtimeMs: fileConnectionMtimeMsQueryFloat_2 | null;
  ctimeMs: fileConnectionCtimeMsQueryFloat_2 | null;
  birthtimeMs: fileConnectionBirthtimeMsQueryFloat_2 | null;
  atime: fileConnectionAtimeQueryString_2 | null;
  mtime: fileConnectionMtimeQueryString_2 | null;
  ctime: fileConnectionCtimeQueryString_2 | null;
  birthtime: fileConnectionBirthtimeQueryString_2 | null;
  publicURL: publicUrlQueryString_4 | null;
}

export interface fileConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionInternalInputObject_2 {
  contentDigest: fileConnectionInternalContentDigestQueryString_2 | null;
  type: fileConnectionInternalTypeQueryString_2 | null;
  mediaType: fileConnectionInternalMediaTypeQueryString_2 | null;
  description: fileConnectionInternalDescriptionQueryString_2 | null;
  owner: fileConnectionInternalOwnerQueryString_2 | null;
}

export interface fileConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionInternalDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionRelativePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionExtensionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionSizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionPrettySizeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionModifiedTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionAccessTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionChangeTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionBirthTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionRootQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionDirQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionBaseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionExtQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionRelativeDirectoryQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionDevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionModeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionNlinkQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionUidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionGidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionRdevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionBlksizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionInoQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionBlocksQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionAtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionMtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionCtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionBirthtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileConnectionAtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionMtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionCtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileConnectionBirthtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface publicUrlQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface FileConnection {
  pageInfo: PageInfo;
  edges: Array<FileEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<fileGroupConnectionConnection> | null;
}

export interface DistinctFileConnectionArgs {
  field: fileDistinctEnum | null;
}

export interface GroupFileConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: fileGroupEnum | null;
}

export interface FileEdge {
  node: File | null;
  next: File | null;
  previous: File | null;
}

export interface File extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  childMarkdownRemark: MarkdownRemark | null;
  childImageSharp: ImageSharp | null;
  childDataJson: DataJson | null;
  internal: internal_12 | null;
  sourceInstanceName: string | null;
  absolutePath: string | null;
  relativePath: string | null;
  extension: string | null;
  size: number | null;
  prettySize: string | null;
  modifiedTime: Date | null;
  accessTime: Date | null;
  changeTime: Date | null;
  birthTime: Date | null;
  root: string | null;
  dir: string | null;
  base: string | null;
  ext: string | null;
  name: string | null;
  relativeDirectory: string | null;
  dev: number | null;
  mode: number | null;
  nlink: number | null;
  uid: number | null;
  gid: number | null;
  rdev: number | null;
  blksize: number | null;
  ino: number | null;
  blocks: number | null;
  atimeMs: number | null;
  mtimeMs: number | null;
  ctimeMs: number | null;
  birthtimeMs: number | null;
  atime: Date | null;
  mtime: Date | null;
  ctime: Date | null;
  birthtime: Date | null;
  publicURL: string | null;
}

export interface ModifiedTimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface AccessTimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface ChangeTimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface BirthTimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface AtimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface MtimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface CtimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface BirthtimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface MarkdownRemark extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  internal: internal_13 | null;
  frontmatter: frontmatter_3 | null;
  rawMarkdownBody: string | null;
  fileAbsolutePath: string | null;
  fields: fields_3 | null;
  html: string | null;
  htmlAst: JSON | null;
  excerpt: string | null;
  headings: Array<MarkdownHeading> | null;
  timeToRead: number | null;
  tableOfContents: string | null;
  wordCount: wordCount | null;
}

export interface ExcerptMarkdownRemarkArgs {
  pruneLength: number | null;
  truncate: boolean | null;
  format: ExcerptFormats | null;
}

export interface HeadingsMarkdownRemarkArgs {
  depth: HeadingLevels | null;
}

export interface TableOfContentsMarkdownRemarkArgs {
  pathToSlugField: string | null;
}

export interface internal_13 {
  content: string | null;
  type: string | null;
  contentDigest: string | null;
  owner: string | null;
  fieldOwners: fieldOwners_2 | null;
}

export interface fieldOwners_2 {
  slug: string | null;
}

export interface frontmatter_3 {
  title: string | null;
  _PARENT: string | null;
  createdDate: Date | null;
  updatedDate: Date | null;
  author: string | null;
  tags: Array<string> | null;
  image: File | null;
  origin: boolean | null;
  draft: boolean | null;
}

export interface CreatedDatefrontmatter_3Args {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface UpdatedDatefrontmatter_3Args {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface fields_3 {
  slug: string | null;
}

export type JSON = any;

export type ExcerptFormats = "PLAIN" | "HTML";

export type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface MarkdownHeading {
  value: string | null;
  depth: number | null;
}

export interface wordCount {
  paragraphs: number | null;
  sentences: number | null;
  words: number | null;
}

export interface ImageSharp extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  internal: internal_14 | null;
  fixed: ImageSharpFixed | null;
  resolutions: ImageSharpResolutions | null;
  fluid: ImageSharpFluid | null;
  sizes: ImageSharpSizes | null;
  original: ImageSharpOriginal | null;
  resize: ImageSharpResize | null;
}

export interface FixedImageSharpArgs {
  width: number | null;
  height: number | null;
  jpegProgressive: boolean | null;
  grayscale: boolean | null;
  duotone: DuotoneGradient | null;
  traceSVG: Potrace | null;
  quality: number | null;
  toFormat: ImageFormat | null;
  cropFocus: ImageCropFocus | null;
  rotate: number | null;
}

export interface ResolutionsImageSharpArgs {
  width: number | null;
  height: number | null;
  jpegProgressive: boolean | null;
  grayscale: boolean | null;
  duotone: DuotoneGradient | null;
  traceSVG: Potrace | null;
  quality: number | null;
  toFormat: ImageFormat | null;
  cropFocus: ImageCropFocus | null;
  rotate: number | null;
}

export interface FluidImageSharpArgs {
  maxWidth: number | null;
  maxHeight: number | null;
  grayscale: boolean | null;
  jpegProgressive: boolean | null;
  duotone: DuotoneGradient | null;
  traceSVG: Potrace | null;
  quality: number | null;
  toFormat: ImageFormat | null;
  cropFocus: ImageCropFocus | null;
  rotate: number | null;
  sizes: string | null;
  srcSetBreakpoints: Array<number> | null;
}

export interface SizesImageSharpArgs {
  maxWidth: number | null;
  maxHeight: number | null;
  grayscale: boolean | null;
  jpegProgressive: boolean | null;
  duotone: DuotoneGradient | null;
  traceSVG: Potrace | null;
  quality: number | null;
  toFormat: ImageFormat | null;
  cropFocus: ImageCropFocus | null;
  rotate: number | null;
  sizes: string | null;
  srcSetBreakpoints: Array<number> | null;
}

export interface ResizeImageSharpArgs {
  width: number | null;
  height: number | null;
  quality: number | null;
  jpegProgressive: boolean | null;
  pngCompressionLevel: number | null;
  grayscale: boolean | null;
  duotone: DuotoneGradient | null;
  base64: boolean | null;
  traceSVG: Potrace | null;
  toFormat: ImageFormat | null;
  cropFocus: ImageCropFocus | null;
  rotate: number | null;
}

export interface internal_14 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface DuotoneGradient {
  highlight: string | null;
  shadow: string | null;
  opacity: number | null;
}

export interface Potrace {
  turnPolicy: PotraceTurnPolicy | null;
  turdSize: number | null;
  alphaMax: number | null;
  optCurve: boolean | null;
  optTolerance: number | null;
  threshold: number | null;
  blackOnWhite: boolean | null;
  color: string | null;
  background: string | null;
}

export type PotraceTurnPolicy = "TURNPOLICY_BLACK" | "TURNPOLICY_WHITE" | "TURNPOLICY_LEFT" | "TURNPOLICY_RIGHT" | "TURNPOLICY_MINORITY" | "TURNPOLICY_MAJORITY";

export type ImageFormat = "NO_CHANGE" | "JPG" | "PNG" | "WEBP";

export type ImageCropFocus = "CENTER" | "NORTH" | "NORTHEAST" | "EAST" | "SOUTHEAST" | "SOUTH" | "SOUTHWEST" | "WEST" | "NORTHWEST" | "ENTROPY" | "ATTENTION";

export interface ImageSharpFixed {
  base64: string | null;
  tracedSVG: string | null;
  aspectRatio: number | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
  originalName: string | null;
}

export interface ImageSharpResolutions {
  base64: string | null;
  tracedSVG: string | null;
  aspectRatio: number | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
  originalName: string | null;
}

export interface ImageSharpFluid {
  base64: string | null;
  tracedSVG: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string | null;
  originalImg: string | null;
  originalName: string | null;
  presentationWidth: number | null;
  presentationHeight: number | null;
}

export interface ImageSharpSizes {
  base64: string | null;
  tracedSVG: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string | null;
  originalImg: string | null;
  originalName: string | null;
  presentationWidth: number | null;
  presentationHeight: number | null;
}

export interface ImageSharpOriginal {
  width: number | null;
  height: number | null;
  src: string | null;
}

export interface ImageSharpResize {
  src: string | null;
  tracedSVG: string | null;
  width: number | null;
  height: number | null;
  aspectRatio: number | null;
  originalName: string | null;
}

export interface DataJson extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  author: author_2 | null;
  speech: Array<string> | null;
  gitment: gitment_2 | null;
  internal: internal_15 | null;
}

export interface author_2 {
  name: string | null;
  avatar: File | null;
}

export interface gitment_2 {
  owner: string | null;
  repo: string | null;
  oauth: oauth_2 | null;
  crossServer: string | null;
}

export interface oauth_2 {
  client_id: string | null;
  client_secret: string | null;
}

export interface internal_15 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface internal_12 {
  contentDigest: string | null;
  type: string | null;
  mediaType: string | null;
  description: string | null;
  owner: string | null;
}

export type fileDistinctEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___mediaType" | "internal___description" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

export type fileGroupEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___mediaType" | "internal___description" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

export interface fileGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<fileGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface fileGroupConnectionEdge {
  node: File | null;
  next: File | null;
  previous: File | null;
}

export interface imageSharpConnectionSort {
  fields: Array<ImageSharpConnectionSortByFieldsEnum>;
  order: imageSharpConnectionSortOrderValues | null;
}

export type ImageSharpConnectionSortByFieldsEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "fixed___base64" | "fixed___tracedSVG" | "fixed___aspectRatio" | "fixed___width" | "fixed___height" | "fixed___src" | "fixed___srcSet" | "fixed___srcWebp" | "fixed___srcSetWebp" | "fixed___originalName" | "resolutions___base64" | "resolutions___tracedSVG" | "resolutions___aspectRatio" | "resolutions___width" | "resolutions___height" | "resolutions___src" | "resolutions___srcSet" | "resolutions___srcWebp" | "resolutions___srcSetWebp" | "resolutions___originalName" | "fluid___base64" | "fluid___tracedSVG" | "fluid___aspectRatio" | "fluid___src" | "fluid___srcSet" | "fluid___srcWebp" | "fluid___srcSetWebp" | "fluid___sizes" | "fluid___originalImg" | "fluid___originalName" | "fluid___presentationWidth" | "fluid___presentationHeight" | "sizes___base64" | "sizes___tracedSVG" | "sizes___aspectRatio" | "sizes___src" | "sizes___srcSet" | "sizes___srcWebp" | "sizes___srcSetWebp" | "sizes___sizes" | "sizes___originalImg" | "sizes___originalName" | "sizes___presentationWidth" | "sizes___presentationHeight" | "original___width" | "original___height" | "original___src" | "resize___src" | "resize___tracedSVG" | "resize___width" | "resize___height" | "resize___aspectRatio" | "resize___originalName";

export type imageSharpConnectionSortOrderValues = "ASC" | "DESC";

export interface filterImageSharp {
  id: imageSharpConnectionIdQueryString_2 | null;
  internal: imageSharpConnectionInternalInputObject_2 | null;
  fixed: fixedTypeName_4 | null;
  resolutions: resolutionsTypeName_4 | null;
  fluid: fluidTypeName_4 | null;
  sizes: sizesTypeName_4 | null;
  original: originalTypeName_4 | null;
  resize: resizeTypeName_4 | null;
}

export interface imageSharpConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface imageSharpConnectionInternalInputObject_2 {
  contentDigest: imageSharpConnectionInternalContentDigestQueryString_2 | null;
  type: imageSharpConnectionInternalTypeQueryString_2 | null;
  owner: imageSharpConnectionInternalOwnerQueryString_2 | null;
}

export interface imageSharpConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface imageSharpConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface imageSharpConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedTypeName_4 {
  base64: fixedBase64QueryString_4 | null;
  tracedSVG: fixedTracedSvgQueryString_4 | null;
  aspectRatio: fixedAspectRatioQueryFloat_4 | null;
  width: fixedWidthQueryFloat_4 | null;
  height: fixedHeightQueryFloat_4 | null;
  src: fixedSrcQueryString_4 | null;
  srcSet: fixedSrcSetQueryString_4 | null;
  srcWebp: fixedSrcWebpQueryString_4 | null;
  srcSetWebp: fixedSrcSetWebpQueryString_4 | null;
  originalName: fixedOriginalNameQueryString_4 | null;
}

export interface fixedBase64QueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedTracedSvgQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedAspectRatioQueryFloat_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fixedWidthQueryFloat_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fixedHeightQueryFloat_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fixedSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedSrcSetQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedSrcWebpQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedSrcSetWebpQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedOriginalNameQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsTypeName_4 {
  base64: resolutionsBase64QueryString_4 | null;
  tracedSVG: resolutionsTracedSvgQueryString_4 | null;
  aspectRatio: resolutionsAspectRatioQueryFloat_4 | null;
  width: resolutionsWidthQueryFloat_4 | null;
  height: resolutionsHeightQueryFloat_4 | null;
  src: resolutionsSrcQueryString_4 | null;
  srcSet: resolutionsSrcSetQueryString_4 | null;
  srcWebp: resolutionsSrcWebpQueryString_4 | null;
  srcSetWebp: resolutionsSrcSetWebpQueryString_4 | null;
  originalName: resolutionsOriginalNameQueryString_4 | null;
}

export interface resolutionsBase64QueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsTracedSvgQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsAspectRatioQueryFloat_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface resolutionsWidthQueryFloat_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface resolutionsHeightQueryFloat_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface resolutionsSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsSrcSetQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsSrcWebpQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsSrcSetWebpQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsOriginalNameQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidTypeName_4 {
  base64: fluidBase64QueryString_4 | null;
  tracedSVG: fluidTracedSvgQueryString_4 | null;
  aspectRatio: fluidAspectRatioQueryFloat_4 | null;
  src: fluidSrcQueryString_4 | null;
  srcSet: fluidSrcSetQueryString_4 | null;
  srcWebp: fluidSrcWebpQueryString_4 | null;
  srcSetWebp: fluidSrcSetWebpQueryString_4 | null;
  sizes: fluidSizesQueryString_4 | null;
  originalImg: fluidOriginalImgQueryString_4 | null;
  originalName: fluidOriginalNameQueryString_4 | null;
  presentationWidth: fluidPresentationWidthQueryInt_4 | null;
  presentationHeight: fluidPresentationHeightQueryInt_4 | null;
}

export interface fluidBase64QueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidTracedSvgQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidAspectRatioQueryFloat_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fluidSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidSrcSetQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidSrcWebpQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidSrcSetWebpQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidSizesQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidOriginalImgQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidOriginalNameQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidPresentationWidthQueryInt_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fluidPresentationHeightQueryInt_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sizesTypeName_4 {
  base64: sizesBase64QueryString_4 | null;
  tracedSVG: sizesTracedSvgQueryString_4 | null;
  aspectRatio: sizesAspectRatioQueryFloat_4 | null;
  src: sizesSrcQueryString_4 | null;
  srcSet: sizesSrcSetQueryString_4 | null;
  srcWebp: sizesSrcWebpQueryString_4 | null;
  srcSetWebp: sizesSrcSetWebpQueryString_4 | null;
  sizes: sizesSizesQueryString_4 | null;
  originalImg: sizesOriginalImgQueryString_4 | null;
  originalName: sizesOriginalNameQueryString_4 | null;
  presentationWidth: sizesPresentationWidthQueryInt_4 | null;
  presentationHeight: sizesPresentationHeightQueryInt_4 | null;
}

export interface sizesBase64QueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesTracedSvgQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesAspectRatioQueryFloat_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sizesSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesSrcSetQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesSrcWebpQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesSrcSetWebpQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesSizesQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesOriginalImgQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesOriginalNameQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesPresentationWidthQueryInt_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sizesPresentationHeightQueryInt_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface originalTypeName_4 {
  width: originalWidthQueryFloat_4 | null;
  height: originalHeightQueryFloat_4 | null;
  src: originalSrcQueryString_4 | null;
}

export interface originalWidthQueryFloat_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface originalHeightQueryFloat_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface originalSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resizeTypeName_4 {
  src: resizeSrcQueryString_4 | null;
  tracedSVG: resizeTracedSvgQueryString_4 | null;
  width: resizeWidthQueryInt_4 | null;
  height: resizeHeightQueryInt_4 | null;
  aspectRatio: resizeAspectRatioQueryFloat_4 | null;
  originalName: resizeOriginalNameQueryString_4 | null;
}

export interface resizeSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resizeTracedSvgQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resizeWidthQueryInt_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface resizeHeightQueryInt_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface resizeAspectRatioQueryFloat_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface resizeOriginalNameQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface ImageSharpConnection {
  pageInfo: PageInfo;
  edges: Array<ImageSharpEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<imageSharpGroupConnectionConnection> | null;
}

export interface DistinctImageSharpConnectionArgs {
  field: imageSharpDistinctEnum | null;
}

export interface GroupImageSharpConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: imageSharpGroupEnum | null;
}

export interface ImageSharpEdge {
  node: ImageSharp | null;
  next: ImageSharp | null;
  previous: ImageSharp | null;
}

export type imageSharpDistinctEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type imageSharpGroupEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface imageSharpGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<imageSharpGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface imageSharpGroupConnectionEdge {
  node: ImageSharp | null;
  next: ImageSharp | null;
  previous: ImageSharp | null;
}

export interface markdownRemarkConnectionSort {
  fields: Array<MarkdownRemarkConnectionSortByFieldsEnum>;
  order: markdownRemarkConnectionSortOrderValues | null;
}

export type MarkdownRemarkConnectionSortByFieldsEnum = "id" | "parent" | "internal___content" | "internal___type" | "internal___contentDigest" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter____PARENT" | "frontmatter___createdDate" | "frontmatter___updatedDate" | "frontmatter___author" | "frontmatter___tags" | "frontmatter___image" | "frontmatter___origin" | "frontmatter___draft" | "rawMarkdownBody" | "fileAbsolutePath" | "fields___slug" | "html" | "excerpt" | "headings" | "timeToRead" | "tableOfContents" | "wordCount___paragraphs" | "wordCount___sentences" | "wordCount___words";

export type markdownRemarkConnectionSortOrderValues = "ASC" | "DESC";

export interface filterMarkdownRemark {
  id: markdownRemarkConnectionIdQueryString_2 | null;
  internal: markdownRemarkConnectionInternalInputObject_2 | null;
  frontmatter: markdownRemarkConnectionFrontmatterInputObject_2 | null;
  rawMarkdownBody: markdownRemarkConnectionRawMarkdownBodyQueryString_2 | null;
  fileAbsolutePath: markdownRemarkConnectionFileAbsolutePathQueryString_2 | null;
  fields: markdownRemarkConnectionFieldsInputObject_2 | null;
  html: htmlQueryString_4 | null;
  excerpt: excerptQueryString_4 | null;
  headings: headingsQueryList_4 | null;
  timeToRead: timeToReadQueryInt_4 | null;
  tableOfContents: tableOfContentsQueryString_4 | null;
  wordCount: wordCountTypeName_4 | null;
}

export interface markdownRemarkConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionInternalInputObject_2 {
  content: markdownRemarkConnectionInternalContentQueryString_2 | null;
  type: markdownRemarkConnectionInternalTypeQueryString_2 | null;
  contentDigest: markdownRemarkConnectionInternalContentDigestQueryString_2 | null;
  owner: markdownRemarkConnectionInternalOwnerQueryString_2 | null;
  fieldOwners: markdownRemarkConnectionInternalFieldOwnersInputObject_2 | null;
}

export interface markdownRemarkConnectionInternalContentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionInternalFieldOwnersInputObject_2 {
  slug: markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 | null;
}

export interface markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionFrontmatterInputObject_2 {
  title: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null;
  _PARENT: markdownRemarkConnectionFrontmatterParentQueryString_2 | null;
  createdDate: markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 | null;
  updatedDate: markdownRemarkConnectionFrontmatterUpdatedDateQueryString_2 | null;
  author: markdownRemarkConnectionFrontmatterAuthorQueryString_2 | null;
  tags: markdownRemarkConnectionFrontmatterTagsQueryList_2 | null;
  image: markdownRemarkConnectionFrontmatterImageQueryString_2 | null;
  origin: markdownRemarkConnectionFrontmatterOriginQueryBoolean_2 | null;
  draft: markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 | null;
}

export interface markdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionFrontmatterUpdatedDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionFrontmatterAuthorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionFrontmatterTagsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionFrontmatterImageQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionFrontmatterOriginQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface markdownRemarkConnectionRawMarkdownBodyQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkConnectionFieldsInputObject_2 {
  slug: markdownRemarkConnectionFieldsSlugQueryString_2 | null;
}

export interface markdownRemarkConnectionFieldsSlugQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface htmlQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface excerptQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface headingsQueryList_4 {
  elemMatch: headingsListElemTypeName_4 | null;
}

export interface headingsListElemTypeName_4 {
  value: headingsListElemValueQueryString_4 | null;
  depth: headingsListElemDepthQueryInt_4 | null;
}

export interface headingsListElemValueQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface headingsListElemDepthQueryInt_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface timeToReadQueryInt_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface tableOfContentsQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface wordCountTypeName_4 {
  paragraphs: wordCountParagraphsQueryInt_4 | null;
  sentences: wordCountSentencesQueryInt_4 | null;
  words: wordCountWordsQueryInt_4 | null;
}

export interface wordCountParagraphsQueryInt_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface wordCountSentencesQueryInt_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface wordCountWordsQueryInt_4 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface MarkdownRemarkConnection {
  pageInfo: PageInfo;
  edges: Array<MarkdownRemarkEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<markdownRemarkGroupConnectionConnection> | null;
}

export interface DistinctMarkdownRemarkConnectionArgs {
  field: markdownRemarkDistinctEnum | null;
}

export interface GroupMarkdownRemarkConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: markdownRemarkGroupEnum | null;
}

export interface MarkdownRemarkEdge {
  node: MarkdownRemark | null;
  next: MarkdownRemark | null;
  previous: MarkdownRemark | null;
}

export type markdownRemarkDistinctEnum = "id" | "parent" | "internal___content" | "internal___type" | "internal___contentDigest" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter____PARENT" | "frontmatter___createdDate" | "frontmatter___updatedDate" | "frontmatter___author" | "frontmatter___tags" | "frontmatter___image" | "frontmatter___origin" | "frontmatter___draft" | "rawMarkdownBody" | "fileAbsolutePath" | "fields___slug";

export type markdownRemarkGroupEnum = "id" | "parent" | "internal___content" | "internal___type" | "internal___contentDigest" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter____PARENT" | "frontmatter___createdDate" | "frontmatter___updatedDate" | "frontmatter___author" | "frontmatter___tags" | "frontmatter___image" | "frontmatter___origin" | "frontmatter___draft" | "rawMarkdownBody" | "fileAbsolutePath" | "fields___slug";

export interface markdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<markdownRemarkGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface markdownRemarkGroupConnectionEdge {
  node: MarkdownRemark | null;
  next: MarkdownRemark | null;
  previous: MarkdownRemark | null;
}

export interface dataJsonConnectionSort {
  fields: Array<DataJsonConnectionSortByFieldsEnum>;
  order: dataJsonConnectionSortOrderValues | null;
}

export type DataJsonConnectionSortByFieldsEnum = "author___name" | "author___avatar" | "speech" | "gitment___owner" | "gitment___repo" | "gitment___oauth___client_id" | "gitment___oauth___client_secret" | "gitment___crossServer" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type dataJsonConnectionSortOrderValues = "ASC" | "DESC";

export interface filterDataJson {
  author: dataJsonConnectionAuthorInputObject_2 | null;
  speech: dataJsonConnectionSpeechQueryList_2 | null;
  gitment: dataJsonConnectionGitmentInputObject_2 | null;
  id: dataJsonConnectionIdQueryString_2 | null;
  internal: dataJsonConnectionInternalInputObject_2 | null;
}

export interface dataJsonConnectionAuthorInputObject_2 {
  name: dataJsonConnectionAuthorNameQueryString_2 | null;
  avatar: dataJsonConnectionAuthorAvatarQueryString_2 | null;
}

export interface dataJsonConnectionAuthorNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonConnectionAuthorAvatarQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonConnectionSpeechQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonConnectionGitmentInputObject_2 {
  owner: dataJsonConnectionGitmentOwnerQueryString_2 | null;
  repo: dataJsonConnectionGitmentRepoQueryString_2 | null;
  oauth: dataJsonConnectionGitmentOauthInputObject_2 | null;
  crossServer: dataJsonConnectionGitmentCrossServerQueryString_2 | null;
}

export interface dataJsonConnectionGitmentOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonConnectionGitmentRepoQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonConnectionGitmentOauthInputObject_2 {
  client_id: dataJsonConnectionGitmentOauthClientIdQueryString_2 | null;
  client_secret: dataJsonConnectionGitmentOauthClientSecretQueryString_2 | null;
}

export interface dataJsonConnectionGitmentOauthClientIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonConnectionGitmentOauthClientSecretQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonConnectionGitmentCrossServerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonConnectionInternalInputObject_2 {
  contentDigest: dataJsonConnectionInternalContentDigestQueryString_2 | null;
  type: dataJsonConnectionInternalTypeQueryString_2 | null;
  owner: dataJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface dataJsonConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface DataJsonConnection {
  pageInfo: PageInfo;
  edges: Array<DataJsonEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<dataJsonGroupConnectionConnection> | null;
}

export interface DistinctDataJsonConnectionArgs {
  field: dataJsonDistinctEnum | null;
}

export interface GroupDataJsonConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: dataJsonGroupEnum | null;
}

export interface DataJsonEdge {
  node: DataJson | null;
  next: DataJson | null;
  previous: DataJson | null;
}

export type dataJsonDistinctEnum = "author___name" | "author___avatar" | "speech" | "gitment___owner" | "gitment___repo" | "gitment___oauth___client_id" | "gitment___oauth___client_secret" | "gitment___crossServer" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type dataJsonGroupEnum = "author___name" | "author___avatar" | "speech" | "gitment___owner" | "gitment___repo" | "gitment___oauth___client_id" | "gitment___oauth___client_secret" | "gitment___crossServer" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface dataJsonGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<dataJsonGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface dataJsonGroupConnectionEdge {
  node: DataJson | null;
  next: DataJson | null;
  previous: DataJson | null;
}

export interface sitePageJsonNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageInternalComponentNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageComponentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageComponentChunkNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextInputObject {
  headers: sitePageContextHeadersInputObject | null;
  slug: sitePageContextSlugQueryString | null;
  header: sitePageContextHeaderInputObject | null;
  tag: sitePageContextTagQueryString | null;
  skip: sitePageContextSkipQueryInteger | null;
  archives: sitePageContextArchivesQueryList | null;
  totalCount: sitePageContextTotalCountQueryInteger | null;
}

export interface sitePageContextHeadersInputObject {
  _about_: sitePageContextHeadersAboutInputObject | null;
  _blog_2018_05_02__article_1_: sitePageContextHeadersBlog20180502Article1InputObject | null;
  _blog_2018_05_02__article_2_: sitePageContextHeadersBlog20180502Article2InputObject | null;
  _blog_2018_04_18__welcoming_: sitePageContextHeadersBlog20180418WelcomingInputObject | null;
}

export interface sitePageContextHeadersAboutInputObject {
  children: sitePageContextHeadersAboutChildrenQueryList | null;
}

export interface sitePageContextHeadersAboutChildrenQueryList {
  elemMatch: sitePageContextHeadersAboutChildrenInputObject | null;
}

export interface sitePageContextHeadersAboutChildrenInputObject {
  fixed: sitePageContextHeadersAboutChildrenFixedInputObject | null;
}

export interface sitePageContextHeadersAboutChildrenFixedInputObject {
  src: sitePageContextHeadersAboutChildrenFixedSrcQueryString | null;
  srcSet: sitePageContextHeadersAboutChildrenFixedSrcSetQueryString | null;
}

export interface sitePageContextHeadersAboutChildrenFixedSrcQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextHeadersAboutChildrenFixedSrcSetQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextHeadersBlog20180502Article1InputObject {
  children: sitePageContextHeadersBlog20180502Article1ChildrenQueryList | null;
}

export interface sitePageContextHeadersBlog20180502Article1ChildrenQueryList {
  elemMatch: sitePageContextHeadersBlog20180502Article1ChildrenInputObject | null;
}

export interface sitePageContextHeadersBlog20180502Article1ChildrenInputObject {
  fixed: sitePageContextHeadersBlog20180502Article1ChildrenFixedInputObject | null;
}

export interface sitePageContextHeadersBlog20180502Article1ChildrenFixedInputObject {
  src: sitePageContextHeadersBlog20180502Article1ChildrenFixedSrcQueryString | null;
  srcSet: sitePageContextHeadersBlog20180502Article1ChildrenFixedSrcSetQueryString | null;
}

export interface sitePageContextHeadersBlog20180502Article1ChildrenFixedSrcQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextHeadersBlog20180502Article1ChildrenFixedSrcSetQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextHeadersBlog20180502Article2InputObject {
  children: sitePageContextHeadersBlog20180502Article2ChildrenQueryList | null;
}

export interface sitePageContextHeadersBlog20180502Article2ChildrenQueryList {
  elemMatch: sitePageContextHeadersBlog20180502Article2ChildrenInputObject | null;
}

export interface sitePageContextHeadersBlog20180502Article2ChildrenInputObject {
  fixed: sitePageContextHeadersBlog20180502Article2ChildrenFixedInputObject | null;
}

export interface sitePageContextHeadersBlog20180502Article2ChildrenFixedInputObject {
  src: sitePageContextHeadersBlog20180502Article2ChildrenFixedSrcQueryString | null;
  srcSet: sitePageContextHeadersBlog20180502Article2ChildrenFixedSrcSetQueryString | null;
}

export interface sitePageContextHeadersBlog20180502Article2ChildrenFixedSrcQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextHeadersBlog20180502Article2ChildrenFixedSrcSetQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextHeadersBlog20180418WelcomingInputObject {
  children: sitePageContextHeadersBlog20180418WelcomingChildrenQueryList | null;
}

export interface sitePageContextHeadersBlog20180418WelcomingChildrenQueryList {
  elemMatch: sitePageContextHeadersBlog20180418WelcomingChildrenInputObject | null;
}

export interface sitePageContextHeadersBlog20180418WelcomingChildrenInputObject {
  fixed: sitePageContextHeadersBlog20180418WelcomingChildrenFixedInputObject | null;
}

export interface sitePageContextHeadersBlog20180418WelcomingChildrenFixedInputObject {
  src: sitePageContextHeadersBlog20180418WelcomingChildrenFixedSrcQueryString | null;
  srcSet: sitePageContextHeadersBlog20180418WelcomingChildrenFixedSrcSetQueryString | null;
}

export interface sitePageContextHeadersBlog20180418WelcomingChildrenFixedSrcQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextHeadersBlog20180418WelcomingChildrenFixedSrcSetQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextSlugQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextHeaderInputObject {
  children: sitePageContextHeaderChildrenQueryList | null;
}

export interface sitePageContextHeaderChildrenQueryList {
  elemMatch: sitePageContextHeaderChildrenInputObject | null;
}

export interface sitePageContextHeaderChildrenInputObject {
  fixed: sitePageContextHeaderChildrenFixedInputObject | null;
}

export interface sitePageContextHeaderChildrenFixedInputObject {
  src: sitePageContextHeaderChildrenFixedSrcQueryString | null;
  srcSet: sitePageContextHeaderChildrenFixedSrcSetQueryString | null;
}

export interface sitePageContextHeaderChildrenFixedSrcQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextHeaderChildrenFixedSrcSetQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextTagQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextSkipQueryInteger {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePageContextArchivesQueryList {
  elemMatch: sitePageContextArchivesInputObject | null;
}

export interface sitePageContextArchivesInputObject {
  year: sitePageContextArchivesYearQueryString | null;
  posts: sitePageContextArchivesPostsQueryList | null;
}

export interface sitePageContextArchivesYearQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextArchivesPostsQueryList {
  elemMatch: sitePageContextArchivesPostsInputObject | null;
}

export interface sitePageContextArchivesPostsInputObject {
  fields: sitePageContextArchivesPostsFieldsInputObject | null;
  frontmatter: sitePageContextArchivesPostsFrontmatterInputObject | null;
}

export interface sitePageContextArchivesPostsFieldsInputObject {
  slug: sitePageContextArchivesPostsFieldsSlugQueryString | null;
}

export interface sitePageContextArchivesPostsFieldsSlugQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextArchivesPostsFrontmatterInputObject {
  title: sitePageContextArchivesPostsFrontmatterTitleQueryString | null;
  tags: sitePageContextArchivesPostsFrontmatterTagsQueryList | null;
  createdDate: sitePageContextArchivesPostsFrontmatterCreatedDateQueryString | null;
  image: sitePageContextArchivesPostsFrontmatterImageInputObject | null;
}

export interface sitePageContextArchivesPostsFrontmatterTitleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextArchivesPostsFrontmatterTagsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextArchivesPostsFrontmatterCreatedDateQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextArchivesPostsFrontmatterImageInputObject {
  children: sitePageContextArchivesPostsFrontmatterImageChildrenQueryList | null;
}

export interface sitePageContextArchivesPostsFrontmatterImageChildrenQueryList {
  elemMatch: sitePageContextArchivesPostsFrontmatterImageChildrenInputObject | null;
}

export interface sitePageContextArchivesPostsFrontmatterImageChildrenInputObject {
  fixed: sitePageContextArchivesPostsFrontmatterImageChildrenFixedInputObject | null;
}

export interface sitePageContextArchivesPostsFrontmatterImageChildrenFixedInputObject {
  src: sitePageContextArchivesPostsFrontmatterImageChildrenFixedSrcQueryString | null;
  srcSet: sitePageContextArchivesPostsFrontmatterImageChildrenFixedSrcSetQueryString | null;
}

export interface sitePageContextArchivesPostsFrontmatterImageChildrenFixedSrcQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextArchivesPostsFrontmatterImageChildrenFixedSrcSetQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageContextTotalCountQueryInteger {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePagePluginCreatorInputObject {
  resolve: sitePagePluginCreatorResolveQueryString | null;
  id: sitePagePluginCreatorIdQueryString | null;
  name: sitePagePluginCreatorNameQueryString | null;
  version: sitePagePluginCreatorVersionQueryString | null;
  pluginOptions: sitePagePluginCreatorPluginOptionsInputObject | null;
  nodeAPIs: sitePagePluginCreatorNodeApIsQueryList | null;
  browserAPIs: sitePagePluginCreatorBrowserApIsQueryList | null;
  ssrAPIs: sitePagePluginCreatorSsrApIsQueryList | null;
  pluginFilepath: sitePagePluginCreatorPluginFilepathQueryString | null;
  packageJson: sitePagePluginCreatorPackageJsonInputObject | null;
  parent: sitePagePluginCreatorParentQueryString | null;
  internal: sitePagePluginCreatorInternalInputObject | null;
}

export interface sitePagePluginCreatorResolveQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorVersionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsInputObject {
  plugins: sitePagePluginCreatorPluginOptionsPluginsQueryList | null;
  pathToConfigModule: sitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString | null;
  trackingId: sitePagePluginCreatorPluginOptionsTrackingIdQueryString | null;
  head: sitePagePluginCreatorPluginOptionsHeadQueryBoolean | null;
  siteId: sitePagePluginCreatorPluginOptionsSiteIdQueryString | null;
  name: sitePagePluginCreatorPluginOptionsNameQueryString | null;
  short_name: sitePagePluginCreatorPluginOptionsShortNameQueryString | null;
  start_url: sitePagePluginCreatorPluginOptionsStartUrlQueryString | null;
  background_color: sitePagePluginCreatorPluginOptionsBackgroundColorQueryString | null;
  theme_color: sitePagePluginCreatorPluginOptionsThemeColorQueryString | null;
  display: sitePagePluginCreatorPluginOptionsDisplayQueryString | null;
  icon: sitePagePluginCreatorPluginOptionsIconQueryString | null;
  path: sitePagePluginCreatorPluginOptionsPathQueryString | null;
  maxWidth: sitePagePluginCreatorPluginOptionsMaxWidthQueryInteger | null;
  backgroundColor: sitePagePluginCreatorPluginOptionsBackgroundColorQueryString_2 | null;
  wrapperStyle: sitePagePluginCreatorPluginOptionsWrapperStyleQueryString | null;
  linkImagesToOriginal: sitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  showCaptions: sitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean | null;
  pathPrefix: sitePagePluginCreatorPluginOptionsPathPrefixQueryString | null;
  withWebp: sitePagePluginCreatorPluginOptionsWithWebpQueryBoolean | null;
  active: sitePagePluginCreatorPluginOptionsActiveQueryBoolean | null;
  class: sitePagePluginCreatorPluginOptionsClassQueryString | null;
  size: sitePagePluginCreatorPluginOptionsSizeQueryInteger | null;
  styles: sitePagePluginCreatorPluginOptionsStylesInputObject | null;
  attr: sitePagePluginCreatorPluginOptionsAttrQueryString | null;
  ignoreFileExtensions: sitePagePluginCreatorPluginOptionsIgnoreFileExtensionsQueryList | null;
  useMozJpeg: sitePagePluginCreatorPluginOptionsUseMozJpegQueryBoolean | null;
  stripMetadata: sitePagePluginCreatorPluginOptionsStripMetadataQueryBoolean | null;
  query: sitePagePluginCreatorPluginOptionsQueryQueryString | null;
  feeds: sitePagePluginCreatorPluginOptionsFeedsQueryList | null;
  pathCheck: sitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsQueryList {
  elemMatch: sitePagePluginCreatorPluginOptionsPluginsInputObject | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsInputObject {
  resolve: sitePagePluginCreatorPluginOptionsPluginsResolveQueryString | null;
  id: sitePagePluginCreatorPluginOptionsPluginsIdQueryString | null;
  name: sitePagePluginCreatorPluginOptionsPluginsNameQueryString | null;
  version: sitePagePluginCreatorPluginOptionsPluginsVersionQueryString | null;
  pluginOptions: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;
  browserAPIs: sitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList | null;
  ssrAPIs: sitePagePluginCreatorPluginOptionsPluginsSsrApIsQueryList | null;
  pluginFilepath: sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  maxWidth: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
  backgroundColor: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;
  wrapperStyle: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
  linkImagesToOriginal: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  showCaptions: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean | null;
  pathPrefix: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
  withWebp: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean | null;
  active: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsActiveQueryBoolean | null;
  class: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsClassQueryString | null;
  size: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsSizeQueryInteger | null;
  styles: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsStylesInputObject | null;
  attr: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsAttrQueryString | null;
  ignoreFileExtensions: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsActiveQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsClassQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsSizeQueryInteger {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsStylesInputObject {
  display: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsStylesDisplayQueryString | null;
  margin: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsStylesMarginQueryString | null;
  position: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsStylesPositionQueryString | null;
  width: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsStylesWidthQueryString | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsStylesDisplayQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsStylesMarginQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsStylesPositionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsStylesWidthQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsAttrQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsSsrApIsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsTrackingIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsHeadQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePagePluginCreatorPluginOptionsSiteIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsShortNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsStartUrlQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsThemeColorQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsDisplayQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsIconQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePagePluginCreatorPluginOptionsBackgroundColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsWrapperStyleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePagePluginCreatorPluginOptionsPathPrefixQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsWithWebpQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePagePluginCreatorPluginOptionsActiveQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePagePluginCreatorPluginOptionsClassQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsSizeQueryInteger {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePagePluginCreatorPluginOptionsStylesInputObject {
  display: sitePagePluginCreatorPluginOptionsStylesDisplayQueryString | null;
  margin: sitePagePluginCreatorPluginOptionsStylesMarginQueryString | null;
  position: sitePagePluginCreatorPluginOptionsStylesPositionQueryString | null;
  width: sitePagePluginCreatorPluginOptionsStylesWidthQueryString | null;
}

export interface sitePagePluginCreatorPluginOptionsStylesDisplayQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsStylesMarginQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsStylesPositionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsStylesWidthQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsAttrQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsIgnoreFileExtensionsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsUseMozJpegQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePagePluginCreatorPluginOptionsStripMetadataQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePagePluginCreatorPluginOptionsQueryQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsFeedsQueryList {
  elemMatch: sitePagePluginCreatorPluginOptionsFeedsInputObject | null;
}

export interface sitePagePluginCreatorPluginOptionsFeedsInputObject {
  query: sitePagePluginCreatorPluginOptionsFeedsQueryQueryString | null;
  output: sitePagePluginCreatorPluginOptionsFeedsOutputQueryString | null;
}

export interface sitePagePluginCreatorPluginOptionsFeedsQueryQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsFeedsOutputQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePagePluginCreatorNodeApIsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorBrowserApIsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorSsrApIsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPluginFilepathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPackageJsonInputObject {
  name: sitePagePluginCreatorPackageJsonNameQueryString | null;
  description: sitePagePluginCreatorPackageJsonDescriptionQueryString | null;
  version: sitePagePluginCreatorPackageJsonVersionQueryString | null;
  main: sitePagePluginCreatorPackageJsonMainQueryString | null;
  license: sitePagePluginCreatorPackageJsonLicenseQueryString | null;
  dependencies: sitePagePluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies: sitePagePluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies: sitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords: sitePagePluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePagePluginCreatorPackageJsonNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPackageJsonVersionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPackageJsonMainQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPackageJsonLicenseQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch: sitePagePluginCreatorPackageJsonDependenciesInputObject | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesInputObject {
  name: sitePagePluginCreatorPackageJsonDependenciesNameQueryString | null;
  version: sitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch: sitePagePluginCreatorPackageJsonDevDependenciesInputObject | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name: sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version: sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch: sitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name: sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version: sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorParentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorInternalInputObject {
  contentDigest: sitePagePluginCreatorInternalContentDigestQueryString | null;
  type: sitePagePluginCreatorInternalTypeQueryString | null;
  owner: sitePagePluginCreatorInternalOwnerQueryString | null;
}

export interface sitePagePluginCreatorInternalContentDigestQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorInternalTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorInternalOwnerQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePagePluginCreatorIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageComponentPathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageInternalInputObject_2 {
  type: sitePageInternalTypeQueryString_2 | null;
  contentDigest: sitePageInternalContentDigestQueryString_2 | null;
  description: sitePageInternalDescriptionQueryString | null;
  owner: sitePageInternalOwnerQueryString_2 | null;
}

export interface sitePageInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageInternalDescriptionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePageInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginResolveQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsInputObject_2 {
  plugins: sitePluginPluginOptionsPluginsQueryList_2 | null;
  pathToConfigModule: sitePluginPluginOptionsPathToConfigModuleQueryString_2 | null;
  trackingId: sitePluginPluginOptionsTrackingIdQueryString_2 | null;
  head: sitePluginPluginOptionsHeadQueryBoolean_2 | null;
  siteId: sitePluginPluginOptionsSiteIdQueryString_2 | null;
  name: sitePluginPluginOptionsNameQueryString_2 | null;
  short_name: sitePluginPluginOptionsShortNameQueryString_2 | null;
  start_url: sitePluginPluginOptionsStartUrlQueryString_2 | null;
  background_color: sitePluginPluginOptionsBackgroundColorQueryString_3 | null;
  theme_color: sitePluginPluginOptionsThemeColorQueryString_2 | null;
  display: sitePluginPluginOptionsDisplayQueryString_2 | null;
  icon: sitePluginPluginOptionsIconQueryString_2 | null;
  path: sitePluginPluginOptionsPathQueryString_2 | null;
  maxWidth: sitePluginPluginOptionsMaxWidthQueryInteger_2 | null;
  backgroundColor: sitePluginPluginOptionsBackgroundColorQueryString_4 | null;
  wrapperStyle: sitePluginPluginOptionsWrapperStyleQueryString_2 | null;
  linkImagesToOriginal: sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  showCaptions: sitePluginPluginOptionsShowCaptionsQueryBoolean_2 | null;
  pathPrefix: sitePluginPluginOptionsPathPrefixQueryString_2 | null;
  withWebp: sitePluginPluginOptionsWithWebpQueryBoolean_2 | null;
  active: sitePluginPluginOptionsActiveQueryBoolean_2 | null;
  class: sitePluginPluginOptionsClassQueryString_2 | null;
  size: sitePluginPluginOptionsSizeQueryInteger_2 | null;
  styles: sitePluginPluginOptionsStylesInputObject_2 | null;
  attr: sitePluginPluginOptionsAttrQueryString_2 | null;
  ignoreFileExtensions: sitePluginPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
  useMozJpeg: sitePluginPluginOptionsUseMozJpegQueryBoolean_2 | null;
  stripMetadata: sitePluginPluginOptionsStripMetadataQueryBoolean_2 | null;
  query: sitePluginPluginOptionsQueryQueryString_2 | null;
  feeds: sitePluginPluginOptionsFeedsQueryList_2 | null;
  pathCheck: sitePluginPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface sitePluginPluginOptionsPluginsQueryList_2 {
  elemMatch: sitePluginPluginOptionsPluginsInputObject_2 | null;
}

export interface sitePluginPluginOptionsPluginsInputObject_2 {
  resolve: sitePluginPluginOptionsPluginsResolveQueryString_2 | null;
  id: sitePluginPluginOptionsPluginsIdQueryString_2 | null;
  name: sitePluginPluginOptionsPluginsNameQueryString_2 | null;
  version: sitePluginPluginOptionsPluginsVersionQueryString_2 | null;
  pluginOptions: sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 | null;
  browserAPIs: sitePluginPluginOptionsPluginsBrowserApIsQueryList_2 | null;
  ssrAPIs: sitePluginPluginOptionsPluginsSsrApIsQueryList_2 | null;
  pluginFilepath: sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth: sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
  backgroundColor: sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
  wrapperStyle: sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
  linkImagesToOriginal: sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  showCaptions: sitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 | null;
  pathPrefix: sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
  withWebp: sitePluginPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2 | null;
  active: sitePluginPluginOptionsPluginsPluginOptionsActiveQueryBoolean_2 | null;
  class: sitePluginPluginOptionsPluginsPluginOptionsClassQueryString_2 | null;
  size: sitePluginPluginOptionsPluginsPluginOptionsSizeQueryInteger_2 | null;
  styles: sitePluginPluginOptionsPluginsPluginOptionsStylesInputObject_2 | null;
  attr: sitePluginPluginOptionsPluginsPluginOptionsAttrQueryString_2 | null;
  ignoreFileExtensions: sitePluginPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsWithWebpQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsActiveQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsClassQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsSizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsStylesInputObject_2 {
  display: sitePluginPluginOptionsPluginsPluginOptionsStylesDisplayQueryString_2 | null;
  margin: sitePluginPluginOptionsPluginsPluginOptionsStylesMarginQueryString_2 | null;
  position: sitePluginPluginOptionsPluginsPluginOptionsStylesPositionQueryString_2 | null;
  width: sitePluginPluginOptionsPluginsPluginOptionsStylesWidthQueryString_2 | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsStylesDisplayQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsStylesMarginQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsStylesPositionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsStylesWidthQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsAttrQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsSsrApIsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPathToConfigModuleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsTrackingIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsHeadQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginPluginOptionsSiteIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsShortNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsStartUrlQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsThemeColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsDisplayQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsIconQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsWrapperStyleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginPluginOptionsShowCaptionsQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginPluginOptionsPathPrefixQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsWithWebpQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginPluginOptionsActiveQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginPluginOptionsClassQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsSizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sitePluginPluginOptionsStylesInputObject_2 {
  display: sitePluginPluginOptionsStylesDisplayQueryString_2 | null;
  margin: sitePluginPluginOptionsStylesMarginQueryString_2 | null;
  position: sitePluginPluginOptionsStylesPositionQueryString_2 | null;
  width: sitePluginPluginOptionsStylesWidthQueryString_2 | null;
}

export interface sitePluginPluginOptionsStylesDisplayQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsStylesMarginQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsStylesPositionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsStylesWidthQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsAttrQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsUseMozJpegQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginPluginOptionsStripMetadataQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginPluginOptionsQueryQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsFeedsQueryList_2 {
  elemMatch: sitePluginPluginOptionsFeedsInputObject_2 | null;
}

export interface sitePluginPluginOptionsFeedsInputObject_2 {
  query: sitePluginPluginOptionsFeedsQueryQueryString_2 | null;
  output: sitePluginPluginOptionsFeedsOutputQueryString_2 | null;
}

export interface sitePluginPluginOptionsFeedsQueryQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsFeedsOutputQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface sitePluginNodeApIsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginBrowserApIsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginSsrApIsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPluginFilepathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPackageJsonInputObject_2 {
  name: sitePluginPackageJsonNameQueryString_2 | null;
  description: sitePluginPackageJsonDescriptionQueryString_2 | null;
  version: sitePluginPackageJsonVersionQueryString_2 | null;
  main: sitePluginPackageJsonMainQueryString_2 | null;
  license: sitePluginPackageJsonLicenseQueryString_2 | null;
  dependencies: sitePluginPackageJsonDependenciesQueryList_2 | null;
  devDependencies: sitePluginPackageJsonDevDependenciesQueryList_2 | null;
  peerDependencies: sitePluginPackageJsonPeerDependenciesQueryList_2 | null;
  keywords: sitePluginPackageJsonKeywordsQueryList_2 | null;
}

export interface sitePluginPackageJsonNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPackageJsonVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPackageJsonMainQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch: sitePluginPackageJsonDependenciesInputObject_2 | null;
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
  name: sitePluginPackageJsonDependenciesNameQueryString_2 | null;
  version: sitePluginPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch: sitePluginPackageJsonDevDependenciesInputObject_2 | null;
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
  name: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null;
  version: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch: sitePluginPackageJsonPeerDependenciesInputObject_2 | null;
}

export interface sitePluginPackageJsonPeerDependenciesInputObject_2 {
  name: sitePluginPackageJsonPeerDependenciesNameQueryString_2 | null;
  version: sitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginInternalInputObject_2 {
  contentDigest: sitePluginInternalContentDigestQueryString_2 | null;
  type: sitePluginInternalTypeQueryString_2 | null;
  owner: sitePluginInternalOwnerQueryString_2 | null;
}

export interface sitePluginInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePluginInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface siteSiteMetadataInputObject_2 {
  title: siteSiteMetadataTitleQueryString_2 | null;
  short_name: siteSiteMetadataShortNameQueryString_2 | null;
  start_url: siteSiteMetadataStartUrlQueryString_2 | null;
  icon: siteSiteMetadataIconQueryString_2 | null;
  description: siteSiteMetadataDescriptionQueryString_2 | null;
  siteUrl: siteSiteMetadataSiteUrlQueryString_2 | null;
}

export interface siteSiteMetadataTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface siteSiteMetadataShortNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface siteSiteMetadataStartUrlQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface siteSiteMetadataIconQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface siteSiteMetadataDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface siteSiteMetadataSiteUrlQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePortQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface siteHostQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePathPrefixQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sitePolyfillQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface siteBuildTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface siteIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface siteInternalInputObject_2 {
  contentDigest: siteInternalContentDigestQueryString_2 | null;
  type: siteInternalTypeQueryString_2 | null;
  owner: siteInternalOwnerQueryString_2 | null;
}

export interface siteInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface siteInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface siteInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface Site extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  siteMetadata: siteMetadata_2 | null;
  port: Date | null;
  host: string | null;
  pathPrefix: string | null;
  polyfill: boolean | null;
  buildTime: Date | null;
  internal: internal_16 | null;
}

export interface PortSiteArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface BuildTimeSiteArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface siteMetadata_2 {
  title: string | null;
  short_name: string | null;
  start_url: string | null;
  icon: string | null;
  description: string | null;
  siteUrl: string | null;
}

export interface internal_16 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface directoryIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryInternalInputObject_2 {
  contentDigest: directoryInternalContentDigestQueryString_2 | null;
  type: directoryInternalTypeQueryString_2 | null;
  description: directoryInternalDescriptionQueryString_2 | null;
  owner: directoryInternalOwnerQueryString_2 | null;
}

export interface directoryInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryInternalDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directorySourceInstanceNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryRelativePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryExtensionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directorySizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryPrettySizeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryModifiedTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryAccessTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryChangeTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryBirthTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryRootQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryDirQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryBaseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryExtQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryRelativeDirectoryQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryDevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryModeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryNlinkQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryUidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryGidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryRdevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryBlksizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryInoQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryBlocksQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryAtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryMtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryCtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryBirthtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface directoryAtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryMtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryCtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface directoryBirthtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileInternalInputObject_2 {
  contentDigest: fileInternalContentDigestQueryString_2 | null;
  type: fileInternalTypeQueryString_2 | null;
  mediaType: fileInternalMediaTypeQueryString_2 | null;
  description: fileInternalDescriptionQueryString_2 | null;
  owner: fileInternalOwnerQueryString_2 | null;
}

export interface fileInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileInternalMediaTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileInternalDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileSourceInstanceNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileRelativePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileExtensionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileSizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface filePrettySizeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileModifiedTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileAccessTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileChangeTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileBirthTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileRootQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileDirQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileBaseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileExtQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileRelativeDirectoryQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileDevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileModeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileNlinkQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileUidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileGidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileRdevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileBlksizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileInoQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileBlocksQueryInteger_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileAtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileMtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileCtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileBirthtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fileAtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileMtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileCtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fileBirthtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface publicUrlQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface imageSharpIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface imageSharpInternalInputObject_2 {
  contentDigest: imageSharpInternalContentDigestQueryString_2 | null;
  type: imageSharpInternalTypeQueryString_2 | null;
  owner: imageSharpInternalOwnerQueryString_2 | null;
}

export interface imageSharpInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface imageSharpInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface imageSharpInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedTypeName_3 {
  base64: fixedBase64QueryString_3 | null;
  tracedSVG: fixedTracedSvgQueryString_3 | null;
  aspectRatio: fixedAspectRatioQueryFloat_3 | null;
  width: fixedWidthQueryFloat_3 | null;
  height: fixedHeightQueryFloat_3 | null;
  src: fixedSrcQueryString_3 | null;
  srcSet: fixedSrcSetQueryString_3 | null;
  srcWebp: fixedSrcWebpQueryString_3 | null;
  srcSetWebp: fixedSrcSetWebpQueryString_3 | null;
  originalName: fixedOriginalNameQueryString_3 | null;
}

export interface fixedBase64QueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedTracedSvgQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedAspectRatioQueryFloat_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fixedWidthQueryFloat_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fixedHeightQueryFloat_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fixedSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedSrcSetQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedSrcWebpQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedSrcSetWebpQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fixedOriginalNameQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsTypeName_3 {
  base64: resolutionsBase64QueryString_3 | null;
  tracedSVG: resolutionsTracedSvgQueryString_3 | null;
  aspectRatio: resolutionsAspectRatioQueryFloat_3 | null;
  width: resolutionsWidthQueryFloat_3 | null;
  height: resolutionsHeightQueryFloat_3 | null;
  src: resolutionsSrcQueryString_3 | null;
  srcSet: resolutionsSrcSetQueryString_3 | null;
  srcWebp: resolutionsSrcWebpQueryString_3 | null;
  srcSetWebp: resolutionsSrcSetWebpQueryString_3 | null;
  originalName: resolutionsOriginalNameQueryString_3 | null;
}

export interface resolutionsBase64QueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsTracedSvgQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsAspectRatioQueryFloat_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface resolutionsWidthQueryFloat_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface resolutionsHeightQueryFloat_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface resolutionsSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsSrcSetQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsSrcWebpQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsSrcSetWebpQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resolutionsOriginalNameQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidTypeName_3 {
  base64: fluidBase64QueryString_3 | null;
  tracedSVG: fluidTracedSvgQueryString_3 | null;
  aspectRatio: fluidAspectRatioQueryFloat_3 | null;
  src: fluidSrcQueryString_3 | null;
  srcSet: fluidSrcSetQueryString_3 | null;
  srcWebp: fluidSrcWebpQueryString_3 | null;
  srcSetWebp: fluidSrcSetWebpQueryString_3 | null;
  sizes: fluidSizesQueryString_3 | null;
  originalImg: fluidOriginalImgQueryString_3 | null;
  originalName: fluidOriginalNameQueryString_3 | null;
  presentationWidth: fluidPresentationWidthQueryInt_3 | null;
  presentationHeight: fluidPresentationHeightQueryInt_3 | null;
}

export interface fluidBase64QueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidTracedSvgQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidAspectRatioQueryFloat_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fluidSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidSrcSetQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidSrcWebpQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidSrcSetWebpQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidSizesQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidOriginalImgQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidOriginalNameQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface fluidPresentationWidthQueryInt_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface fluidPresentationHeightQueryInt_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sizesTypeName_3 {
  base64: sizesBase64QueryString_3 | null;
  tracedSVG: sizesTracedSvgQueryString_3 | null;
  aspectRatio: sizesAspectRatioQueryFloat_3 | null;
  src: sizesSrcQueryString_3 | null;
  srcSet: sizesSrcSetQueryString_3 | null;
  srcWebp: sizesSrcWebpQueryString_3 | null;
  srcSetWebp: sizesSrcSetWebpQueryString_3 | null;
  sizes: sizesSizesQueryString_3 | null;
  originalImg: sizesOriginalImgQueryString_3 | null;
  originalName: sizesOriginalNameQueryString_3 | null;
  presentationWidth: sizesPresentationWidthQueryInt_3 | null;
  presentationHeight: sizesPresentationHeightQueryInt_3 | null;
}

export interface sizesBase64QueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesTracedSvgQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesAspectRatioQueryFloat_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sizesSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesSrcSetQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesSrcWebpQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesSrcSetWebpQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesSizesQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesOriginalImgQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesOriginalNameQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface sizesPresentationWidthQueryInt_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface sizesPresentationHeightQueryInt_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface originalTypeName_3 {
  width: originalWidthQueryFloat_3 | null;
  height: originalHeightQueryFloat_3 | null;
  src: originalSrcQueryString_3 | null;
}

export interface originalWidthQueryFloat_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface originalHeightQueryFloat_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface originalSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resizeTypeName_3 {
  src: resizeSrcQueryString_3 | null;
  tracedSVG: resizeTracedSvgQueryString_3 | null;
  width: resizeWidthQueryInt_3 | null;
  height: resizeHeightQueryInt_3 | null;
  aspectRatio: resizeAspectRatioQueryFloat_3 | null;
  originalName: resizeOriginalNameQueryString_3 | null;
}

export interface resizeSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resizeTracedSvgQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface resizeWidthQueryInt_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface resizeHeightQueryInt_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface resizeAspectRatioQueryFloat_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface resizeOriginalNameQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkInternalInputObject_2 {
  content: markdownRemarkInternalContentQueryString_2 | null;
  type: markdownRemarkInternalTypeQueryString_2 | null;
  contentDigest: markdownRemarkInternalContentDigestQueryString_2 | null;
  owner: markdownRemarkInternalOwnerQueryString_2 | null;
  fieldOwners: markdownRemarkInternalFieldOwnersInputObject_2 | null;
}

export interface markdownRemarkInternalContentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkInternalFieldOwnersInputObject_2 {
  slug: markdownRemarkInternalFieldOwnersSlugQueryString_2 | null;
}

export interface markdownRemarkInternalFieldOwnersSlugQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkFrontmatterInputObject_2 {
  title: markdownRemarkFrontmatterTitleQueryString_2 | null;
  _PARENT: markdownRemarkFrontmatterParentQueryString_2 | null;
  createdDate: markdownRemarkFrontmatterCreatedDateQueryString_2 | null;
  updatedDate: markdownRemarkFrontmatterUpdatedDateQueryString_2 | null;
  author: markdownRemarkFrontmatterAuthorQueryString_2 | null;
  tags: markdownRemarkFrontmatterTagsQueryList_2 | null;
  image: markdownRemarkFrontmatterImageQueryString_2 | null;
  origin: markdownRemarkFrontmatterOriginQueryBoolean_2 | null;
  draft: markdownRemarkFrontmatterDraftQueryBoolean_2 | null;
}

export interface markdownRemarkFrontmatterTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkFrontmatterParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkFrontmatterCreatedDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkFrontmatterUpdatedDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkFrontmatterAuthorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkFrontmatterTagsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkFrontmatterImageQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkFrontmatterOriginQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface markdownRemarkFrontmatterDraftQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
  in: Array<boolean> | null;
  nin: Array<boolean> | null;
}

export interface markdownRemarkRawMarkdownBodyQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkFileAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface markdownRemarkFieldsInputObject_2 {
  slug: markdownRemarkFieldsSlugQueryString_2 | null;
}

export interface markdownRemarkFieldsSlugQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface htmlQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface excerptQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface headingsQueryList_3 {
  elemMatch: headingsListElemTypeName_3 | null;
}

export interface headingsListElemTypeName_3 {
  value: headingsListElemValueQueryString_3 | null;
  depth: headingsListElemDepthQueryInt_3 | null;
}

export interface headingsListElemValueQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface headingsListElemDepthQueryInt_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface timeToReadQueryInt_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface tableOfContentsQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface wordCountTypeName_3 {
  paragraphs: wordCountParagraphsQueryInt_3 | null;
  sentences: wordCountSentencesQueryInt_3 | null;
  words: wordCountWordsQueryInt_3 | null;
}

export interface wordCountParagraphsQueryInt_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface wordCountSentencesQueryInt_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface wordCountWordsQueryInt_3 {
  eq: number | null;
  ne: number | null;
  gt: number | null;
  gte: number | null;
  lt: number | null;
  lte: number | null;
  in: Array<number> | null;
  nin: Array<number> | null;
}

export interface dataJsonAuthorInputObject_2 {
  name: dataJsonAuthorNameQueryString_2 | null;
  avatar: dataJsonAuthorAvatarQueryString_2 | null;
}

export interface dataJsonAuthorNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonAuthorAvatarQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonSpeechQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonGitmentInputObject_2 {
  owner: dataJsonGitmentOwnerQueryString_2 | null;
  repo: dataJsonGitmentRepoQueryString_2 | null;
  oauth: dataJsonGitmentOauthInputObject_2 | null;
  crossServer: dataJsonGitmentCrossServerQueryString_2 | null;
}

export interface dataJsonGitmentOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonGitmentRepoQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonGitmentOauthInputObject_2 {
  client_id: dataJsonGitmentOauthClientIdQueryString_2 | null;
  client_secret: dataJsonGitmentOauthClientSecretQueryString_2 | null;
}

export interface dataJsonGitmentOauthClientIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonGitmentOauthClientSecretQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonGitmentCrossServerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonInternalInputObject_2 {
  contentDigest: dataJsonInternalContentDigestQueryString_2 | null;
  type: dataJsonInternalTypeQueryString_2 | null;
  owner: dataJsonInternalOwnerQueryString_2 | null;
}

export interface dataJsonInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}

export interface dataJsonInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
  nin: Array<string> | null;
}
