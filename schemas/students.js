const studentSchema =
{
    name: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "NameNotPresent",
                "message": "Short name or no name found",
            })
        }
    },
    phone: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "PhoneNotPresent",
                "message": "Phone number of student not found",
            })
        }
    },
    email: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "EmailNotPresent",
                "message": "Email of student not found",
            })
        }
    },
    college: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "CollegeNotPresent",
                "message": "College of student not found",
            })
        }
    },
    degree: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "DegreeNotPresent",
                "message": "Degree of student not found",
            })
        }
    },
    field_of_study: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "FieldOfStudyNotPresent",
                "message": "Field of study of student not found",
            })
        }
    }
}


module.exports = studentSchema;
