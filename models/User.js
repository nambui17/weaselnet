import { Schema, model } from 'mongoose';
import { Thought, Reaction} from '../models';

const userSchema = new Schema(
    {
        username: {
            type: String, 
            required: true, 
            unique: true,
            trim: true
        },
        email: {
            type: String, 
            required: true, 
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [ Thought ],
        friends: [ this ]
    },
    {
        toJSON: {
            virtuals: true,
          },
    }
);

userSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length;
    });

const User = model('user', userSchema);

export default User;