import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        username: String,
        required: true,
        trimmed: true,
        unique: true,
    },
    {
        email: String,
        required: true,
    }
)