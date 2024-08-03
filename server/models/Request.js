const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Request extends Model { }

Request.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    mainStudent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    student1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    student2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    student3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'request',
  }
);

module.exports = Request;

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

const seedData = students.map((mainStudent) => {
  const remainingStudents = students.filter(student => student !== mainStudent);
  const randomStudents = [...remainingStudents].sort(() => 0.5 - Math.random()).slice(0, 3);

  return {
    mainStudent,
    student1: randomStudents[0],
    student2: randomStudents[1],
    student3: randomStudents[2],
  };
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Requests', seedData, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Requests', null, {});
  },
};
