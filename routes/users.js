var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
})
        .get('/register', function (req, res, next) {
            res.render('users/register', {title: 'Register New User'});
        })
        .post('/register', function (req, res, next) {
            console.log(req.body);
            res.send("hello");
        });

module.exports = router;
