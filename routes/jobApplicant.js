const express = require('express');
const router = express.Router();
const JOBAPPLICANT = require('../services/jobApplicant');
const jobApplicantSchema = require('../schemas/jobApplicant');
const { checkSchema } = require('express-validator');
const checkValidationErrors = require("../helpers/checkValidationErros");


/**
 * @description Create a Job Applicant
 */
router.post('/', checkSchema(jobApplicantSchema), async function (req, res, next) {
    try {
        console.log("job applicant body", req.body);
        checkValidationErrors(req, res);
        res.json(await JOBAPPLICANT.createJobApplicant(req.body));
    } catch (err) {
        console.error(`Error while creating job applicant`, err.message);

        next(err);
    }
});


/**
 * @description Update a Job Applicant
 */
router.put('/:id', checkSchema(jobApplicantSchema), async function (req, res, next) {
    try {
        checkValidationErrors(req, res);
        res.json(await JOBAPPLICANT.updateJobApplicant(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating job applicant`, err.message);
        next(err);
    }
});


/**
 * @description Delete a Job Applicant
 */
router.delete('/:id', async function (req, res, next) {
    try {
        res.json(await JOBAPPLICANT.removeJobApplicant(req.params.id));
    } catch (err) {
        console.error(`Error while deleting job`, err.message);
        next(err);
    }
});


module.exports = router;