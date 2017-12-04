let indexPlanet = 0 
console.log('Inicio', indexPlanet)

const list = $.get("https://swapi.co/api/planets", data => {
    this.data = data
    mudarPlanet()
})


next = () => {
    indexPlanet++
    mudarPlanet()    
}


previous = () => {
    indexPlanet -= 1
    mudarPlanet()
}

function mudarPlanet(){
    console.log(data.results[indexPlanet])
    document.getElementById("planeta").innerHTML = data.results[indexPlanet].name
    document.getElementById("populacao").innerHTML = data.results[indexPlanet].population
    document.getElementById("clima").innerHTML = data.results[indexPlanet].climate
    document.getElementById("terreno").innerHTML = data.results[indexPlanet].terrain
    document.getElementById("filme").innerHTML = data.results[indexPlanet].films.length
}


