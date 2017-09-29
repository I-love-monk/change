# hzl_upload

> hzl上传

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9003
npm run dev

# build for production with minification
npm run build


Vue目录注解

|-- build				放置webpack的配置文件

|-- config                                   项目开发环境配置

|-- src	      			源码目录		
|   |-- api				接口信息
|   |   |--  config.js		接口信息接收,加密等处理
|   |   |--  index.js		接口信息的管理
|   |-- assets			放置样式表和图片信息
|   |   |--  css			样式文件
|   |   |   |-- index.less	图标样式
|   |   |   |-- reset.less	初始化样式
|   |   |   |-- variable.less	颜色样式
|   |-- components 						  放置项目组件
|   |   |   |-- common				  公共组件（地址，表单，输入框等组件）
|   |-- router							  路由（开发中路由和需要登录配置）
|   |-- store							  状态
|   |-- utils							  工具类文件
|   |-- views							  页面代码

