const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.post('/movies', movieController.createMovie);
router.get('/movies', movieController.getAllMovies);
router.get('/movies/:movieId', movieController.getMovieById);
router.put('/movies/:movieId', movieController.updateMovieById);
router.delete('/movies/:movieId', movieController.deleteMovieById);

module.exports = router;
