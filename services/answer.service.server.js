const universityDao = require('../data/daos/university.dao.server')
module.exports = function(app){

    /*app.put('/api/question/:questionId', updateQuestion)
    app.delete('/api/question/:questionId', deleteQuestion)*/
    app.get('/api/question/:qid/student/:sid/answer', findAllAnswers)
    app.get('/api/student/:sid/question/:qid/answer', findAllAnswers)
    app.post('/api/student/:sid/question/:qid/answer', answerQuestion)

    function answerQuestion(req, res) {
        universityDao.answerQuestion(req.params.sid, req.params.qid, req.body)
            .then(answer => {
                res.send(answer)
            })
    }

    function findAllAnswers(req, res) {
        universityDao.findAnswerByStudentAndQuestion(req.params.sid, req.params.qid).then(
            answers => {
                res.send(answers)            }
        )
    }



    /*function createQuestion (req, res){
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
    }*/
}
