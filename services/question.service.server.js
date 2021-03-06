const universityDao = require('../data/daos/university.dao.server')
module.exports = function(app){

    app.put('/api/question/:questionId', updateQuestion)
    app.delete('/api/question/:questionId', deleteQuestion)
    app.get('/api/question/:questionId', findQuestionById)
    app.get('/api/question', findAllQuestions)
    app.post('/api/question', createQuestion)

    function createQuestion (req, res){
        universityDao.createQuestion(req.body)
            .then(question => {
                if(!question)
                    res.send({})
                else
                    res.send(question)
            })
    }

    function findAllQuestions (req, res){
        universityDao.findAllQuestions().then(
            questions => res.send(questions)
        )
    }

    function findQuestionById (req, res){
        universityDao.findQuestionById(req.params['questionId']).then(
            question => {
                if (!question)
                    res.send({})
                else
                    res.send(question)
            })
    }


    function deleteQuestion (req, res) {
        universityDao.deleteQuestion(req.params.questionId).then(
            status => res.send(status)
        )
    }

    function updateQuestion (req, res){
        universityDao.updateQuestion(req.params.questionId, req.body).then(
            question => {
                if (!question)
                    res.send({})
                else
                    res.send(question)
            }
        )
    }
}
