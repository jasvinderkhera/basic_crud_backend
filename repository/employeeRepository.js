import { Employee } from "../schema/employeeSchema.js";


const createNewEmployee = async (data) => {
    try {
        const existedEmployee = await Employee.findOne({
            $or: [{email: data.email }, {phone: data.phone}]
        })
        if(
            existedEmployee &&
            existedEmployee.email === data.email &&
            existedEmployee.phone === data.phone
        ){
            throw new Error('Email and Phone no already exists')
        }
        else if (existedEmployee && existedEmployee.email === data.email){
            throw new Error('Email already Exists')
        }
        else if (existedEmployee && existedEmployee.phone === data.phone){
            throw new Error('Phone no. already Exists')
        }
        else{
            const employee = new Employee(data)

            const newEmployee = await employee.save()

            return newEmployee
        }
    } catch (error) {
        throw error
    }

}


const getAllEmployees = async (data) => {
    try {
        const existedEmployees = Employee

        return existedEmployees
    } catch (error) {
        throw error
    }
}


const editEmployee = async (data) =>{
    try {
        const employee = await Employee.findById(data.employeeId)

        const existedEmployee = await Employee.findOne({
            $or: [{ email: data.email }, {phone: data.phone}],
            _id: {$ne: data.employeeId}
        })

        if(!employee){
            throw new Error("Employee doesn't exist")
        }
        else if( existedEmployee &&
            existedEmployee.email === data.email &&
            existedEmployee.phone === data.phone
        ){
            throw new Error("Email and Phone no. already Exists")
        }
        else if( existedEmployee &&
            existedEmployee.email === data.email
        ){
            throw new Error("Email already Exists")
        }
        else if(existedEmployee &&
            existedEmployee.phone === data.phone
        ){
            throw new Error("Phone already Exists")
        }
        else{
            const updatedEmployee = await Employee.updateOne(
                {_id: data.employeeId},
                {
                    name: data.name,
                    email:data.email,
                    phone:data.phone,
                    designation:data.designation,
                    department:data.department,
                    salary:data.salary,
                    date_of_joining: data.date_of_joining
                }
            )

            return updatedEmployee
        }

    } catch (error) {
        throw error
    }
}


const removeEmployee =  async (employeeId) =>{

    try {
        const employee = await Employee.findById(employeeId)

        if(!employee){
            throw new Error("Employee doesn't Exist")
        }
        else{
            const deletedEmployee = await Employee.deleteOne({
                _id: employeeId
            })
            return deletedEmployee
        }

    } catch (error) {
        throw error
    }
}

export {createNewEmployee, getAllEmployees, editEmployee, removeEmployee}