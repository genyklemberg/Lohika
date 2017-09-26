import {environment as prod_env} from './environment.prod';

export const environment = Object.assign({}, prod_env, {
  production: false,
});
