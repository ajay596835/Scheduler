const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const name = req.body.name;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// router.route('/update/:id').post((req, res) => {
//   User.findById(req.params.id)
//     .then(user => {
     
//       user.duration = Number(req.body.dose);
//       // exercise.date = Date.parse(req.body.date);

//       user.save()
//         .then(() => res.json('Student updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;