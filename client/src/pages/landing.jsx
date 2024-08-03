import 'materialize-css';
import { useState } from 'react';
import instance from '../hooks/API';

const Landing = () => {
	const [request, setRequest] = useState([]);
	const [current, setCurrent] = useState();
	const [student1, setStudent1] = useState();
	const [student2, setStudent2] = useState();
	const [student3, setStudent3] = useState();

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
		'Luis Lima',
		'Mark Norberte',
		'Melvin Urias',
		'Rawnaq Kabairzad',
		'Reina Simms',
		'Robert Green',
		'Shreya Yerragudi',
		'Setrige Crawford',
		'William Allred',
		'Xavier Leon',
	];

	const handleChange = (e) => {
		setRequest((request) => [...request, e.value]);
	};

	const submitRequest = async (event) => {
		event.preventDefault();

		console.log(request);
		const response = await instance.post('/api/requests/submitRequest', {
			body: request,
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response) {
			console.log(response);
		}
	};

	return (
		<>
			<h1>Group Requests Form</h1>
			<div className='input-field col s12'>
				<select onChange={(e) => handleChange(e.target)}>
					<option value='' disabled selected>
						Choose your option
					</option>
					{students.map((student) => (
						<option key={student} value={student}>
							{student}
						</option>
					))}
				</select>
				<label> Select Your Name</label>
				<h2>
					Select 3 students you would like to work with. (this is not guaranteed
					just a request)
				</h2>
				<select onChange={(e) => handleChange(e.target)}>
					<option value='' disabled selected>
						Choose your option
					</option>
					{students.map((student) => (
						<option key={student} value={student}>
							{student}
						</option>
					))}
				</select>
				<label> Select The Fist Student</label>
				<br />
				<br />
				<select onChange={(e) => handleChange(e.target)}>
					<option value='' disabled selected>
						Choose your option
					</option>
					{students.map((student) => (
						<option key={student} value={student}>
							{student}
						</option>
					))}
				</select>
				<label> Select The Second Student</label>
				<br />
				<br />
				<select onChange={(e) => handleChange(e.target)}>
					<option value='' disabled selected>
						Choose your option
					</option>
					{students.map((student) => (
						<option key={student} value={student}>
							{student}
						</option>
					))}
				</select>
				<label> Select The Third Student</label>
				<br />
				<br />
				<button
					className='waves-effect waves-light btn'
					onClick={submitRequest}
				>
					button
				</button>
			</div>
		</>
	);
};

export default Landing;
