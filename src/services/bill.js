import api from './api'

const billService = {}

billService.getbillsByStudent = function (id) {
  return api.get(`/factura/${id}`)
    .then(res => res.data)
    .catch(err => err)
}

billService.getBillById = function (id) {
  return api.get(`/factura/${id}/detalle`)
    .then(res => res.data)
    .catch(err => err)
}

export default billService
