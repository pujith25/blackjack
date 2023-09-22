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

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    let randomColor = Math.floor( Math.random()*4 ) + 1
    const img = new Image(120, 200);
    if(randomColor === 1){
       if (randomNumber === 1 ) {
           img.src = "images/AC.png"
           document.getElementById("card-img").appendChild(img)
           return 11
       } else if (randomNumber === 2) {
           img.src = "images/2C.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 3) {
           img.src = "images/3C.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 4) {
           img.src = "images/4C.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 5) {
           img.src = "images/5C.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 6) {
           img.src = "images/6C.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 7) {
           img.src = "images/7C.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 8) {
           img.src = "images/8C.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 9) {
           img.src = "images/9C.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 10) {
           img.src = "images/10C.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 11) {
           img.src = "images/JC.png"
           document.getElementById("card-img").appendChild(img)
           return 10
       } else if (randomNumber === 12) {
           img.src = "images/QC.png"
           document.getElementById("card-img").appendChild(img)
           return 10
       } else if (randomNumber === 13) {
           img.src = "images/KC.png"
           document.getElementById("card-img").appendChild(img)
           return 10
       }
    }
    else if(randomColor === 2){
       if (randomNumber === 1 ) {
           img.src = "images/AD.png"
           document.getElementById("card-img").appendChild(img)
           return 11
       } else if (randomNumber === 2) {
           img.src = "images/2D.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 3) {
           img.src = "images/3D.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 4) {
           img.src = "images/4D.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 5) {
           img.src = "images/5D.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 6) {
           img.src = "images/6D.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 7) {
           img.src = "images/7D.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 8) {
           img.src = "images/8D.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 9) {
           img.src = "images/9D.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 10) {
           img.src = "images/10D.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 11) {
           img.src = "images/JD.png"
           document.getElementById("card-img").appendChild(img)
           return 10
       } else if (randomNumber === 12) {
           img.src = "images/QD.png"
           document.getElementById("card-img").appendChild(img)
           return 10
       } else if (randomNumber === 13) {
           img.src = "images/KD.png"
           document.getElementById("card-img").appendChild(img)
           return 10
       }
       
    }
    else if(randomColor === 3){
       if (randomNumber === 1 ) {
           img.src = "images/AH.png"
           document.getElementById("card-img").appendChild(img)
           return 11
       } else if (randomNumber === 2) {
           img.src = "images/2H.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 3) {
           img.src = "images/3H.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 4) {
           img.src = "images/4H.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 5) {
           img.src = "images/5H.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 6) {
           img.src = "images/6H.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 7) {
           img.src = "images/7H.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 8) {
           img.src = "images/8H.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 9) {
           img.src = "images/9H.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 10) {
           img.src = "images/10H.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 11) {
           img.src = "images/JH.png"
           document.getElementById("card-img").appendChild(img)
           return 10
       } else if (randomNumber === 12) {
           img.src = "images/QH.png"
           document.getElementById("card-img").appendChild(img)
           return 10
       } else if (randomNumber === 13) {
           img.src = "images/KH.png"
           document.getElementById("card-img").appendChild(img)
           return 10
       }
       
    }
    else if(randomColor === 4){
       if (randomNumber === 1 ) {
           img.src = "images/AS.png"
           document.getElementById("card-img").appendChild(img)
           return 11
       } else if (randomNumber === 2) {
           img.src = "images/2S.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 3) {
           img.src = "images/3S.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 4) {
           img.src = "images/4S.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 5) {
           img.src = "images/5S.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 6) {
           img.src = "images/6S.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 7) {
           img.src = "images/7S.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 8) {
           img.src = "images/8S.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 9) {
           img.src = "images/9S.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 10) {
           img.src = "images/10S.png"
           document.getElementById("card-img").appendChild(img)
           return randomNumber
       } else if (randomNumber === 11) {
           img.src = "images/JS.png"
           document.getElementById("card-img").appendChild(img)
           return 10
       } else if (randomNumber === 12) {
           img.src = "images/QS.png"
           document.getElementById("card-img").appendChild(img)
           return 10
       } else if (randomNumber === 13) {
           img.src = "images/KS.png"
           document.getElementById("card-img").appendChild(img)
           return 10
       }
       
    }
    
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
