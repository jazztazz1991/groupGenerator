const router = require('express').Router();
const { Request } = require('../../models/');
// const { apiGuard } = require('../../utils/authGuard');

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
]



router.post('/submitRequest', async (req, res) => {
    try {
        console.log('submitRequest running')
        const data = req.body.body;
        const studentRequest = {
            mainStudent: data[0],
            student1: data[1],
            student2: data[2],
            student3: data[3],
        }
        const requestData = await Request.create(studentRequest)
        res.status(200).json(req.body)
    } catch (err) {
        console.error(err)
        res.status(400).json(err)
    }

})


router.get('/generateGroups', async (req, res) => {
    try {
        const requestData = await Request.findAll()

        const requests = requestData.map((request) => request.get({ plain: true }))


        res.json(requests)
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
})

module.exports = router;