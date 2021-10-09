# @alitajs/url-local

根据访问的url，自动切换语言。

比如 `/en-US/demo` 自动切换为英文，

可通过配置别名，比如 `/en/demo` 也会自动切换成英文.

```
yarn add @alitajs/url-local --dev
```

> 要求：必须有安装 @umijs/plugin-locale

增加配置

```
import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['@alitajs/url-local'],
  urlLocal: {
    alias: {
      'zh-CN': 'zh',
      'zh-TW': 'zhtw',
      'en-US': 'en',
    },
  },
  locale: {
    default: 'zh-CN',
    baseNavigator: true,
    baseSeparator: '-',
  },
});

```

# 开发调试

运行 demo 

```
cd demo
yarn
yarn start
```

编译插件 

```
yarn build
```