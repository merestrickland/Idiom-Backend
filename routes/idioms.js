const router = require('express').Router();
let Idiom = require('../models/idiom.model')

router.route('/').get((req, res) => {
  Idiom.find()
    .then(idioms => res.json(idioms))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const definitions = req.body.definitions

  const newIdiom = new Idiom({
    name, 
    definitions
  });

  newIdiom.save()
    .then(() => res.json('Idiom Added!'))
    .catch(err => res.status(400).json('Error ' + err))
});

router.route('/:id').get((req, res) => {
  Idiom.findById(req.params.id)
    .then(idiom => res.json(idiom))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  Idiom.findByIdAndDelete(req.params.id)
    .then(() => res.json('Idiom deleted!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  Idiom.findById(req.params.id)
    .then(idiom => {
      idiom.name = req.body.name;
      idiom.definitions = req.body.definitions;

      idiom.save()
        .then(() => res.json('Idiom updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error ' + err))
})

module.exports = router;