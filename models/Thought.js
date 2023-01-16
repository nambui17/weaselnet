import { Schema, model } from 'mongoose';
import { reactionSchema } from '../models';

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [{
            type: reactionSchema
        }]
    },
    {
        toJSON: {
            virtuals: true,
          },
    }
)

thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

export default Thought;