#### A Language Learning Tool Built with React and Firebase

_Minderva is a language learning app that uses translation, text-to-speech and flashcards to help language learners collect and review vocabulary. This is a short review of the app and the tech stack I used to create it._

[Live Site](https://minderva-17770.web.app/) | [Github](https://github.com/dwainetrain/minderva)

![Screen Shot 2020-11-16 at 8.32.05 AM.png](https://media.graphcms.com/BVvOnMrwSya1zVDQM9Yk)

## Introduction

While learning Japanese I wanted a tool that would allow for quick translation of words and phrases, provide accurate pronunciation and also allow me to save those translations for later review. It's out of this idea that Minderva was born. I first did some experiments with vanilla Javascript before developing the tool finally in React with a Firebase Backend.

## The tech stack

**React:** Using this library I could quickly organize the project into components and focus on their singular functionality. I built it off a create-react-app installation that I then later customized.

**Firebase Platform:**

- **Cloud Firestore:** A NoSQL database that uses JSON documents to store data. For the minimal amount of data I wanted to hold I thought this was a perfect fit.

- **Google Cloud Functions:** The cloud functions make communicating with other Google services very straight forward. Since your account is linked within Firebase you can bypass many API authentication headaches. I also use Cloud Functions to create a default user profile whenever a new user signs up.

- **Google Translate and Text-to-Speech:** The cloud functions handle getting translations from the Google Translate API, and then passing that translation to the Google Text-to-Speech API, which creates an mp3 file that is then saved to storage. This allows for quick pronunciation retrieval when a user is reviewing their saved translations.

![Screen Shot 2020-11-16 at 8.35.45 AM.png](https://media.graphcms.com/I77lrFvTSSyrLy7qZ5A5)

**Chakra UI:** Chakra UI is a component library for React that puts accessibility first. It provided an excellent foundation for the user interface. It allows for theming, and it's nicely customizable. I really wanted to focus on the UX of the app, making its functions and actions clear, and Chakra UI helped immensely.

## My Development Process

I started very basic, with no styling or other concerns and just worked on getting logic working. For instance for my very first version, I just wanted to get the most basic elements working CRUD working on sample data. This is an example of my MVP for version 0.01:

- It should display cards
- It should add to cards
- It should delete cards
- It should edit cards

And from there I would add piece by piece the functionality I wanted to achieve. Obviously, the project grew in complexity, and had to be split into separate concerns, ie, ux/ui, backend, bugs.

Overall this working process served me well and allowed me to complete the project in a short amount of time.

## Unique Challenges

Learning how to wield React and state management were the first real challenges. I decided to go all in on React Hooks and I'm glad I did. I found the code much less cluttered than with Class based components, and there was no functionality missed. Getting my head around certain concepts, like useEffect, took awhile, but after many applications I see the power of them.

For instance, here's how I randomize the cards for the Quiz section of the site:

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

And here's what the user sees. Just the cards, randomized on each quiz reload.

![Screen Shot 2020-11-16 at 8.32.34 AM.png](https://media.graphcms.com/dBfDz9k0TS6VHH2QVMCd)

## In conclusion

Overall I'm happy with the functionality of the app. There are still a few bugs and accessibility issues I'd like to tackle in this version. I would love to take it further and inject it with more personality and a few more concepts that have arisen from my research into language learning. So, it's a project that will stay on my radar and grow. 頑張ったね！
