// app/service/news.js
const Service = require('egg').Service;

class MysqlService extends Service {
  async query() {
    const queryStr = 'select * from nideshop_brand nb'
    const queryResult = await this.app.mysql.query(queryStr);
    return queryResult
  }
}

module.exports = MysqlService;