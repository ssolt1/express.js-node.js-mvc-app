var express = require('express');
var router = express.Router();
var _ = require('underscore');

var contacts = [
  {
    id: 1,
    name: 'Joe Smith',
    job: 'Plumber',
    nickname: 'Joe',
    email: 'joe@gmail.com'
  },
  {
    id: 2,
    name: 'Carla Ricci',
    job: 'Principal Division Producer',
    nickname: 'Carla',
    email: 'cricci@gmail.com'
  },
  {
    id: 3,
    name: 'Dragan Burns',
    job: 'Senior Factors Producer',
    nickname: 'Drago',
    email: 'itburns@outlook.com'
  }
]

function lookupContact(contact_id) {
  return _.find(contacts, function(c) {
    return c.id == parseInt(contact_id);
  });
}

function findMaxId() {
  return _.max(contacts, function(contact) {
    return contact.id;
  });
}

router.get('/', function(req, res) {
  res.render('list', {contacts: contacts});
});

router.post('/', function(req, res) {
  var new_contact_id = findMaxId() + 1;
  var new_contact = {
    id: new_contact_id,
    name: req.body.fullname,
    job: req.body.job,
    nickname: req.body.nickname,
    email: req.body.email
  }

  contacts.push(new_contact);

  res.send('New contact created with id: ' + new_contact.id);
  // res.redirect('/contacts/');
});

router.get('/add', function(req, res) {
  res.render('add', {contact: {}});
});

router.route('/:contact_id')
  .all(function(req, res, next) {
    contact_id = req.params.contact_id;
    contact = lookupContact(contact_id);

    next();
  })

  .get(function(req, res) {
    res.render('edit', {contact: contact});
  })

  .post(function(req, res) {
    if(!contact.notes) {
      contact.notes = [];
    }

    contact.notes.push({
      created: Date(),
      note: req.body.notes
    });

    res.send('Created new note for contact id '+contact_id);
    // res.redirect('/contact/'+contact_id);
  })

  .put(function(req, res) {
    contact.name = req.body.fullname;
    contact.job = req.body.job;
    contact.nickname = req.body.nickname;
    contact.email = req.body.email;

    res.send('Update succeeded for contact id: '+contact_id);
    // res.render('/contacts/');
  })

  .delete(function(req, res) {
    res.send('Delete for contact '+contact_id);
  });

module.exports = router;
