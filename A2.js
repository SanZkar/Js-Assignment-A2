let visitors = [
       {month : "June", count : 2145},
       {month : "July", count : 2756},
       {month : "August", count : 2022},
       {month : "September", count : 1795},
       {month : "October", count : 1681},
       {month : "November", count : 2100}
]

let tableBody = document.querySelector("#visitor-table-body");
let totalVisitors = 0;

for( let i=0; i < visitors.length; i++ ){
       let row = document.createElement("tr")
       let monthCol = document.createElement("td")
       let countCol = document.createElement("td")

       monthCol.textContent = visitors[i].month
       countCol.textContent = visitors[i].count

       row.appendChild(monthCol)
       row.appendChild(countCol)
       tableBody.appendChild(row)

       totalVisitors = totalVisitors + visitors[i].count
}

let totalRow = document.createElement("tr")
let totalLabel = document.createElement("th")
let totalCount = document.createElement("th")

       totalLabel.textContent = "Total"
       totalCount.textContent = totalVisitors

       totalRow.appendChild(totalLabel)
       totalRow.appendChild(totalCount)
       tableBody.appendChild(totalRow)




let cookieMessage = document.querySelector("#cookie-message")
let cookieAction = document.querySelector("#cookie-actions")

cookieAction.addEventListener("click", function(event){
       event.preventDefault()

       if(event.target.id === "accept-cookies"){
              cookieMessage.textContent = "Thank you for accepting cookies!!...Would you like to revoke cookie permissions?"
       

       let revoke = document.createElement("a")
       revoke.href = "#"
       revoke.id = "revoke-cookies"
       revoke.textContent = "Revoke Cookies"
       cookieAction.textContent = ""
       cookieAction.appendChild(revoke)
       }
       else if(event.target.id === "revoke-cookies"){
              cookieMessage.textContent = "This website uses cookies to provide you best functionality and usability"

              let accept = document.createElement("a")
              accept.href = "#"
              accept.id = "accept-cookies"
              accept.textContent = "Accept Cookies"
              cookieAction.textContent = ""
              cookieAction.appendChild(accept)
       }


       
}) 

let readingButton = document.querySelector("#toggle-assistance")

readingButton.addEventListener("click", function(){
       document.body.classList.toggle("high-contrast")

       if(document.body.classList.contains("high-contrast")){
              readingButton.textContent = "Reading Assistance: ON"
       }
       else{
              readingButton.textContent = "Reading Assistance: OFF"
       }
})

document.addEventListener("keydown", function(event){
       if(event.ctrlKey && event.key.toLocaleLowerCase() === "a"){
              event.preventDefault()
              readingButton.click()
       }
})

