
const inputBtn = document.getElementById("input-btn");
let myLeads =[]
const inputEl = document.getElementById("input-el")

inputBtn.addEventListener("click",function(){
    console.log("Button clicked from event listener" )
    myLeads.push("www.awesomelead.com")
    console.log(myLeads)
})
