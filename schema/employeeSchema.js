import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const schema = new Schema(
    {
        name: {type: String, required: true, match: /^[a-zA-Z\s]{3,20}$/},
        email: {
            type: String,
            required: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            index: true,
        },
        phone: {type: String,
            required: true,
            match: /^\d{10}$/
        },
        designation: {
            type: String,
            required: true,
            match: /^[a-zA-Z\s]{3,35}$/
        },
        department: {
            type: String,
            required: true,
            match: /^[a-zA-Z\s]{2,35}$/
        },
        salary: {
            type: String,
            required: true,
            match: /^[0-9]{4,8}$/
        },
        date_of_joining: {
            type: String,
            required: true
        }
    }
)

export const Employee = mongoose.model('employees', schema)