const btn = document.querySelector('.btn');
const emailInput = document.querySelector('#email');
const regexPatten = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const vaildationText = document.querySelector('.vaildation')
btn.addEventListener('click', e => {
    if (!emailInput.value.match(regexPatten)) {
        vaildationText.style.display = 'block';
        emailInput.style.borderColor = 'hsl(354, 100%, 66%)';
        e.preventDefault()
    }
    console.log(emailInput)

});