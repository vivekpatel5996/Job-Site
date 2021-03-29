const express = require('express');
const router = express.Router();
const FIELDOFSTUDY = require('../services/fieldOfStudy');


/**
 * @description Get field of study related of search term
 */
router.get('/', async function (req, res, next) {
    try {
        let serachTerm = req.query.q;
        res.json(await FIELDOFSTUDY.getFieldOStudy(serachTerm));
    } catch (err) {
        console.error(`Error while searching field of study`, err.message);
        next(err);
    }
});


module.exports = router;