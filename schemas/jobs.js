const companySchema =
{
    title: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "TitleNotPresent",
                "message": "Title of job not found",
            })
        }
    },
    description: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "DescriptionNotPresent",
                "message": "Job description not found",
            })
        }
    },

    company_id: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "CompanyIdNotPresent",
                "message": "Company that posted the job not found",
            })
        }
    },
    salary: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "SalaryNotPresent",
                "message": "Salary of job not found",
            })
        }
    },
    college: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "CollegeNotPresent",
                "message": "College allowed for job application not found",
            })
        }
    },
    degree: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "DegreeNotPresent",
                "message": "Degree allowed for job application is not found",
            })
        }
    },
    field_of_study: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "FieldOfStudyNotPresent",
                "message": "Fields of study allowed for job application not found",
            })
        }
    },
    location: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "LocationNotPresent",
                "message": "Location for job posting is not found",
            })
        }
    }

}


module.exports = companySchema;
