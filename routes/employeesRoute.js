import { Router } from "express";
import {
    createEmployee,
    getEmployees,
    updatedEmployee,
    deletedEmployee
} from '../controllers/employeeController.js'
import { createEmployeeSchema, updateEmployeeSchema } from "../utils/validationSchema.js";


const router = Router()

router.route('/create-employee').post(createEmployeeSchema ,createEmployee)
router.route('/all-employees').get(getEmployees)
router.route('/edit-employee').put(updateEmployeeSchema ,updatedEmployee)
router.route('delete-employee').delete(deletedEmployee)

export default router