const router = require('express').Router();
const places = require('../models/places.js')


router.get('/', (req, res) => {
    res.render('places/index', { places })
});

//POST: Default info if none is provided
router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

//GET: New place page
router.get('/new', (req, res) => {
  res.render('places/new')
});

//GET: Show route 
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  } else {
    res.render('places/show', {place: places[id]})
  }
})

module.exports = router;