// models give us the access to sequelize queries
const models = require('../models');

exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express' , user: req.user});
}

exports.submit_ticket = function(req, res, next) {
  console.log("name: ", req.body.name);
  console.log('email:', req.body.email);
  console.log('contact', req.body.contact);
  console.log('topic', req.body.topic);
  console.log('detail', req.body.detail);
  console.log('created', req.body.createdAt);
  console.log('updated', req.body.updatedAt);
  console.log('response', req.body.response);
  return models.Ticket.create({
    email: req.body.email,
    name: req.body.name,
    contact: req.body.contact,
    topic: req.body.topic,
    detail: req.body.detail
  }).then(lead=>{
    res.redirect('/');
  })
}

exports.show_tickets = function(req, res, next) {
  return models.Ticket.findAll().then(tickets => {
      res.render('ticket/tickets', { title: 'Express', tickets: tickets});
  })
  
}

exports.show_ticket = function(req, res, next) {
  return models.Ticket.findOne({
      where: {
        id: req.params.ticket_id
      }
    }).then(ticket => {
      res.render('ticket/ticket', {ticket: ticket});
  })
  
}

exports.show_edit_ticket = function(req, res, next) {
  return models.Ticket.findOne({
      where: {
        id: req.params.ticket_id
      }
    }).then(ticket => {
      res.render('ticket/edit_ticket', {ticket: ticket});
  })
  
}


exports.edit_ticket = function(req, res, next) {
  return models.Ticket.update({
    response: req.body.ticket_response
  }, {
    where: {
      id: req.params.ticket_id
    }
  }).then(result=>{
    res.redirect('/ticket/' + req.params.ticket_id);
  })
  
}

exports.delete_lead = function(req, res, next) {
  return models.Lead.destroy({
    where: {
      id: req.params.lead_id
    }
  }).then(result=>{
    res.redirect('/leads');
  })
  
}


exports.delete_lead_json = function(req, res, next) {
  return models.Lead.destroy({
    where: {
      id: req.params.lead_id
    }
  }).then(result=>{
    res.send({msg: "Success"});
  })
}