const express = require('express');
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

const router = express.Router();

router
  .route('/')
  .get(getThoughts)
  .post(createThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/singleThought').get(getSingleThought);

router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
