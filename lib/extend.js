"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _umi() {
  const data = require("umi");

  _umi = function _umi() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default(routes, extendOps) {
  try {
    const _extendOps$alias = extendOps.alias,
          alias = _extendOps$alias === void 0 ? {} : _extendOps$alias;
    const allLocales = (0, _umi().getAllLocales)() || [];
    if (!allLocales || allLocales.length === 0) return routes;
    const newRoutes = [];
    routes.forEach(route => {
      allLocales.forEach(locale => {
        newRoutes.push(_objectSpread(_objectSpread({}, route), {}, {
          path: `/${alias[locale] || locale}${route.path}`
        }));
      });
    });
    newRoutes.forEach(route => {
      routes.unshift(route);
    });
    return routes;
  } catch (error) {
    return routes;
  }
}