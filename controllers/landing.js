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

exports.show_leads = function(req, res, next) {
  return models.Lead.findAll().then(leads => {
      res.render('lead/leads', { title: 'Express', leads: leads});
  })
  
}

exports.show_lead = function(req, res, next) {
  return models.Lead.findOne({
      where: {
        id: req.params.lead_id
      }
    }).then(lead => {
      res.render('lead/lead', {lead: lead});
  })
  
}

exports.show_edit_lead = function(req, res, next) {
  return models.Lead.findOne({
      where: {
        id: req.params.lead_id
      }
    }).then(lead => {
      res.render('lead/edit_lead', {lead: lead});
  })
  
}


exports.edit_lead = function(req, res, next) {
  return models.Lead.update({
    email: req.body.lead_email
  }, {
    where: {
      id: req.params.lead_id
    }
  }).then(result=>{
    res.redirect('/lead/' + req.params.lead_id);
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