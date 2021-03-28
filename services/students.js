const db = require('./db');


async function getStudent(id) {
    const result = await db.query(
        'Select name,phone,email,college,`degree`,field_of_study from Students s  where id=?',
        [id]
    );
    console.log('Query Result', result)
    if (!result.length)
        return { message: 'The id of the Student was not found.' }
    else
        return result;
}

async function createStudent(student) {
    try {
        const result = await db.query(
            `INSERT INTO Students
            (name, phone, email, college, \`degree\`, field_of_study)
            VALUES(?, ?, ?, ?, ?, ?);
            `,
            [
                student.name,
                student.phone,
                student.email,
                student.college,
                student.degree,
                student.field_of_study
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


async function updateStudent(id, student) {
    try {
        const result = await db.query(
            `UPDATE freedbtech_tarunjobsite.Students
            SET name=?, phone=?, email=?, college=?, \`degree\`=?, field_of_study=?
            WHERE id=?;
            `,
            [
                student.name,
                student.phone,
                student.email,
                student.college,
                student.degree,
                student.field_of_study,
                id
            ]
        );

        console.log('Query Result', result)
        if (result.affectedRows) {
            return { student };
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
    getStudent,
    createStudent,
    updateStudent
}