const jobApplicantSchema =
{
    job_id: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "JobIDNotPresent",
                "message": "Job ID not found",
            })
        }
    },
    company_id: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "CompanyIDNotPresent",
                "message": "Company ID not found",
            })
        }
    },

    student_id: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "StudentIDNotPresent",
                "message": "Student ID not found",
            })
        }
    },
    application_status: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "ApplicationStatusNotPresent",
                "message": "Application status not found",
            })
        }
    },
    resume_link: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "ResumeLinkNotPresent",
                "message": "Resume link not found",
            })
        }
    }
}


module.exports = jobApplicantSchema;
