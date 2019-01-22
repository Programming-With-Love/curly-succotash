# curly-succotash

一个最新搭建并且将一直保持更新的基于 gatsby 的静态博客。

- [Demo](https://curly.zido.site/)
- [zido 的个人博客](https://www.zido.site)

## 特性

- react/redux/单页面

- google/百度搜索统计

- seo 优化

- 美观大方

- typescript/sass

- 自带辅助工具，用于生成博文

- travis 自动集成，自动部署博客

## 注意

本博客推荐使用 github-pages 等静态服务部署（教程见下文）。当然你也可以使用任何服务器部署

无论如何都需要注意如下几点：

- 不论使用何种方式部署项目，都需要使用根目录(`/`)暴露页面地址。也即是类似`https://zido.site/`这样的地址访问首页，不能使用任何前缀，目前不支持。如果使用 github-pages 部署，不使用自定义域名的情况下，项目名一定要是`${用户名}.github.io`，这是 github-pages 服务的规则。这之后才能使用`http://${用户名}.github.io`进行访问。具体细节请查看 github-pages 说明

- 本项目为单人博客，暂时不可用作团队/多人博客(无多作者配置)。

- 在编写工作配置时请务必确保当前分支**不在**master上

## 使用

### 获取源代码

克隆仓库：执行命令`git clone --depth 1 https://github.com/zidoshare/curly-succotash.git`。

> 也可以直接 fork 本仓库，执行命令:`git clone https://github.com/zidoshare/curly-succotash.git`

`cd culry-succotash`

`npm install` 或者 `yarn`安装依赖

### 预览博客

执行 `npm run start` 或者 `yarn start`。访问 [http://localhost:8000](http://localhost:8000)。即可看到示例，如果没有任何问题，那么本地的样子应该与[Demo](https://curly.zido.site)保持一致。

### 修改配置

配置文件位置主要有两个，分别是：`gatsby-config.js`和`data/data.json`。分别用于配置网站元信息和作者信息

`gatsby-config.js`: 作出如下配置即可

```javascript
const config = {
  siteMetadata: {
    // 博客名
    title: `zido的个人博客`,
    short_name: `zido的个人博客`,
    start_url: `/`,
    icon: `data/avatar.jpg`,
    //博客简介
    description: `前后端全栈分享，java/js/golang`,
    //网站url地址，如果不是自定义域名而是采用github-pages等静态地址，请使用`${用户名}.github.io`
    siteUrl: `https://www.zido.site`,
  },
  analytics: {
    google: {
      trackingId: 'UA-120357572-1', //不想接入google统计请求空
    },
    baidu: {
      siteId: '4b78d088162a5bab97170b43a565bb06', //不想接入百度统计请求空
    },
  },
}
```

#### 如何获取 google 统计 id？

登陆 google 统计网站 [https://analytics.google.com](https://analytics.google.com)。点击 `管理`->`账号`->`用户`->翻到最下面即可知道自己的 google 统计 id。

#### 如何获取百度统计 id？

登陆百度统计网站 [tongji.baidu.com](tongji.baidu.com)。点击 `管理`->`网站列表`->`自有网站`->`获取代码`。看到几行如下的代码：

```html
<script>
  var _hmt = _hmt || []
  ;(function() {
    var hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?4b78d088162a5bab97170b43a565bb06'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })()
</script>
```

其中的`4b78d088162a5bab97170b43a565bb06`就是你的百度统计 id。

`data/data.json`: 作出如下配置即可

```json
{
  "author": {
    "name": "作者名",
    "avatar": "作者头像路径（图片务必放在data目录下）"
  },
  "speech": ["页头滚动文字", "使用数组格式", "任意长度"],
  "gitment": {
    "owner": "github用户名",
    "repo": "github用户仓库",
    "oauth": {
      "client_id": "github oauth认证id",
      "client_secret": "github oauth认证密钥"
    },
    "crossServer": "认证跨域服务器（如果不了解，请不要更改。默认服务器如过失效，请查阅本仓库，一般会及时补上最新的）"
  },
  "menu": [
    {
      "path": "/about",
      "name": "关于我"
    },
    {
      "path": "http://github.com/zidoshare",
      "name": "github"
    }
  ]
}
```

gitment 字段用于配置文章评论，会出现在所有 markdown 文档页面下。如：`博文`，`通过markdown文章自定义的页面`

`menu` 为附加菜单,如果是内部连接，请务必以`/`开头，否则一律视为外部链接

#### 如何获取 github oauth

进入并登陆 github，`用户`->`settings`->`developer settings`（[传送门](https://github.com/settings/developers)直达）。点击`new Oauth App`,添加相关资料。
本人填写如下：

```
Application name: zido's blog
Homepage URL: https://www.zido.site
Application description: blog build by gatsby 2.0
Authorization callback URL: https://www.zido.site
```

点击保存即可看到相关字段，填写到配置中即可

#### 关于认证跨域服务器地址（crossServer 字段）

github oauth 需要跨域连接，但静态页面无法配置跨域，所以需要一个中间服务器进行跨域代理。而原本的 gitment 项目不再维护，原作者的跨域服务器 https 证书过期，有热心 githuber 提供了自己搭建的跨域中转地址。详情见[此 issues](https://github.com/imsun/gitment/issues/170)。看到有人搭建了，本着懒人策略就懒得搭建了，但是为了后续可能出现的影响使用的问题，fork 了原 gitment 项目，在设置中添加了 crossServer 字段让用户能够选择不同的跨域服务器。

> 如果有人觉得不错，也可以直接使用，`npm install --save z-gitment`安装即可，[项目地址](https://github.com/zidoshare/gitment.git)。

### 自定义域名

> 不是自定义域名并在各个代码托管服务中使用 gh-pages 服务（例如 github,coding,码云等）搭建本博客的请务必删除 `static/CNAME` 文件。

进入 github 仓库，`settings` -> 首页下翻找到`Github pages`项，设置`Source` 为`master branch`

修改 statc/CNAME 文件中的地址为你的 url 地址。

### 编写文章

> 你可以删除三篇示例文章

执行 `yarn generate` 或者 `npm run generate`，生成文章模板，会提示填写文章名等信息，按照提示填写即可。

文章生成完毕后，打开生成的 markdown 文件。

**你必须修改 image 字段**，可以选择删除，这样会使用默认的`data/headers/`下面的图片，你可以添加更多的图片进去（命名无要求），从而让你的博客有更多的图片自动选择，请注意，在你每一次构建之后，文章对应的图片都会被修改（因为是随机的）。

草稿文章将会被隐藏，对应字段是`draft`。<del><font color="#fff">_悄悄告诉你，通过某个彩蛋可以找到这些文章_</font></del>

原创文章会被标注原创标示，请谨慎使用，对应字段是`origin`。

之后，删除默认内容，即可开始你的创作

### 创建页面

#### 使用 markdown 创建页面

你只需要在`data`目录下的`blog`文件夹之外的任意路径，创建 markdown 文件即可，参考`data/about.md`。按照路径进行 url 映射，例如`data/about.md`映射到`/about`,`data/about/a.md`->`/about/a`,其中，如果文件命名为`index.md`，则使用上层路径，根目录不要使用 `index.md`命名。

使用这种方式的markdown文件本质与博文没有区别，但是博客内部逻辑会将其与博文分开，单独构建为页面。你依然可以像文章一样设置tag，image等信息。只会显示，不会参与博文相关逻辑。

#### 使用代码创建页面

> 注意，使用此方式，你需要了解typescript/react等知识

如果只是简单的静态页面。直接在`src/pages`创建`tsx`文件即可，与正常react页面开发无太大区别。

如果需要数据交互，请参考[gatsby官方文档](https://www.gatsbyjs.org/tutorial/)

### 部署博客

请务必确保当前分支**不在master**上

#### 使用项目自带travis自动集成

> 请务必确认travis配置文件是否正确编写

项目默认使用build分支作为构建分支,此分支专门用于在dev分支上编写完相关博文或配置时，提交给build分支，以让travis进行自动集成。

自动集成博客流程：

```
dev分支编写项目->提交到dev分支，做为存档
 |
 |
 提交到build分支->travis捕捉到提交->自动构建并部署到master分支。
```

当然你可以显式的修改travis配置文件，以让它能够适应你的部署方式。

##### 配置travis

进入[travis官方网站](travis-ci.org)。注册并登陆。进入[账户设置页面](https://travis-ci.org/account/repositories)。同步你的博客项目（打开开关），点击`settings`。
找到**Environment Variables**项。添加环境参数如下（值为我的配置示例）：

```

GH_REF  （仓库地址）：github.com/zidoshare/zidoshare.github.io
 
GH_TOKEN （github token）: ••••••••••••••••
 
P_BRANCH  (github静态服务分支，推荐为master， 你也可以设置为gh-pages。那么上面的关于gh-pages的设置也需要修改为gh-pages)：master
 
U_EMAIL (个人邮箱):wuhongxu1208@gmail.com
 
U_NAME  (用户名):zidoshare

```

关于token获取：

登陆并进入[github](https://github.com),进入settings->Developer settins->Personal access tokens（[传送门](https://github.com/settings/tokens)）,点击`generate new token`。输入密码，至于权限设置，看个人，避免麻烦，可以把除`delete_repo`的选项全部勾上，设置名字，生成，便能够得到token。复制下来，填写到上面的`GH_TOKEN`的值中即可。

通过以上步骤就完成了travis自动集成。

修改完配置之后，提交代码到`build`分支即可。

以下为一般情况下的提交命令：

```

git add .
git commit -m "update project"
git push
git push origin dev:build

```

你可以在travis中将
```
  - git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" build:${P_BRANCH}
branches:
  only:
    - build
```
修改为：

```
  - git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" dev:${P_BRANCH}
branches:
  only:
    - dev
```

这样设置之后，就无需`git push origin dev:build`命令。便能够直接集成

提交之后喝杯咖啡，等待travis自动构建完成。

#### 自行构建集成说明

不推荐自动构建集成。所以也就不提供完整的步骤，只做简单说明：运行`npm run build`等待构建,`public/`为构建出来的包,将public提交到静态服务分支即可。