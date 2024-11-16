let input = document.querySelector("input");
let button = document.querySelector("button");
let container = document.querySelector(".container");
let Des = document.querySelector("#des");
let Case = document.querySelector("#case");
let Death = document.querySelector("#Death");
let total = document.querySelector("#Total");



let api = "https://api.rootnet.in/covid19-in/stats/latest";

button.addEventListener("click", () => {
    let stateName = input.value.trim().toLowerCase();
fetch(api)
.then(response => response.json())
.then(data => {
        let ans = "";
        data.data.regional.forEach(element => {
            if(element.loc.toLowerCase() === stateName){
                ans = element;
            }
        });
        if(ans){
            Des.textContent = ans.loc;
            Case.textContent = ans.confirmedCasesIndian;
            Death.textContent = ans.deaths;
            total.textContent = ans.totalConfirmed;

        }
        else{
           let div = document.createElement("div");
           div.textContent = "❌ No data found for the entered state";
           div.classList.add("wrong-box");
           container.prepend(div);
           setTimeout(() => {
            container.removeChild(div);
           }, 2000);

        }

    
    

})
    
})