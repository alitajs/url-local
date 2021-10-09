import { setLocale, getAllLocales } from 'umi';
import extend from '@alitajs/url-local/lib/extend';

const alias = JSON.parse('{{{alias}}}');
export function onRouteChange({ location }) {
  const allLocales = getAllLocales() || ([] as string[]);
  if (!allLocales || allLocales.length === 0) return;
  let local = location.pathname.split('/')[1];
  if (!local) return;
  Object.keys(alias).forEach(key => {
    if (alias[key] === local) {
      local = key;
    }
  })
  if (allLocales.indexOf(local) === -1) {
    local = 'zh-CN';
  };
  setLocale(local, false);
}

export function patchRoutes({ routes }) {
  routes = extend(routes, JSON.parse('{{{urlLocal}}}'));
}