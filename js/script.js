const chest = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = ['Nie!', 'Tak!', 'Raczej nie :(', 'Raczej tak :)', 'Nie chcesz znać odpowiedzi...'];
  



const shakeChest = () => {
    chest.classList.add('shake-animation')
    setTimeout(checkInput, 1500)
}




const checkInput = () => {
    if(input.value !== '' && input.value.slice(-1) === '?'){
        showAnswers()
        error.textContent = ''      
    } else if (input.value !== '' && input.value.slice(-1) !== '?'){
        error.textContent = 'Zakończ pytanie znakiem "?".'
        answer.textContent = ''
    } else {
        error.textContent = 'Zadaj dowolne pytanie!'
        answer.textContent = ''
        
    }
    chest.classList.remove('shake-animation')
}



const showAnswers = () => {
   
    const numbers = Math.floor(Math.random() * 5)
    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[numbers]}`
   

}

chest.addEventListener('click', shakeChest)
