let indexPerson = 0 
console.log('Inicio', indexPerson)

const list2 = $.get("https://swapi.co/api/people/?page=1", data => {
    this.data = data
    mudarPerson()
})

next = () => {
    console.log('Antes', indexPerson)
    indexPerson ++ 
    mudarPerson()    
    console.log('Depois', indexPerson)
}


previous = () => {
    console.log('Antes', indexPerson)
    indexPerson -= 1
    mudarPerson()    
    console.log('Depois', indexPerson)
}

function mudarPerson(){
    document.getElementById("nome").innerHTML = data.results[indexPerson].name
    document.getElementById("altura").innerHTML = data.results[indexPerson].height
    document.getElementById("birth").innerHTML = data.results[indexPerson].birth_year
    document.getElementById("planeta").innerHTML = data.results[indexPerson].homeworld
    document.getElementById("filme").innerHTML = data.results[indexPerson].films.length
}
