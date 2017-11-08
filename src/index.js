import ApiModule from './app/api/module';
import CommonModule from './app/common/module';
import HelloModule from './app/hello/module';
import routesConfig from './routes';

import './index.scss';

export const AppModule = 'app';

angular
  .module(AppModule, [
    'ui.router',
    ApiModule,
    CommonModule,
    HelloModule
  ])
  .config(routesConfig);
