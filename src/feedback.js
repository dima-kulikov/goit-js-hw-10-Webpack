const refs = {
    form: document.querySelector('#feedback-form'),
};

const persistedFeedback = localStorage.getItem('feedback');

if(persistedFeedback){
    const textarea = refs.form.elements.message;

    textarea.value = persistedFeedback;
}

refs.form.addEventListener('input', e=>{
    // console.log('privvet');

    // console.dir(e.currentTarget);
    const textarea = e.currentTarget.elements.message;
    console.log(textarea.value);

    localStorage.setItem('feedback', textarea.value);
});