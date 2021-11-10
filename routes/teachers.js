const router = require('express').Router();
let Teacher = require('../models/teacher.model');

router.route('/').get((req, res) => {
  Teacher.find()
    .then(teachers => res.json(teachers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const subject = req.body.subject;
  const name = req.body.name;



  const newTeacher = new Teacher({username,password,subject,name});

  newTeacher.save()
    .then(() => res.json('Teacher added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;