function searchDestination(){

let input = document.getElementById("searchInput").value.toLowerCase()

let cards = document.querySelectorAll(".card")

cards.forEach(card => {

let city = card.querySelector("h3").innerText.toLowerCase()

if(city.includes(input)){
card.style.display = "block"
}else{
card.style.display = "none"
}

})

}