// 这里是我要用一些配置信息
const {override, fixBabelImports, addDecoratorsLegacy, addPostcssPlugins, addWebpackAlias, addLessLoader, overrideDevServer } = require('customize-cra');
const path = require('path');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const rewireCssModules = require('react-app-rewire-css-modules');

const ENV = {
  DEV: 'https://api.xxx.com',
  PROD: 'https://api.xxx.com'
};

const devServerConfig = () => config => {
  return {
    ...config,
    proxy: {
      '/dapi': {
        target: ENV.DEV,
        changeOrigin: true,
        secure: false,
        pathRewrite: { '/dapi': '' }
      }
    }
  };
};

const alter_config= () => (config, env) => {
  //css模块化
  config = rewireCssModules(config, env);

  const oneOf_loc= config.module.rules.findIndex(n => n.oneOf);
  config.module.rules.push({
    // 解析jsx文件类型
      test: /\.jsx?$/,
      use: {
        loader: "babel-loader",
        options: {
         presets: ["@babel/env", "@babel/react"]
         }
      }
    },
    {
      test: /\.(js|jsx|mjs)$/,
      enforce: 'pre',
      use: [
        {
          options: {
            formatter: eslintFormatter,
            eslintPath: require.resolve('eslint')

          },
          loader: require.resolve('eslint-loader')
        }
      ],
      include: path.appSrc
    },
    {
      test: /\.ts(x?)$/,
      use: [
        {
          loader: 'awesome-typescript-loader',
          options: {}
        }
      ]
  });
  config.module.rules[oneOf_loc].oneOf=[ //例如要增加处理less的配置
      {
          test: /\.less$/,
          use: [
              require.resolve('style-loader'),
              {
                  loader: require.resolve('css-loader'),
                  options: {
                      importLoaders: 1,
                      modules: true
                  }
              },
              {
                  loader: 'less-loader'
              }
          ]
      },
      ...config.module.rules[oneOf_loc].oneOf
  ];
  return config;
};

// 关掉 sourceMap
process.env.GENERATE_SOURCEMAP = process.env.NODE_ENV === 'development' ? 'true' : 'false';

module.exports = {
  webpack: override(
      alter_config(),   //将自定义配置组合进来
      // 增加路径别名的处理
      addWebpackAlias({
        ['@']: path.resolve(__dirname, 'src'),
        ['components']: path.resolve(__dirname, 'src/components')
      }),
      // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
      // babel-plugin-import
      fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css'
      }),
      // postcss-pxtorem
      addPostcssPlugins([require('postcss-pxtorem')({
        rootValue: 16,
        propList: ['*']
        // propWhiteList: [],
        // selectorBlackList: ['weui-']
      })]),
      //引入less编译
      addLessLoader(),
      //由于 react-app-rewire v2.0 以上版本已经移除了 getBabelLoader ，需要使用 customize-cra 库的 addBabelPlugins 方法代替
      addDecoratorsLegacy()
  ),
  devServer: overrideDevServer(devServerConfig())
};
