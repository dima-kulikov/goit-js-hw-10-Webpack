
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