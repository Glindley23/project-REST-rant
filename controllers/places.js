const router = require('express').Router();

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cafe.jpg'
      }]
      
    res.render('places/index', {places})
});

router.get('/new', (req, res) => {
  res.render('places/new')
});

router.get('/:id', (req, res) => {
  res.send(places.name)
})

module.exports = router;