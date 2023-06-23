// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number.


// const apiurl = 'http://numbersapi.com/3?json';

// fetch(apiurl)
// .then(response => response.json())
// .then(data => {console.log('Fact about number 3 :', data.text);
// })
// .catch(error => {
//     console.log('ERROR', error)
// })


// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.


// const numbers = [7, 42, 99, 123];
// const factContainer = document.getElementById('fact-container');

// numbers.forEach(number => {
//   const apiUrl = `http://numbersapi.com/${number}?json`;

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       const fact = data.text;
//       const factElement = document.createElement('p');
//       factElement.textContent = `Fact about ${number}: ${fact}`;
//       factContainer.appendChild(factElement);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// });


// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
// const number = 7;
// const factContainer = document.getElementById('fact-container');

// const fetchFact = async () => {
//   try {
//     for (let i = 0; i < 4; i++) {
//       const apiUrl = `http://numbersapi.com/${number}?json`;
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       const fact = data.text;
//       const factElement = document.createElement('p');
//       factElement.textContent = fact;
//       factContainer.appendChild(factElement);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// fetchFact();


