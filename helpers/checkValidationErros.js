const { validationResult } = require('express-validator');
const checkValidationErrors = (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const errors = result.errors.map(err => JSON.parse(err.msg));
        console.log("Validation Errors", errors)
        return res.status(400).json(errors);
    }
}

module.exports = checkValidationErrors;