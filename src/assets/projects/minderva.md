## A Language Learning Tool Built with React and Firebase

_Introduction to the project, why you started creating it, a mention of its earlier versions. Your method. Goals, expected outcomes, the future. What I would do again, what I wouldn't do again. I'm a language learning enthusist_

[Live Site](https://minderva-17770.web.app/) | [Github](https://github.com/dwainetrain/minderva)

Minderva is a language learning app that uses translatoin, text-to-speech and flashcards to help language learners collect and review vocabulary. I've had the idea for years and built a very basic version in vanilla javascript months before attempting it in React. This is just a short review of the app and the tech stack I used to create it.

Image of homepage:

ReactJS Library: Helped with organizing this project. I could quickly organize into components and focus on their singular functionality. I built it off a create-react-app that I then later customized.

Firebase Platform:

- Cloud Firestore: A NoSQL database that uses JSON documents to store data. For the minimal amount of data I wanted to hold I thought this was a perfect fit.

- Google Cloud Functions: The cloud functions make communicating with other Google services very straight forward. Since your account is linked within Firebase you can bypass many API authentication headaches. I also use Cloud Functions to create a default user profile whenever a new user sign's up.

- Google Translate: This API is used to translate words and phrases that the learner is interested in saving.

- Google Text-to-Speech: After translation, the user has the option to listen to and save audio translations.

Chakra UI: Chakra UI puts acceessiblity first and provided an excellent foundation for the user interface. It allows for themeing, and it nicely customizable.

## The Process

Built up from very basic concepts, that eventually became the app.

- It should
- It should

Connecting to the API, using cloud functions and useEffect to retieve data.

Creating the Quiz:

```javascript
// Function to shuffle the cards
const shuffleCards = (cards) =>
  cards
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

// On loading the quiz, create a quiz object that shuffles the cards by an order number
useEffect(() => {
  const quizData = () => {
    const cards = cardCollection.map((card, index) => {
      return { order: index, ...card };
    });
    return shuffleCards(cards);
  };

  setQuizCards(quizData());
}, [cardCollection, quizReset]);
```

Adding Cards:

Card Collection:

## In conclusion

I made it, and now I want to make more things. But less things like my portfolio. **Cheers!**
