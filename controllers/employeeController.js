import { createNewEmployee,
    getAllEmployees,
    editEmployee,
    removeEmployee }
    from "../repository/employeeRepository.js";

import { apiResponseErr,
        apiResponseSuccess
 } from "../middlewares/apiResponse.js";
 
 const createEmployee = async (req, res) => {
    try {
        let data = req.body
        let email = data.email.toLowerCase().split('@')[0].replaceAll('.', '')
        data.email = email + '@' + data.email.split('@')[1]

        let result = await createNewEmployee(data)

        return apiResponseSuccess(
            {},
            true,
            201,
            'Employee created successfully',
            res
        )
    } catch (error) {
        return apiResponseErr(null, false, 400, error.message, res)
    }
 }

 const getEmployees = async (req, res) => {
    try {
       let existedEmployees = await getAllEmployees()

       return apiResponseSuccess(
        existedEmployees,
        true,
        200,
        'Employee getting from DB successfully',
        res
       )
    } catch (error) {
        return apiResponseErr(
            null,
            false,
            400,
            error.message,
            res
        )
    }
 }

 const updatedEmployee = async (req, res) => {
    try {
        let data = req.body

        let result = await editEmployee(data)

        return apiResponseSuccess(
            {},
            true,
            200,
            'Employee updated successfully',
            res
        )
    } catch (error) {
        return apiResponseErr (
            null,
            false,
            400,
            error.message,
            res
        )
    }
 }

 const deletedEmployee = async (req, res) => {
    try {
        const {employeeId} = req.query
        console.log("ID",employeeId)
        let result = await removeEmployee(employeeId)

        return apiResponseSuccess(
            {},
            true,
            200,
            'Employee deleted successfully',
            res
        )
    } catch (error) {
        return apiResponseErr(
            null,
            false,
            400,
            error.message,
            res
        )
    }
 }


 export {createEmployee, getEmployees, updatedEmployee, deletedEmployee}