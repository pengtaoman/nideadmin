'use strict';

const Controller = require('egg').Controller;

class MysqlController extends Controller {

  async query() {
    const ctx = this.ctx;
    const result = await ctx.service.mysql.query();
    ctx.body = JSON.stringify(result);
  }
}

module.exports = MysqlController;
