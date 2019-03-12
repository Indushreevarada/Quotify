const authorHandle = document.getElementById('author')
const quoteHandle = document.getElementById('newQuote')
const addQuoteHandle = document.getElementById('addQuote')
const saveHandle = document.getElementById('save')

// to save the new quote into local
function SaveNewQuote(data){
    this.quote = data.quote
    this.author = data.author
    this.saveNew = function() {
     console.log(this)
     localStorage.setItem('quotes',JSON.stringify(this))
    }
}
saveHandle.addEventListener('click',(e)=>{
 e.preventDefault()
 let quote = quoteHandle.value
 let author = authorHandle.value

 if(quote != '' && author != '')
 {
 if(localStorage.getItem('quotes')){
 const formData = {
    quote,
    author
 }
 
 let quoteNew = JSON.parse(localStorage.getItem('quotes'))
 const newQuote = new SaveNewQuote(formData)
 quoteNew.push(newQuote)
 localStorage.setItem('quotes',JSON.stringify(quoteNew))
 alert('Saved the quote successfully')
 quoteHandle.value = ''
 authorHandle.value = ''
 }
 else
 {
     let quotes = []
     localStorage.setItem('quotes',JSON.stringify(quotes))
     quotes.push({quote:quoteHandle.value, author:authorHandle.value})
     localStorage.setItem('quotes',JSON.stringify(quotes))
     alert('Quote has been saved successfully')
     quoteHandle.value = ''
     authorHandle.value = ''
}
}
 else if(quote == '')
 {
     alert('Quote field cannot be empty')
 }
 else if(author == ''){
     alert('Author field cannot be empty')
 }
})