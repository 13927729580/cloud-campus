const { mysql } = require('../qcloud')
module.exports = async ctx => {
  let query = ctx.request.body;
  let level = query.level
  try {    
    var sql = "select * from client_navigation where state = 'on' and level >=" + level
    var result = await mysql.schema.raw(sql)
    result = result[0]
    ctx.state.data = { result }
  }
  catch (err) {
    ctx.state.data = { err }
  }

}
