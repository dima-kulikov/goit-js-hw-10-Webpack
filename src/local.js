localStorage.setItem('theme', 'light');

const settings = {
    theme: 'light',
    namber: 777,
    color: 'red',
    position: 'top',
};

localStorage.setItem('settings', JSON.stringify(settings));

const persistedConfig = localStorage.getItem('settings');
const parsConfig = JSON.parse(persistedConfig);

console.log(parsConfig);



