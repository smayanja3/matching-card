const container = document.querySelector('#container')
container.addEventListener('click', pickCard)

document.querySelector('button').addEventListener('click', random)
let flipOne = undefined
let flipTwo = undefined
// randomize cards outside
function random() {
    container.innerHTML = ''
    // vvv cards
    let cards = ['turtle', 'turtle', 'frog', 'frog', 'cat', 'cat', 'dog', 'dog', 'mouse', 'mouse']
    while (cards.length > 0) { //<---- while (cards.length) truthy
        const rando = Math.floor(Math.random() * cards.length)
        const div = document.createElement('div')
        container.appendChild(div)
        div.classList.add(cards[rando])
        div.innerText = 'Cards' // empty string to help css
        cards.splice(rando, 1)
    }
    flipOne = undefined
    flipTwo = undefined
}
random()


function pickCard(e) {
    console.log(e.target) ///<--- the element that the user clicked on (target)
    //click/ flip, click /flip, them compare
    // vv looking inside our element and changing its InnerText to its Class Name
    e.target.innerText = e.target.className
    // create variables to store
    if (flipOne != undefined) {
        flipTwo = e.target
    } else {
        flipOne = e.target
        return
    }
    // a = c 
    // b = c
    // a = b
    if (flipOne.className === flipTwo.className) {
        console.log('Match')
        // if match stay flipped

    } else {
        console.log('Try Again')
        //if not match flip back
        flipOne.innerText = 'Card' // empty string to help css
        flipTwo.innerText = 'Card' // empty string to help css
    }
    // after every match set
    flipOne = undefined
    flipTwo = undefined

    // randomize
    // restart

}
