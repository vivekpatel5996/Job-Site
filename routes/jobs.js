const express = require('express');
const router = express.Router();
const JOBS = require('../services/jobs');
const jobSchema = require('../schemas/jobs');
const { checkSchema } = require('express-validator');
const checkValidationErrors = require("../helpers/checkValidationErros");

/**
 * @description Get a Job
 */
router.get('/:id', async function (req, res, next) {
    try {
        res.json(await JOBS.getJob(req.params.id));
    } catch (err) {
        console.error(`Error while creating job`, err.message);
        next(err);
    }
});


/**
 * @description Create a job
 */
router.post('/', checkSchema(jobSchema), async function (req, res, next) {
    try {
        console.log("job body", req.body);
        checkValidationErrors(req, res);
        res.json(await JOBS.createJob(req.body));
    } catch (err) {
        console.error(`Error while creating job`, err.message);
        next(err);
    }
});


/**
 * @description Update a Job
 */
router.put('/:id', checkSchema(jobSchema), async function (req, res, next) {
    try {
        checkValidationErrors(req, res);
        res.json(await JOBS.updateJob(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating job`, err.message);
        next(err);
    }
});


/**
 * @description Delete a Job
 */
router.delete('/:id', async function (req, res, next) {
    try {
        res.json(await JOBS.removeJob(req.params.id));
    } catch (err) {
        console.error(`Error while deleting job`, err.message);
        next(err);
    }
});

module.exports = router;