### 这是基于creat-react-app搭建的移动端环境

# 其中已经配置好 react-router、postcss-pxtorem、axios、less以及重写 eslint规则;

# 编写rem 转换 可以按照 750设计稿尺寸开发移动端

# 配置react-app-rewired 自定义 web.config

# 配置好开发环境代理，在config-overrides.js文件中更改 代理接口地址即可

### 使用

yarn install 

#

yarn start 启动

### 注意事项：

# babel-loader 版本与 react-app 关联比较高,低版本编译会出错，目前8.1.0；

# 如axios请求需携带cookis，可在.utils/axios中配置 withCredentials = true；

# webpack.config 定义在config-overrides.js文件中；

# 如果路由要使用BrowserRouter as Router 这种方式 需要在服务器上进行配置对应路径，具体查看 HashRouter 与 BrowserRouter 打包相关；