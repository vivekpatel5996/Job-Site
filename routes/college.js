const express = require('express');
const router = express.Router();
const COLLEGE = require('../services/college');


/**
 * @description Get colleges related of searchterm
 */
router.get('/', async function (req, res, next) {
    try {
        let serachTerm = req.query.q;
        res.json(await COLLEGE.getColleges(serachTerm));
    } catch (err) {
        console.error(`Error while searching colleges`, err.message);
        next(err);
    }
});


module.exports = router;