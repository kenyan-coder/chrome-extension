
const inputBtn = document.getElementById("input-btn");
let myLeads =[]
const inputEl = document.getElementById("input-el")
// Grab the unordered list element from the DOM
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeads()
    
})

function renderLeads(){
    listItems=""

    for (let i = 0; i < myLeads.length; i++) {
        listItems += 
        `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
            </a>
        </li>
        `
        
    }
    ulEl.innerHTML = listItems 
}