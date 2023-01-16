import { User, Thought, reactionSchema } from '../models';

async function getThoughts(req, res) {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getSingleThought(req, res) {
  try {
    const thought = await Thought.find({ _id: req.body._id });
    if (!thought) {
      res.status(404).json({ message: 'No thought found with that ID!' });
      return;
    }
    res.status(200).json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function createThought(req, res) {
  try {
    const thought = await Thought.create(req.body);
    res.status(200).json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function updateThought(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.body._id },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (!thought) {
      res.status(404).json({ message: 'No thought found with that ID!' });
      return;
    }
    res.status(200).json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteThought(req, res) {
  try {
    const thought = await Thought.findOneAndDelete({ _id: req.body._id });
    if (!thought) {
      res.status(404).json({ message: 'No thought found with that ID!' });
      return;
    }
    res.status(200).json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function addReaction(req,res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$addToSet: { reactions: req.body} },
            {runValidators: true, new: true}
        )
        if (!thought) {
            res.status(404).json({ message: 'No thought found with that ID!' });
            return;
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function deleteReaction(req,res) {
    try {
        const thought = Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: { reactions: {reactionId: req.params.reactionId}}},
            {runValidators: true, new: true}
        )
        if (!thought) {
            res.status(404).json({ message: 'No thought found with that ID!' });
            return;
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
}

export {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
};
