import type { IApi } from '@umijs/types';
import { Mustache } from '@umijs/utils';
import { join } from 'path';
import { readFileSync } from 'fs';

const DIR_NAME = 'plugin-url-local';
export default (api: IApi) => {
  // disable if routes if configured
  if (api.userConfig.routes) return;

  api.describe({
    key: 'urlLocal',
    config: {
      schema(joi) {
        return joi.object({
          alias: joi.object(),
        });
      },
    },
  });
  
  api.onGenerateFiles({
    fn() {
      const { urlLocal = {} } = api.config;
      // runtime.tsx
      const runtimeTpl = readFileSync(join(__dirname, 'runtime.tpl'), 'utf-8');
      api.writeTmpFile({
        path: `${DIR_NAME}/runtime.tsx`,
        content: Mustache.render(runtimeTpl, {
          alias: JSON.stringify(urlLocal.alias || {}),
          urlLocal: JSON.stringify(urlLocal || {}),
        }),
      });
    },
  });
  // Runtime Plugin
  api.addRuntimePlugin(() => [join(api.paths.absTmpPath!, `${DIR_NAME}/runtime.tsx`)]);
};
