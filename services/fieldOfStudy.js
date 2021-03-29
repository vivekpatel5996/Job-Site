const db = require('./db');

async function getFieldOStudy(serachTerm) {
    const result = await db.query(
        `SELECT name from field_of_study WHERE name like '%${serachTerm}%'`,
    );
    let matchedFieldOfStyudies = result.map(i => i.name);
    console.log("Matched field of studies", matchedFieldOfStyudies);
    if (!result.length)
        return { message: 'Not any field of study found.' }
    else
        return matchedFieldOfStyudies;
}


module.exports = {
    getFieldOStudy
}
