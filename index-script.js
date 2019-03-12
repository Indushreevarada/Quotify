// creation of handles

const randomQuoteHandle = document.getElementById('randomQuote')
const getAnotherQuoteHandle = document.getElementById('getAnotherQuote')
const quoteHandle = document.getElementById('quote')
const authorHandle = document.getElementById('author')
const newQuoteHandle = document.getElementById('newQuote')
const saveToLocalHandle = document.getElementById('saveToLocal')

let currentQuote
let existingQuotes = JSON.parse(localStorage.getItem('quotes'))
const xhr = new XMLHttpRequest()
xhr.open('GET','https://thesimpsonsquoteapi.glitch.me/quotes') // API to get the quotes
xhr.send()
xhr.onload = function(){         // to obatin the quotes
    saveToLocalHandle.disabled = false
    saveToLocalHandle.innerHTML = 'Save to Local'
    let quote = JSON.parse(xhr.responseText)
    currentQuote = quote[0]
    quoteHandle.innerHTML = quote[0].quote
    authorHandle.innerHTML = `~ ${quote[0].character}`
    existingQuotes.forEach(function(quote){
    if(quote.quote == currentQuote.quote)
    {
        saveToLocalHandle.innerHTML = 'Saved'
        saveToLocalHandle.disabled = true
    }
    })
}

// to get the new quotes
newQuoteHandle.addEventListener('submit',function(e){
    e.preventDefault()
    saveToLocalHandle.disabled = false
    saveToLocalHandle.innerHTML = 'Save to Local'
    xhr.open('GET','https://thesimpsonsquoteapi.glitch.me/quotes')
    xhr.send()
    xhr.onload = function(){
        if(xhr.readyState == 4)
        {
            let newQuote = JSON.parse(xhr.responseText)
            currentQuote = newQuote[0]
            quoteHandle.innerHTML = newQuote[0].quote
            authorHandle.innerHTML = `~ ${newQuote[0].character}`
            existingQuotes.forEach(function(quote){
            if(quote.quote == currentQuote.quote)
            {
                saveToLocalHandle.innerHTML = 'Saved'
                saveToLocalHandle.disabled = true
            }
            })
        }
    }            
})

// to save the quotes to local db

saveToLocalHandle.addEventListener('click',function(e){
    if(localStorage.getItem('quotes')){
        let quotes = JSON.parse(localStorage.getItem('quotes'))
         quotes.push(
             {quote:currentQuote.quote,
              author:currentQuote.character
             }
        )
        localStorage.setItem('quotes',JSON.stringify(quotes))
        saveToLocalHandle.innerHTML = 'Saved'
        saveToLocalHandle.disabled = true
   }
    else{
        let quotes = []
         quotes.push(
             {quote:currentQuote.quote,
              author:currentQuote.character
             }
        )
         localStorage.setItem('quotes',JSON.stringify(quotes))
         saveToLocalHandle.innerHTML = 'Saved'
         saveToLocalHandle.disabled = true
    }
})