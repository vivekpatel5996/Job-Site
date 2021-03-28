const db = require('./db');

const errorMessages = {
    "job_id": {
        "error": "JobIDNotPresent",
        "message": "Job ID not found",
    },
    "company_id": {
        "error": "CompanyIDNotPresent",
        "message": "Company ID not found",
    },
    "student_id": {
        "error": "StudentIDNotPresent",
        "message": "Student ID not found",
    }
}

async function createJobApplicant(jobapplicant) {
    try {
        const result = await db.query(
            `INSERT INTO Job_Applicants
            (job_id, company_id, student_id, application_status, resume_link)
            VALUES(?,?,?,?,?);
            ;`,
            [
                jobapplicant.job_id,
                jobapplicant.company_id,
                jobapplicant.student_id,
                jobapplicant.application_status,
                jobapplicant.resume_link
            ]
        );
        console.log('Query Result', result)
        if (result.affectedRows) {
            return { id: result.insertId };
        }
        else if (result.errno == 1452) {
            if (result.sqlMessage.includes('job_id'))
                return errorMessages['job_id']
            else if (result.sqlMessage.includes('company_id'))
                return errorMessages['company_id']
            else
                return errorMessages['student_id']
        }
        else
            return { message: result.message }

    }
    catch (err) {
        console.log('Error occured', err);
        return { message: err };
    }
}


async function updateJobApplicant(id, jobapplicant) {
    try {
        const result = await db.query(
            `UPDATE Job_Applicants SET application_status=? WHERE id=?;`,
            [
                jobapplicant.application_status,
                id
            ]
        );

        console.log('Query Result', result)
        if (result.affectedRows) {
            return { jobapplicant };
        }
        else
            return { message: result.message }

    }
    catch (err) {
        console.log('Error occured', err);
        return { message: err };
    }
}


async function removeJobApplicant(id) {
    try {
        const result = await db.query(
            `DELETE FROM Job_Applicants WHERE id=?`,
            [id]
        );

        if (result.affectedRows) {
            return { message: 'Job Applicant deleted successfully' };
        }
        else
            return {
                "error": "JobApplicationNotFound",
                "message": "The id of the Job application was not found.",
            };
    }
    catch (err) {
        console.log('Error occured', err);
        return { message: err };
    }
}




module.exports = {
    createJobApplicant,
    updateJobApplicant,
    removeJobApplicant,
}


