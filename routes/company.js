const express = require('express');
const router = express.Router();
const COMPANY = require('../services/company');
const companySchema = require('../schemas/company');
const { checkSchema } = require('express-validator');
const checkValidationErrors = require("../helpers/checkValidationErros");

/**
 * @description Get a company
 */
router.get('/:id', async function (req, res, next) {
    try {
        res.json(await COMPANY.getCompany(req.params.id));
    } catch (err) {
        console.error(`Error while creating company`, err.message);
        next(err);
    }
});


/**
 * @description Create a company
 */
router.post('/', checkSchema(companySchema), async function (req, res, next) {
    try {
        console.log("company body", req.body);
        checkValidationErrors(req, res);
        res.json(await COMPANY.createCompany(req.body));
    } catch (err) {
        console.error(`Error while creating company`, err.message);

        next(err);
    }
});


/**
 * @description Update a Company
 */
router.put('/:id', checkSchema(companySchema), async function (req, res, next) {
    try {
        checkValidationErrors(req, res);
        res.json(await COMPANY.updateCompany(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating company`, err.message);
        next(err);
    }
});


module.exports = router;