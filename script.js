const quotes ={
    science: [
        { text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", author: "Albert Einstein" },
        { text: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson" },
        { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
        { text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.", author: "Edwin Hubble" },
        { text: "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.", author: "Louis Pasteur" }
    ],
    philosophy: [
        { text: "The unexamined life is not worth living.", author: "Socrates" },
        { text: "I think, therefore I am.", author: "René Descartes" },
        { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
        { text: "To be is to be perceived.", author: "George Berkeley" },
        { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" }
    ],
    inspirational: [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
        { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
        { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
        { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" }
    ],
    
}

let currentCategory='science';
let currentIndex= 0;

const quoteText=document.getElementById('quote-text');
const quoteAuthor=document.getElementById('quote-author');
const categorySelect=document.getElementById('category-select');
const prevBtn=document.getElementById('prev-btn');
const nextBtn=document.getElementById('next-btn');
const randomBtn=document.getElementById('random-btn');
const themeToggle=document.getElementById('theme-toggle');
const increaseFont=document.getElementById('increase-font');
const decreaseFont=document.getElementById('decrease-font');

//Function to display quote
function displayQuote(index){
    quoteText.textContent=quotes[currentCategory][index].text;
    quoteAuthor.textContent=`- ${quotes[currentCategory][index].author}`;
}
//Initial display
displayQuote(currentIndex);

//Eventlisteners for Select Category
categorySelect.addEventListener('change',(e)=>{
    currentCategory=e.target.value;
    currentIndex=0;
    displayQuote(currentIndex);
});

//Event Listeners for button
prevBtn.addEventListener('click',()=>{
    currentIndex=(currentIndex-1+quotes[currentCategory].length) % quotes[currentCategory].length;
    displayQuote(currentIndex);
});

nextBtn.addEventListener('click',()=>{
    currentIndex=(currentIndex+1) % quotes[currentCategory].length;
    displayQuote(currentIndex);
});

randomBtn.addEventListener('click',()=>{
    currentIndex=Math.floor(Math.random() * quotes[currentCategory].length);
    displayQuote(currentIndex);
});

//Toggle dark mode
themeToggle.addEventListener('change',()=>{
    document.body.classList.toggle('dark-mode');
});

//Quote text font size adjustments
increaseFont.addEventListener('click',()=>{
    let currentSize= parseFloat(window.getComputedStyle(quoteText,null).getPropertyValue('font-size'));
    quoteText.style.fontSize=(currentSize + 2) +'px';
});

decreaseFont.addEventListener('click',()=>{
    let currentSize= parseFloat(window.getComputedStyle(quoteText,null).getPropertyValue('font-size'));
    quoteText.style.fontSize=(currentSize - 2) +'px';
});