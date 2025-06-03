const joke = document.querySelector('.joke');
const jokeBtn = document.querySelector('.btn');


generateJoke = () => {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function() {
        if (this.readyState === 4 ) {
        const data = JSON.parse(this.responseText);

        joke.innerHTML = data.value;
        } else {
            joke.innerHTML = 'something went wrong...'; 
        }
    }

    xhr.send();
}


jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke)