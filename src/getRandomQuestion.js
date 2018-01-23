const QUESTIONS = [
    { title: 'Which javascript built-in object allows you to intercept operations and implement custom behavior?', answer: 'proxy' },
    { title: 'What build-in object provides methods to intercept JavaScript operations?', answer: 'reflect' },
    { title: 'In which version JavaScript start support Proxy and Reflect?', answer: 'es6' },
    { title: 'Is that correct say that eval is a kind of metaprogramming? (yes/no)', answer: 'yes' },
    { title: 'Is Symbol a primitive data type in JavaScript? (yes/no)', answer: 'yes' },
    { title: 'what is the primary input to a Metaprogram?', answer: 'code' },
    { title: 'what is the common name given to the handler functions inside a proxy object?', answer: 'trap' },
];
const getRandomQuestion = () => {
    const question = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];

    return question;
};

export default getRandomQuestion;