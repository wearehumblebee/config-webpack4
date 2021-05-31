import { DevelopmentConfiguration } from './development';
import { ProductionConfiguration } from './production';
import getWebpackConfiguration from './get-webpack-configuration';

export type {
  // Development specific configuration and types
  DevelopmentConfiguration,
  // Production specific configuration and types
  ProductionConfiguration,
};

export {
  // Helpers
  getWebpackConfiguration,
};
