let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let cardImg = document.getElementById("card-img")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    let randomColor = Math.floor( Math.random()*4 ) + 1
   // const img = new Image(120, 200);
   let str = ""
   let ans = -1
    if(randomColor === 1){
       if (randomNumber === 1 ) {
           str = "<img id = 'image' src = 'images/AC.png'>"
           ans = 11
       } else if (randomNumber === 2) {
           str = "<img id = 'image' src = 'images/2C.png'>"
           ans = randomNumber
       } else if (randomNumber === 3) {
           str = "<img id = 'image' src = 'images/3C.png'>"
           ans = randomNumber
       } else if (randomNumber === 4) {
        str = "<img id = 'image' src = 'images/4C.png'>"
        ans = randomNumber
       } else if (randomNumber === 5) {
        str = "<img id = 'image' src = 'images/5C.png'>"
        ans = randomNumber
       } else if (randomNumber === 6) {
        str = "<img id = 'image' src = 'images/6C.png'>"
        ans = randomNumber
       } else if (randomNumber === 7) {
        str = "<img id = 'image' src = 'images/7C.png'>"
        ans = randomNumber
       } else if (randomNumber === 8) {
        str = "<img id = 'image' src = 'images/8C.png'>"
        ans = randomNumber
       } else if (randomNumber === 9) {
        str = "<img id = 'image' src = 'images/9C.png'>"
        ans = randomNumber
       } else if (randomNumber === 10) {
        str = "<img id = 'image' src = 'images/10C.png'>"
        ans = randomNumber
       } else if (randomNumber === 11) {
        str = "<img id = 'image' src = 'images/JC.png'>"
        ans = 10
       } else if (randomNumber === 12) {
        str = "<img id = 'image' src = 'images/QC.png'>"
        ans = 10
       } else if (randomNumber === 13) {
        str = "<img id = 'image' src = 'images/KC.png'>"
        ans = 10
       }
    }
    else if(randomColor === 2){
        if (randomNumber === 1 ) {
            str = "<img id = 'image' src = 'images/AD.png'>"
            ans = 11
        } else if (randomNumber === 2) {
            str = "<img id = 'image' src = 'images/2D.png'>"
            ans = randomNumber
        } else if (randomNumber === 3) {
            str = "<img id = 'image'src = 'images/3D.png'>"
            ans = randomNumber
        } else if (randomNumber === 4) {
         str = "<img id = 'image' src = 'images/4D.png'>"
         ans = randomNumber
        } else if (randomNumber === 5) {
         str = "<img id = 'image' src = 'images/5D.png'>"
         ans = randomNumber
        } else if (randomNumber === 6) {
         str = "<img id = 'image' src = 'images/6D.png'>"
         ans = randomNumber
        } else if (randomNumber === 7) {
         str = "<img id = 'image' src = 'images/7D.png'>"
         ans = randomNumber
        } else if (randomNumber === 8) {
         str = "<img id = 'image' src = 'images/8D.png'>"
         ans = randomNumber
        } else if (randomNumber === 9) {
         str = "<img id = 'image' src = 'images/9D.png'>"
         ans = randomNumber
        } else if (randomNumber === 10) {
         str = "<img id = 'image' src = 'images/10D.png'>"
         ans = randomNumber
        } else if (randomNumber === 11) {
         str = "<img id = 'image' src = 'images/JD.png'>"
         ans = 10
        } else if (randomNumber === 12) {
         str = "<img id = 'image' src = 'images/QD.png'>"
         ans = 10
        } else if (randomNumber === 13) {
         str = "<img id = 'image' src = 'images/KD.png'>"
         ans = 10
        }
    }
    else if(randomColor === 3){
        if (randomNumber === 1 ) {
            str = "<img id = 'image' src = 'images/AH.png'>"
            ans = 11
        } else if (randomNumber === 2) {
            str = "<img id = 'image' src = 'images/2H.png'>"
            ans = randomNumber
        } else if (randomNumber === 3) {
            str = "<img id = 'image' src = 'images/3H.png'>"
            ans = randomNumber
        } else if (randomNumber === 4) {
         str = "<img id = 'image' src = 'images/4H.png'>"
         ans = randomNumber
        } else if (randomNumber === 5) {
         str = "<img id = 'image' src = 'images/5H.png'>"
         ans = randomNumber
        } else if (randomNumber === 6) {
         str = "<img id = 'image' src = 'images/6H.png'>"
         ans = randomNumber
        } else if (randomNumber === 7) {
         str = "<img id = 'image' src = 'images/7H.png'>"
         ans = randomNumber
        } else if (randomNumber === 8) {
         str = "<img id = 'image' src = 'images/8H.png'>"
         ans = randomNumber
        } else if (randomNumber === 9) {
         str = "<img id = 'image' src = 'images/9H.png'>"
         ans = randomNumber
        } else if (randomNumber === 10) {
         str = "<img id = 'image' src = 'images/10H.png'>"
         ans = randomNumber
        } else if (randomNumber === 11) {
         str = "<img id = 'image' src = 'images/JH.png'>"
         ans = 10
        } else if (randomNumber === 12) {
         str = "<img id = 'image'  src = 'images/QH.png'>"
         ans = 10
        } else if (randomNumber === 13) {
         str = "<img id = 'image' src = 'images/KH.png'>"
         ans = 10
        } 
    }
    else if(randomColor === 4){
        if (randomNumber === 1 ) {
            str = "<img id = 'image' src = 'images/AS.png'>"
            ans = 11
        } else if (randomNumber === 2) {
            str = "<img id = 'image' src = 'images/2S.png'>"
            ans = randomNumber
        } else if (randomNumber === 3) {
            str = "<img id = 'image' src = 'images/3S.png'>"
            ans = randomNumber
        } else if (randomNumber === 4) {
         str = "<img id = 'image' src = 'images/4S.png'>"
         ans = randomNumber
        } else if (randomNumber === 5) {
         str = "<img id = 'image' src = 'images/5S.png'>"
         ans = randomNumber
        } else if (randomNumber === 6) {
         str = "<img id = 'image' src = 'images/6S.png'>"
         ans = randomNumber
        } else if (randomNumber === 7) {
         str = "<img id = 'image' src = 'images/7S.png'>"
         ans = randomNumber
        } else if (randomNumber === 8) {
         str = "<img id = 'image' src = 'images/8S.png'>"
         ans = randomNumber
        } else if (randomNumber === 9) {
         str = "<img id = 'image' src = 'images/9S.png'>"
         ans = randomNumber
        } else if (randomNumber === 10) {
         str = "<img id = 'image' src = 'images/10S.png'>"
         ans = randomNumber
        } else if (randomNumber === 11) {
         str = "<img id = 'image' src = 'images/JS.png'>"
         ans = 10
        } else if (randomNumber === 12) {
         str = "<img id = 'image' src = 'images/QS.png'>"
         ans = 10
        } else if (randomNumber === 13) {
         str = "<img id = 'image' src = 'images/KS.png'>"
         ans = 10
        }   
    }
 cardImg.innerHTML += str 
 return ans
}

function removeImageById(imageId) {
    var imageElement = document.getElementById(imageId);

    if (imageElement) {
        imageElement.parentNode.removeChild(imageElement);
    }
}

function startGame() {
    //Remove the existing cards if any
    var divElement = document.getElementById("card-img"); 
    while (divElement.firstChild) {
        divElement.removeChild(divElement.firstChild);
     }
  

    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }   
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
