import mongoose from "mongoose"

const dbConnection = async () => {
    const url = process.env.DB_URL
    const db_name = 'crudOperations'
    try {
        await mongoose.connect(
            `${url}/${db_name}`
        )
        console.log("Connected to Database Successfully")
    } catch (error) {
        console.log(error)
        console.log("Can't connect to Database")
    }
}

export default dbConnection