import { Schema, model } from 'mongoose';
import { Thought, Reaction} from '../models';

const userSchema = new Schema(
    {
        username: {
            type: String, 
            required: true, 
            unique: true
        },
        email: {
            type: String, 
            required: true, 
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [ Thought ],
        friends: [ this ]
    }
);

userSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length;
    });

const User = mongoose.model('user', userSchema);

export default User;