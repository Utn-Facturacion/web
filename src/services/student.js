import api from './api'

const studentService = {}

studentService.getAll = function () {
  return api.get('/personas')
    .then(res => res.data.rows)
    .catch(err => err)
}

export default studentService
