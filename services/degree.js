const db = require('./db');

async function getDegrees(serachTerm) {
    const result = await db.query(
        `SELECT name from degree c WHERE name like '%${serachTerm}%'`,
    );
    let matchedDegrees = result.map(i => i.name);
    console.log("Matched degrees", matchedDegrees);
    if (!result.length)
        return { message: 'Not any degrees found.' }
    else
        return matchedDegrees;
}


module.exports = {
    getDegrees
}
