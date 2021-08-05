
// import './sass/main.scss';
// import './sass/_example.scss';


import posts from './data.json';
import postFeedItem from './templates/sample.hbs';




const refs = {
    postFeed: document.querySelector('.blog'),
};


buildPostFeed(posts);

function buildPostFeed(posts){
    const markup = posts.map(post => postFeedItem(post)).join('');
    refs.postFeed.insertAdjacentHTML('beforeend', markup);
}


// ----работа с JSON, ПРИВЕСТИ К СТРОКЕ ОБЪЕКТ

const dog = {
    name: 'mango',
    age: 5,
    isHappy: true,
};

const str = JSON.stringify(dog);

console.log(str)