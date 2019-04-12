const mongoose = require('mongoose');
const studentModel = require('../../models/student/student.model.server');
const questionModel = require('../../models/question/question.model.server');
const answerModel = require('../../models/answer/answer.model.server');

createStudent = student =>
    studentModel.create(student)


createQuestion = question =>
    questionModel.create(question)

answerQuestion = (studentId, questionId, answer) =>
    studentModel.findById(studentId)
        .then( student => questionModel.findById(questionId)
            .then( question =>
                answerModel.create({
                    '_id': answer._id,
                    trueFalseAnswer: answer.trueFalseAnswer,
                    multipleChoiceAnswer: answer.multipleChoiceAnswer,
                    student: student,
                    question: question
                })
            ))

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

module.exports = {
    createStudent, createQuestion, answerQuestion,
    findAllStudents, findStudentById, findAllQuestions,
    findQuestionById, findAllAnswers, findAnswerById,
    findAnswersByStudent, findAnswersByQuestion
}
