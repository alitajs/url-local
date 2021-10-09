import { IRoute } from '@umijs/types';
// @ts-ignore
import { getAllLocales } from 'umi';

interface IExtend {
  alias?: object;
}

export default function (routes: IRoute[], extendOps: IExtend) {
  try {
    const { alias = {} } = extendOps;
    const allLocales = getAllLocales() || ([] as string[]);
    if (!allLocales || allLocales.length === 0) return routes;
    const newRoutes = [] as any[];
    routes.forEach((route) => {
      allLocales.forEach((locale: string) => {
        newRoutes.push(
          {
            ...route,
            path: `/${alias[locale] || locale}${route.path}`,
          },
        );
      });
    });
    newRoutes.forEach((route) => {
      routes.unshift(route);
    });
    return routes;
  } catch (error) {
    return routes;
  }
}
