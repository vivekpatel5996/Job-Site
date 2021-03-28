const db = require('./db');

async function getJob(id) {
    const result = await db.query(
        `SELECT title, description, company_id, salary, college, \`degree\`, field_of_study, location from Jobs c where id=?`,
        [id]
    );
    console.log('Query Result', result)
    if (!result.length)
        return { message: 'The id of the Job was not found.' }
    else
        return result;
}

async function createJob(job) {
    try {
        const result = await db.query(
            `INSERT INTO Jobs
            (title, description, company_id, salary, college, \`degree\`, field_of_study, location)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?);
            `,
            [
                job.title,
                job.description,
                job.company_id,
                job.salary,
                job.college,
                job.degree,
                job.field_of_study,
                job.location
            ]
        );
        console.log('Query Result', result.errno)
        if (result.affectedRows) {
            return { id: result.insertId };
        }
        //If company with id is not present in Company Table
        else if (result.errno == 1452) {
            return {
                "error": "CompanyIdNotPresent",
                "message": "Company that posted the job not found",
            };
        }
        else
            return { message: result.message }

    }
    catch (err) {
        console.log('Error occured', err);
        return { message: err };
    }
}


async function updateJob(id, job) {
    try {
        const result = await db.query(
            `UPDATE Jobs
            SET title=?, description=?, company_id=?, salary=?, college=?, \`degree\`=?, field_of_study=?, location=?
            WHERE id=?;
            `,
            [
                job.title,
                job.description,
                job.company_id,
                job.salary,
                job.college,
                job.degree,
                job.field_of_study,
                job.location,
                id
            ]
        );

        console.log('Query Result', result.errno)
        if (result.affectedRows) {
            return { job };
        }
        //If company with id is not present in Company Table
        else if (result.errno == 1452) {
            return {
                "error": "CompanyIdNotPresent",
                "message": "Company that posted the job not found",
            };
        }
        else
            return { message: result.message }

    }
    catch (err) {
        console.log('Error occured', err);
        return { message: err };
    }
}


async function removeJob(id) {

    try {
        const result = await db.query(
            `DELETE FROM Jobs WHERE id=?`,
            [id]
        );

        if (result.affectedRows) {
            return { message: 'Job deleted successfully' };
        }
        else
            return {
                "error": "JobNotFound",
                "message": "Job id not found",
            };
    }
    catch (err) {
        console.log('Error occured', err);
        return { message: err };
    }
}



module.exports = {
    getJob,
    createJob,
    updateJob,
    removeJob
}

