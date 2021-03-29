const express = require('express');
const router = express.Router();
const DEGREE = require('../services/degree');


/**
 * @description Get degrees related of search term
 */
router.get('/', async function (req, res, next) {
    try {
        let serachTerm = req.query.q;
        res.json(await DEGREE.getDegrees(serachTerm));
    } catch (err) {
        console.error(`Error while searching degrees`, err.message);
        next(err);
    }
});


module.exports = router;