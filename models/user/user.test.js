require('../../data/db')()
const dao = require('./user.dao.server')
const universityDao = require('../../data/daos/university.dao.server')

//universityDao.truncateDatabase()
universityDao.populateDatabase();
/*universityDao.createStudent({
    _id: 123,
    firstName: 'Alice',
    lastName: 'Wonderland',
    username: 'alice',
    password: 'alice',
    gradYear: 2020,
    scholarship: 15000
}).then(user => console.log(user))
*/


/*
universityDao.createQuestion({
    _id: 321,
    question: 'Is the following schema valid?',
    points: 10,
    questionType: 'TRUE_FALSE',
    multipleChoice: {
        choices: null,
        correct: null
    },
    trueFalse: {
        isTrue: false
    }
}).then(question => console.log(question))
*/
/*universityDao.answerQuestion(123, 321,{
    _id: 123,
    trueFalseAnswer: true,
    multipleChoiceAnswer: null
}).then(answer => console.log(answer))*/
