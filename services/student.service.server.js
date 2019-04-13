const universityDao = require('../data/daos/university.dao.server')
module.exports = function (app) {

    app.post('/api/student', createStudent);
    app.get('/api/student', findAllStudents);
    app.put('/api/student/:studentId', updateStudent)
    app.delete('/api/student/:studentId', deleteStudent)
    app.get('/api/student/:studentId', findStudentById)

    function createStudent (req, res) {
        console.log("createStudent")
        universityDao.createStudent(req.body).then(student => {
            console.log(student)
            res.send(student)
        })
    }
    function findAllStudents (req, res){
        universityDao.findAllStudents().then(
            students => res.send(students)
        )
    }


    function findStudentById (req, res){
        universityDao.findStudentById(req.params['studentId'])
            .then(
                student => {
                    if (!student)
                        res.send({})
                    else
                        res.send(student)
                }
            )
    }

    function deleteStudent (req, res) {
        universityDao.deleteStudent(req.params.studentId).then(
            status => res.send(status)
        )
    }

    function updateStudent (req, res) {
        universityDao.updateStudent(req.params.studentId, req.body).then(
            student => {
                if(!student)
                    res.send({})
                else
                    res.send(student)
            }
        )
    }
}
