import Tools from './tools.service';

const ApiModule = 'app.api';

export default ApiModule;

angular
  .module(ApiModule, [])
  .service('Tools', Tools);
