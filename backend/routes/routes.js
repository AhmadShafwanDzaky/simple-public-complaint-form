import express from 'express'

import {
  showData,
  showDataById,
  createData,
  updateData,
  deleteData
} from '../controllers/product.js'

const router = express.Router()

router.get('/datas', showData)

router.get('datas/:id', showDataById)

router.post('/datas', createData)

router.put('/datas/:id', updateData)

router.delete('/datas/:id', deleteData)

export default router
