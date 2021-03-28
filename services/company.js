const db = require('./db');

async function getCompany(id) {
    const result = await db.query(
        `SELECT name,about_text,phone,email,official_email from Company c where id=?`,
        [id]
    );
    console.log('Query Result', result)
    if (!result.length)
        return { message: 'The id of the Company was not found.' }
    else
        return result;
}

async function createCompany(company) {
    try {
        const result = await db.query(
            `INSERT INTO freedbtech_tarunjobsite.Company
        (name, about_text, phone, email, official_email)
        VALUES(?, ?, ?, ?, ?);
        `,
            [
                company.name,
                company.about_text,
                company.phone,
                company.email,
                company.official_email
            ]
        );
        console.log('Query Result', result)
        if (result.affectedRows) {
            return { id: result.insertId };
        }
        else
            return { message: result.message }

    }
    catch (err) {
        console.log('Error occured', err);
        return { message: err };
    }
}


async function updateCompany(id, company) {
    try {
        const result = await db.query(
            `UPDATE Company
            SET name=?, about_text=?, phone=?, email=?, official_email=?
            WHERE id=?;`,
            [
                company.name,
                company.about_text,
                company.phone,
                company.email,
                company.official_email,
                id
            ]
        );

        console.log('Query Result', result)
        if (result.affectedRows) {
            return { company };
        }
        else
            return { message: result.message }

    }
    catch (err) {
        console.log('Error occured', err);
        return { message: err };
    }
}



module.exports = {
    getCompany,
    createCompany,
    updateCompany
}



/**
 * {
   "name":"Company2",
   "about_text":"This is an Account Company",
   "phone":"4512541521",
   "email":"company2@thisis.com",
   "official_email":"thisisofficial@official.com"
}
 */