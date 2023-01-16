import express from 'express';
import {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} from '../../controllers/thoughtController';

const router = express.Router();

router
  .route('/')
  .get(getThoughts)
  .get(getSingleThought)
  .post(createThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions');

export default router;
