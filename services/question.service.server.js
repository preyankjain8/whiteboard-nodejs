const universityDao = require('../data/daos/university.dao.server')
module.exports = app => {
    createQuestion = (req, res) =>
        res.json(universityDao.createQuestion(req.body))

    findAllQuestions = (req, res) =>
        res.json(universityDao.findAllQuestions())

    findQuestionById = (req, res) =>
        res.json(
            universityDao.findQuestionById(req.params['questionId'])
        )

    deleteQuestion = (req, res) =>
        res.json(
            universityDao.deleteQuestion(req.params.questionId)
        )

    updateQuestion = (req, res) =>
        res.json(
            universityDao.updateQuestion(req.params.questionId, req.body)
        )

    app.put('/api/question/:questionId', updateQuestion)
    app.delete('/api/question/:questiontId', deleteQuestion)
    app.get('/api/question/:questionId', findQuestionById)
    app.get('/api/question', findAllQuestions)
    app.post('/api/question', createQuestion)
}
