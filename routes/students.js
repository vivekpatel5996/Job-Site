const express = require('express');
const router = express.Router();
const STUDENT = require('../services/students');
const studentSchema = require("../schemas/students");
const { checkSchema } = require('express-validator');
const checkValidationErrors = require("../helpers/checkValidationErros");
/**
 * @description Get a student
 */
router.get('/:id', async function (req, res, next) {
    try {
        res.json(await STUDENT.getStudent(req.params.id));
    } catch (err) {
        console.error(`Error while creating student`, err.message);
        next(err);
    }
});


/**
 * @description Create a student
 */
router.post('/', checkSchema(studentSchema), async function (req, res, next) {
    try {
        console.log("student body", req.body);
        checkValidationErrors(req, res);
        res.json(await STUDENT.createStudent(req.body));
    } catch (err) {
        console.error(`Error while creating student`, err.message);
        next(err);
    }
});



/**
 * @description Update a student
 */
router.put('/:id', checkSchema(studentSchema), async function (req, res, next) {
    try {
        checkValidationErrors(req, res);
        res.json(await STUDENT.updateStudent(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating student`, err.message);
        next(err);
    }
});



module.exports = router;