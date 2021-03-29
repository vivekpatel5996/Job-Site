const db = require('./db');

async function getColleges(serachTerm) {
    const result = await db.query(
        `SELECT name from college c WHERE name like '%${serachTerm}%'`,
    );
    let matchedColleges = result.map(i => i.name);
    console.log("Matched Colleges", matchedColleges);
    if (!result.length)
        return { message: 'Not any colleges found.' }
    else
        return matchedColleges;
}


module.exports = {
    getColleges
}
