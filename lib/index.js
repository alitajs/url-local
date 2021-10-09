"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _utils() {
  const data = require("@umijs/utils");

  _utils = function _utils() {
    return data;
  };

  return data;
}

function _path() {
  const data = require("path");

  _path = function _path() {
    return data;
  };

  return data;
}

function _fs() {
  const data = require("fs");

  _fs = function _fs() {
    return data;
  };

  return data;
}

const DIR_NAME = 'plugin-url-local';

var _default = api => {
  // disable if routes if configured
  if (api.userConfig.routes) return;
  api.describe({
    key: 'urlLocal',
    config: {
      schema(joi) {
        return joi.object({
          alias: joi.object()
        });
      }

    }
  });
  api.onGenerateFiles({
    fn() {
      const _api$config$urlLocal = api.config.urlLocal,
            urlLocal = _api$config$urlLocal === void 0 ? {} : _api$config$urlLocal; // runtime.tsx

      const runtimeTpl = (0, _fs().readFileSync)((0, _path().join)(__dirname, 'runtime.tpl'), 'utf-8');
      api.writeTmpFile({
        path: `${DIR_NAME}/runtime.tsx`,
        content: _utils().Mustache.render(runtimeTpl, {
          alias: JSON.stringify(urlLocal.alias || {}),
          urlLocal: JSON.stringify(urlLocal || {})
        })
      });
    }

  }); // Runtime Plugin

  api.addRuntimePlugin(() => [(0, _path().join)(api.paths.absTmpPath, `${DIR_NAME}/runtime.tsx`)]);
};

exports.default = _default;