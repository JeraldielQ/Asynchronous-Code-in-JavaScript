// 1.Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number.


// const drawCardBtn = document.getElementById('drawCardBtn');

// drawCardBtn.addEventListener('click', () => {
//   const apiUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       const deckId = data.deck_id;
//       const drawCardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;

//       fetch(drawCardUrl)
//         .then(response => response.json())
//         .then(cardData => {
//           const card = cardData.cards[0];
//           const value = card.value;
//           const suit = card.suit;
//           const cardName = `${value} of ${suit}`;
//           console.log(cardName);
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// });


// 2.Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.
// Once you have both cards, console.log the values and suits of both cards.


// const apiUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     const deckId = data.deck_id;
//     const drawCardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;

//     fetch(drawCardUrl)
//       .then(response => response.json())
//       .then(cardData => {
//         const cards = cardData.cards;
//         const card1 = cards[0];
//         const card2 = cards[1];

//         const value1 = card1.value;
//         const suit1 = card1.suit;
//         const cardName1 = `${value1} of ${suit1}`;

//         const value2 = card2.value;
//         const suit2 = card2.suit;
//         const cardName2 = `${value2} of ${suit2}`;

//         console.log(`Card 1: ${cardName1}`);
//         console.log(`Card 2: ${cardName2}`);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

const drawCardBtn = document.getElementById('drawCardBtn');
const cardContainer = document.getElementById('cardContainer');
let deckId = null;

// Function to create a new deck
const createNewDeck = () => {
  const apiUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      deckId = data.deck_id;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

// Function to draw a card from the deck
const drawCard = () => {
  if (deckId) {
    const drawCardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;

    fetch(drawCardUrl)
      .then(response => response.json())
      .then(cardData => {
        const card = cardData.cards[0];
        const value = card.value;
        const suit = card.suit;
        const cardName = `${value} of ${suit}`;

        const cardElement = document.createElement('p');
        cardElement.textContent = cardName;
        cardContainer.appendChild(cardElement);

        if (cardData.remaining === 0) {
          drawCardBtn.disabled = true;
          drawCardBtn.textContent = 'No More Cards';
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
};

// Event listener for drawing a card
drawCardBtn.addEventListener('click', drawCard);

// Create a new deck when the page loads
window.addEventListener('load', createNewDeck);
