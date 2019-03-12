const bodyHandle = document.getElementsByTagName('body')
    const listAllHandle = document.getElementById('listAllDiv')
    let allQuotes = JSON.parse(localStorage.getItem('quotes'))
   
    displayAll()
    function displayAll(){
        
    allQuotes.forEach(function(quote){
        // setting up of buttons
        const pQuote = document.createElement(`p`)
        const pAuthor = document.createElement('p')
        const div = document.createElement('div')
        const br = document.createElement('br')
        const hr = document.createElement('hr')
        const delButton = document.createElement('button')
        const pDelButton = document.createElement('p')
        const editButton = document.createElement('button')
        const pEditButton = document.createElement('p')

        editButton.style = "float: right;"
        delButton.style = "float: right;"
        pQuote.textContent = quote.quote
        pAuthor.textContent = `~${quote.author}`
        delButton.appendChild(pDelButton)
        editButton.appendChild(pEditButton)
        delButton.setAttribute('class','btn')
        editButton.setAttribute('class','btn')

        const iDel = document.createElement('i')
        const iEdit = document.createElement('i')
        iEdit.setAttribute('class',"glyphicon glyphicon-pencil")
        iDel.setAttribute('class','fa fa-trash')

        delButton.appendChild(iDel)
        editButton.appendChild(iEdit)
        div.setAttribute('class','quote')
        div.appendChild(hr)
        div.appendChild(editButton)
        div.appendChild(delButton)
        div.appendChild(pQuote)
        div.appendChild(pAuthor)
                    
        delButton.onclick = function(){
           const index = allQuotes.indexOf(quote)
           if(confirm('Are you sure that you want to delete the quote?'))
           {
            allQuotes.splice(index,1)
            localStorage.setItem('quotes',JSON.stringify(allQuotes))
            alert('Deleted quote successfully')
            listAllHandle.removeChild(div)
           }
          
        }

        // function to edit the quote

        editButton.onclick = function()
        {
            editButton.disabled = true
            delButton.disabled = true
            const editQuote = document.createElement('textArea')
            const editAuthor = document.createElement('textArea')
            const updateButton = document.createElement('button')
            const cancelButton = document.createElement('button')
            const pUpdateButton = document.createElement('p')
            const pCancelButton = document.createElement('p')

            pUpdateButton.innerHTML = 'Update'
            pCancelButton.innerHTML = 'Cancel'
            editQuote.style = "margin: 0px; width: 389px; height: 61px;"
            editAuthor.style = "margin: 0px; width: 149px; height: 61px;"
           
            pQuote.textContent = ''
            pAuthor.textContent = ''
            editQuote.value = quote.quote
            editAuthor.value = quote.author
            updateButton.appendChild(pUpdateButton)
            cancelButton.appendChild(pCancelButton)

            div.appendChild(editQuote)
            div.appendChild(br) 
            div.appendChild(editAuthor)
            div.appendChild(br)                
            div.appendChild(updateButton)
            div.appendChild(cancelButton)
            div.appendChild(br)  
// function to update the quotes
            updateButton.onclick = function()
            {
                let i = allQuotes.indexOf(quote)
                allQuotes[i].quote = editQuote.value
                allQuotes[i].author = editAuthor.value
                localStorage.setItem('quotes',JSON.stringify(allQuotes))
                alert('Update successful')
                pQuote.textContent = quote.quote
                pAuthor.textContent = `~${quote.author}`
                editButton.disabled = false
                delButton.disabled = false
                div.removeChild(editQuote)
                div.removeChild(editAuthor)
                div.removeChild(updateButton)
                div.removeChild(cancelButton)
               
            }   
            cancelButton.onclick = function()
            {
                div.removeChild(editQuote)
                div.removeChild(editAuthor)
                div.removeChild(updateButton)
                div.removeChild(cancelButton)
                editButton.disabled = false
                delButton.disabled = false
                pQuote.textContent = quote.quote
                pAuthor.textContent = `~${quote.author}`
            }
        }
        listAllHandle.appendChild(div)
    })
    }