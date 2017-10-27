import {hello} from './app/hello/hello';
import {footer} from './app/footer/footer';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('footer', footer)
  .component('hello', hello);
