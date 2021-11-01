'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540625711644_3325';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.cors = {
    origin: '*',
    allowHeaders: 'Authorization,Origin, X-Requested-With, Content-Type, Accept, X-Admin-Token, X-Admin-Version',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.cache = {
    default: 'memory',
    stores: {
      memory: {
        driver: 'memory',
        max: 100,
        ttl: 3600 * 3,
      },
    },
  };

  config.jwt = {
    secret: 'f40499b377933f39cc9e7634323669e0',
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '10.147.17.217',
    port: 13306,
    database: 'nideshop',
    username: 'root',
    password: '1',
  };

  return config;
};
