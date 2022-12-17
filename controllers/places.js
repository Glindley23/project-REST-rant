const router = require('express').Router();
const db = require('../models')

//GET: Main places page
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
});

//POST: Default info if none is provided
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})


//GET: New place page
router.get('/new', (req, res) => {
  res.render('places/new')
});

//GET: Show route 
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})


// Save the new data
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
      })

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router;