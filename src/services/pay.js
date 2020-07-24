import api from './api'

const payService = {}

payService.createPay = function (monto, facturaId, nombre, tipo) {
  return api.post(`/pago`, {
    monto: monto,
    facturaId: facturaId,
    nombre,
    tipo
  })
    .then(res => res.data)
    .catch(err => err)
}

payService.updatePayById = function (id, total, pagada) {
  return api.post('/factura/updatefactura', {
    id,
    total,
    pagada
  })
    .then(res => res.data)
    .catch(err => err)
}

export default payService
