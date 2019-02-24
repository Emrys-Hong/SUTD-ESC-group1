var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
let user = require('../controllers/user');
let {isLoggedIn, hasAuth} = require('../middleware/hasAuth.js');

router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout', user.logout);
router.get('/logout', user.logout);
/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', isLoggedIn, landing.submit_ticket);
router.get('/tickets', hasAuth, landing.show_tickets);
router.get('/ticket/:ticket_id', hasAuth, landing.show_ticket);
router.get('/ticket/:ticket_id/edit', hasAuth, landing.show_edit_ticket);
router.post('/ticket/:ticket_id/edit', hasAuth, landing.edit_ticket);
router.post('/ticket/:ticket_id/delete', hasAuth, landing.delete_ticket);
router.post('/ticket/:ticket_id/delete-json', hasAuth, landing.delete_ticket_json);
module.exports = router;
