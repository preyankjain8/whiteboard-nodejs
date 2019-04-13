const universityDao = require('../data/daos/university.dao.server')
module.exports = function(app){

    app.delete('/api/all', truncateDatabase)
    app.post('/api/populate', populateDatabase)

    function truncateDatabase(req, res){
        universityDao.truncateDatabase()
        res.send({
            deleted: true
        })
    }

    function populateDatabase (req, res){
        universityDao.populateDatabase()
        res.send({
            pouplated: true
        })
    }
}
