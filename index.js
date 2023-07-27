let cards =[]
isAlive=false
hasBlackjack=false
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber>10) {
        return 10
    } else if (randomNumber===1){
        return 11
    } else{
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackjack=false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard, secondCard]
    cardsEl.textContent = "Cards: "
    for (let i =0; i<cards.length; i++){
        cardsEl.textContent += cards[i] +" "
    }

    sum=firstCard+secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum<21){
        messageEl.textContent="Do you wanna draw another card?"
    } else if (sum===21){
        messageEl.textContent="You've got Blackjack!"
        hasBlackjack=true
    } else{
        messageEl.textContent="You are out of game!"
        isAlive=false
    }
}

function newCard() {
    if (isAlive===true && hasBlackjack ===false){
    let card=getRandomCard()
    
    cards.push(card)
    cardsEl.textContent = "Cards: "
    for (let i =0; i<cards.length; i++){
        cardsEl.textContent += cards[i] +" "
    }

    sum += card
    sumEl.textContent = "Sum: " + sum
    if (sum<21){
        messageEl.textContent="Do you wanna draw another card?"
    } else if (sum===21){
        messageEl.textContent="You've won the Blackjack!"
        hasBlackjack=true
    } else{
        messageEl.textContent="You are out of game!"
        isAlive=false
    }
}
}
