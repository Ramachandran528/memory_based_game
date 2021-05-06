const cards=document.querySelectorAll(".card");
console.log(cards);

// Variables
var isFlipped=false;
var firstCard,secondCard;

// If the card matches
const success=()=>{
    firstCard.removeEventListener("click",addClass);
    secondCard.removeEventListener("click",addClass);
    isFlipped=false;
    firstCard=secondCard=null;
}

// if the card does not matches
const failure=()=>{
    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        isFlipped=false;
        firstCard=secondCard=null;
    },1000);
}

// checking if the card match
const checkIt=(card)=>{
    if(!isFlipped)
    {
        isFlipped=true;
        firstCard=card;
    }
    else{
        secondCard=card;
        firstCard.getAttribute("data-image")===secondCard.getAttribute("data-image")?success():failure();
    }
}


// Adding flip class
const addClass=function(){
    this.classList.add("flip");
    checkIt(this);
}


// Adding Event Listener for Each cards
cards.forEach((card)=>{
    card.addEventListener("click",addClass);
});


// Shuffling the card
const shuffle=()=>{
    cards.forEach((card)=>{

        // Generating random postion
        const position=Math.floor(Math.random()*52);
        card.style.order=position;

    })
}


shuffle();