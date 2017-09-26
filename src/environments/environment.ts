import {environment as prod} from './environment.prod';

export const environment = Object.assign({}, shared, {
  production: false,
};
