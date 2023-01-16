import {User, Thought, Reaction } from '../models';

export default {
    //Get all Users
    async getUsers(req,res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //Get a single user
    async getSingleUser(req,res) {
        try {
            const user = await user.findOne({_id: req.params.userId});
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req,res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req,res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            if (!user) {
                res.status(404).json({message: "No user with that ID"})
            } else {
                Thought.deleteMany({_id: {$in: user.applications}})
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateUser(req,res) {
        try {
            const user = await User.findOneAndUpdate(
                {_id: req.params.appli}
            )
        } catch (err) {

        }
    },
}