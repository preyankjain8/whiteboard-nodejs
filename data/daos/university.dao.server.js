const mongoose = require('mongoose');
const studentModel = require('../../models/student/student.model.server');
const questionModel = require('../../models/question/question.model.server');
const answerModel = require('../../models/answer/answer.model.server');


truncateDatabase = () => {
    answerModel.deleteMany().then(status1 =>
    {
        console.log(status1)
        console.log("deleting questions");
        questionModel.deleteMany({}).then(status => console.log(status));
        console.log("deleting students");
        studentModel.deleteMany({}).then(status => console.log(status));
    })
}

populateDatabase = () =>
{
    studentModel.create({
        _id: 123,
        FirstName: 'Alice',
        LastName: 'Wonderland',
        username: 'alice',
        password: 'alice',
        gradYear: 2020,
        scholarship: 15000
    })
    studentModel.create({
        _id: 234,
        FirstName: 'Bob',
        LastName: 'Hope',
        username: 'bob',
        password: 'bob',
        gradYear: 2021,
        scholarship: 12000
    })
    questionModel.create({
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
    })
    questionModel.create({
        _id: 432,
        question: 'DAO stands for Dynamic Access Object.',
        points: 10,
        questionType: 'TRUE_FALSE',
        multipleChoice: {
            choices: null,
            correct: null
        },
        trueFalse: {
            isTrue: false
        }
    })
    questionModel.create({
        _id: 543,
        question: 'What does JPA stand for?',
        points: 10,
        questionType: 'MULTIPLE_CHOICE',
        multipleChoice: {
            choices: 'Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations',
            correct: 1
        },
        trueFalse: {
            isTrue: false
        }
    })
    questionModel.create({
        _id: 654,
        question: 'What does ORM stand for?',
        points: 10,
        questionType: 'MULTIPLE_CHOICE',
        multipleChoice: {
            choices: 'Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping',
            correct: 4
        },
        trueFalse: {
            isTrue: false
        }
    })
    answerModel.create({
        '_id': 123,
        trueFalseAnswer: true,
        multipleChoiceAnswer: null,
        student: 123,
        question: 321
    })
    answerModel.create({
        '_id': 234,
        trueFalseAnswer: false,
        multipleChoiceAnswer: null,
        student: 123,
        question: 432
    })
    answerModel.create({
        '_id': 345,
        trueFalseAnswer: null,
        multipleChoiceAnswer: 1,
        student: 123,
        question: 543
    })
    answerModel.create({
        '_id': 456,
        trueFalseAnswer: null,
        multipleChoiceAnswer: 2,
        student: 123,
        question: 654
    })
    answerModel.create({
        '_id': 567,
        trueFalseAnswer: false,
        multipleChoiceAnswer: null,
        student: 234,
        question: 321
    })
    answerModel.create({
        '_id': 678,
        trueFalseAnswer: true,
        multipleChoiceAnswer: null,
        student: 234,
        question: 432
    })
    answerModel.create({
        '_id': 789,
        trueFalseAnswer: null,
        multipleChoiceAnswer: 3,
        student: 234,
        question: 543
    })
    answerModel.create({
        '_id': 890,
        trueFalseAnswer: null,
        multipleChoiceAnswer: 4,
        student: 234,
        question: 654
    })
}

createStudent = student =>
    studentModel.create(student)

deleteStudent = studentId =>
    studentModel.deleteOne({'_id':studentId}).then(
        status => console.log(status)
    );

updateStudent = (studentId, student) =>
    studentModel
        .update({_id: studentId},
            {$set: student})


createQuestion = question =>
    questionModel.create(question)

deleteQuestion = questionId =>
    questionModel.deleteOne({'_id':questionId}).then(
        status => console.log(status))

updateQuestion = (questionId, question) =>
    questionModel
        .update({_id: questionId},
            {$set: question})


answerQuestion = (studentId, questionId, answer) =>
    answerModel.create({
        '_id': answer._id,
        trueFalseAnswer: answer.trueFalseAnswer,
        multipleChoiceAnswer: answer.multipleChoiceAnswer,
        student: mongoose.Schema.Types.ObjectId(studentId),
        question: mongoose.Schema.Types.ObjectId(questionId)
    })

findAllStudents = () =>
    studentModel.find();

findStudentById = (id) =>
    studentModel.findById(id)

findAllQuestions = () =>
    questionModel.find()

findQuestionById = (id) =>
    questionModel.findById(id)

findAllAnswers = () =>
    answerModel.find()

findAnswerById = (id) =>
    answerModel.findById(id)

findAnswersByStudent = (studentId) =>
    answerModel.find({'student': this.findStudentById(studentId)})

findAnswersByQuestion = (questionId) =>
    answerModel.find({'question': this.findQuestionById(questionId)})

findAnswerByStudentAndQuestion = (studentId, questionId) =>
{
    return answerModel.find({
        student:studentId,
        question: questionId
    })
}

module.exports = {
    createStudent, createQuestion, answerQuestion,
    findAllStudents, findStudentById, findAllQuestions,
    findQuestionById, findAllAnswers, findAnswerById,
    findAnswersByStudent, findAnswersByQuestion,
    truncateDatabase, deleteStudent, updateStudent,
    deleteQuestion, updateQuestion, populateDatabase,
    findAnswerByStudentAndQuestion
}
