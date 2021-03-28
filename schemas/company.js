const companySchema =
{
    name: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "NameNotPresent",
                "message": "Short name or no name found",
            })
        }
    },
    about_text: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "AboutNotPresent",
                "message": "About the company not found",
            })
        }
    },

    phone: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "PhoneNotPresent",
                "message": "Phone number of company person not found",
            })
        }
    },
    email: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "EmailNotPresent",
                "message": "Email of company person not found",
            })
        }
    },
    official_email: {
        exists: {
            errorMessage: JSON.stringify({
                "error": "OfficialEmailNotPresent",
                "message": "Official email of company person not found",
            })
        }
    }
}


module.exports = companySchema;
