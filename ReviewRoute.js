const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.post('/movies/:movieId/reviews', reviewController.addReviewToMovie);
router.get('/movies/:movieId/reviews', reviewController.getAllReviewsForMovie);
router.put('/movies/:movieId/reviews/:reviewId', reviewController.updateReviewInMovie);
router.delete('/movies/:movieId/reviews/:reviewId', reviewController.deleteReviewInMovie);

module.exports = router;
