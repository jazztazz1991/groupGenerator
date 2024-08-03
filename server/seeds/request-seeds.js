const sequelize = require('../config/connection');
const { Request } = require('../models/');


const students = [
    'Adam Kaufman-frey',
    'Alexander Brown',
    'Alexander Diaz',
    'Alexandrinov Silien',
    'Alondra Santana',
    'Amanda Changa',
    'Breanna Camacho',
    'Brian Zhen',
    'Charisse Ramsarran',
    'Corey Chamberlain',
    'David Barren',
    'Derick Hernandez',
    'Drew Andersen',
    'Eliot Cho',
    'Hamid Assaghli',
    'Heatherellen Strain',
    'Jack Rozovsky',
    'Jacob Robison',
    'James Parker',
    'Jordan Reeve',
    'Jose Muchati',
    'Justin McLaughlin',
    'Kayci Mercer',
    'Luis Lima',
    'Mark Norberte',
    'Melvin Urias',
    'Rawnaq Kabairzad',
    'Reina Simms',
    'Robert Green',
    'Sai Greeshma Shreya Yerragudi',
    'Setrige Crawford',
    'William Allred',
    'Xavier Leon',
];

const createRequests = async () => {
    for (const mainStudent of students) {
        const remainingStudents = students.filter(student => student !== mainStudent);
        const randomStudents = [...remainingStudents].sort(() => 0.5 - Math.random()).slice(0, 3);

        await Request.create({
            mainStudent,
            student1: randomStudents[0],
            student2: randomStudents[1],
            student3: randomStudents[2],
        });
    }
};

createRequests();

