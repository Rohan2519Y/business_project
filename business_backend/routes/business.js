var express = require('express');
var router = express.Router();
var pool = require('./pool')

/* GET users listing. */
router.post('/submit_data', function (req, res, next) {
    try {
        pool.query('insert into information(firstname, lastname, email, phone, service,message,term) values(?,?,?,?,?,?,?)',
            [req.body.firstname, req.body.lastname, req.body.email, req.body.phone, req.body.service, req.body.message, req.body.term], function (error, result) {
                if (error) {
                    console.log(error)
                    res.status(200).json({ status: false, message: 'Database Error' })
                }
                else {
                    res.status(200).json({ status: true, message: 'Successfull' })
                }
            })
    }
    catch (e) {
        console.log(e)
        res.status(500).json({ status: false, message: 'Critical Error' })
    }
});

module.exports = router;
