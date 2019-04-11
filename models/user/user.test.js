require('../../data/db')()
const dao = require('./user.dao.server')
dao.find({'username': 'ada'}).then(response => console.log(response))
