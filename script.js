const searchinput = document.querySelector('.search-input')
const list = document.querySelector('#list')




function isMatching(full, chuck) {
    let result = full.toLowerCase().indexOf(chuck.toLowerCase())

    return result != -1;
}


searchinput.addEventListener('keyup', () => {
    let items = document.querySelectorAll('.item')
    let value = searchinput.value;
    for (let item of items) {

        if (isMatching(item.textContent, value) == true) {
            item.style.display = 'flex'

        } else {
            item.style.display = 'none'
        }

    }
})
