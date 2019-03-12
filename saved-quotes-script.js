// to obtain the saved quotes

const quoteHandle = document.getElementById('quote')
        const authorHandle = document.getElementById('author')
        const newQuoteHandle = document.getElementById('newQuote')
        const quotesInLocal = JSON.parse(localStorage.getItem('quotes'))
        const getAnotherQuoteHandle = document.getElementById('getAnotherQuote')
        
        for(let i = 1 ; i <=quotesInLocal.length ; i++)
        {
            let random = quotesInLocal[Math.floor(Math.random()*quotesInLocal.length)]
            quoteHandle.innerHTML = random.quote
            authorHandle.innerHTML = `~ ${random.author}`
        }

        newQuoteHandle.addEventListener('submit',(e) =>
        {
            e.preventDefault()
            for(let i = 1 ; i <=quotesInLocal.length ; i++){
            let random = quotesInLocal[Math.floor(Math.random()*quotesInLocal.length)]
            quoteHandle.innerHTML = random.quote
            authorHandle.innerHTML = `~ ${random.author}`
        }
            
        } 
    )