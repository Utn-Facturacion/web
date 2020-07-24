import api from './api'

const feeService = {}

feeService.getFeesById = function (id) {
  return api.get(`/cuotas/${id}`)
    .then(res => res.data)
    .catch(err => err)
}

feeService.getFeeDescriptionById = function (id) {
  return api.get(`/cuotas/${id}/description`)
    .then(res => res.data)
    .catch(err => err)
}

feeService.updateFeeById = function (id, monto, estado) {
  return api.post(`/cuotas/updatemonto`, {
    cuotaId: id,
    montoAbonado: monto,
    estado: estado
  })
    .then(res => res.data)
    .catch(err => err)
}

export default feeService
