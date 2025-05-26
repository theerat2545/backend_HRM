const express = require('express')
const router = express.Router()
const {
  getAllEmployees,
  createEmployee,
} = require('../../controllers/employee_controller')

router.get('/', getAllEmployees)
router.post('/', createEmployee)

module.exports = router
