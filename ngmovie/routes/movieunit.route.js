const express = require('express');
const app = express();
const MovieUnitRoutes = express.Router();

// Require MovieUnit model in our routes module
let MovieUnit = require('../models/MovieUnit');

// Defined movie route
MovieUnitRoutes.route('/add').post(function (req, res) {
  let MovieUnit = new MovieUnit(req.body);
  MovieUnit.save()
    .then(game => {
    res.status(200).json({'MovieUnit': 'MovieUnit in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
MovieUnitRoutes.route('/').get(function (req, res) {
    MovieUnit.find(function (err, MovieUnits){
    if(err){
      console.log(err);
    }
    else {
      res.json(MovieUnits);
    }
  });
});

// Defined edit route
MovieUnitRoutes.route('/edit/:id').get(function (req, res) {
  let id= req.params.id;
  MovieUnit.findById(id, function (err, MovieUnit){
      res.json(MovieUnit);
  });
});

//  Defined update route
MovieUnitRoutes.route('/update/:id').post(function (req, res) {
    MovieUnit.findById(req.params.id, function(err,movieUnit) {
    if (!movieUnit)
      return next(new Error('Could not load Document'));
    else {
        movieUnit.movie_name = req.body.movie_name;
        movieUnit.movie_summary = req.body.movie_summary;
        movieUnit.movie_image = req.body.movie_image;

        movieUnit.save().then(() => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
MovieUnitRoutes.route('/delete/:id').get(function (req, res) {
    movieUnit.findByIdAndRemove({_id: req.params.id}, function(err, movieUnit){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = MovieUnitRoutes;
