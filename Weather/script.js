// const url = 'https://me-weather.p.rapidapi.com/?get=cities';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '168075a792mshd257d2bf048f015p1998b0jsn2aef54b30a30',
// 		'X-RapidAPI-Host': 'me-weather.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// const options = {
// 	method: 'GET',
// 	headers: {
// 	'X-RapidAPI-Key': '168075a792mshd257d2bf048f015p1998b0jsn2aef54b30a30',
// 	'X-RapidAPI-Host': 'me-weather.p.rapidapi.com'
// 	};
// 	fetch('https://me-weather.p.rapidapi.com/?get=cities', options)
// 	.then (response => response.json())
// 	.then (response => console.log(response ))
// 	.catch(err => console.error(err));
// }

// const options = {
// 	method: 'GET',
// 	headers: {
// 	'X-RapidAPI-Key': '168075a792mshd257d2bf048f015p1998b0jsn2aef54b30a30',
// 	'X-RapidAPI-Host': 'me-weather.p.rapidapi.com'
// 	}
// 	};
	
// 	fetch('https://me-weather.p.rapidapi.com/?get=cities', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const url = 'https://open-weather13.p.rapidapi.com/city/landon';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '168075a792mshd257d2bf048f015p1998b0jsn2aef54b30a30',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}