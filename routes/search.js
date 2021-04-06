var express = require('express');
var router = express.Router();
const models = require('../models');

/// Get All Posts
// GET /api/v1/posts/
router.get('/', function(req, res) {
  models.Search.findAll()
    .then(search => {
      res.json(search)
    })
});

// Get 1 Post by ID
// GET /api/v1/posts/102
router.get('/:id', (req, res) => {
  models.Search.findByPk(req.params.id)
    .then(search => {
      if (search) {
        res.json(search)
      } else {
        res.status(404).json({
          error: 'Search not found'
        })
      }
    })
})

// Update Search
// PUT /api/v1/posts/101
router.put('/:id', (req, res) => {
  if (!req.body.locationA || !req.body.locationB || !req.body.date || !req.body.caselocationA || !req.body.caselocationB ) {
    res.status(400).json({
      error: 'Please submit all required fields'
    })
    return;
  }
  models.Search.update({
    locationA: req.body.locationA,
    locationB: req.body.locationB,
    date: req.body.date,
    caselocationA: req.body.caselocationA,
    caselocationB: req.body.caselocationB
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(updated => {
      if (updated && updated[0] === 1) {
        res.status(202).json({
          success: 'Search Updated'
        });
      } else {
        res.status(404).json({
          error: 'Search not found'
        })
      }
    })
})

// Create new Post
// POST /api/v1/posts/
router.post('/', (req, res) => {
  if (!req.body.locationA || !req.body.locationB || !req.body.date || !req.body.caselocationA || !req.body.caselocationB ) {
    res.status(400).json({
      error: 'Please submit all required fields'
    })
    return;
  }
  models.Search.create({
    locationA: req.body.locationA,
    locationB: req.body.locationB,
    date: req.body.date,
    caselocationA: req.body.caselocationA,
    caselocationB: req.body.caselocationB
  })
    .then(search => {
      res.status(201).json(search)
    })
})

module.exports = router;
