let indexNave = 0 
console.log('Inicio', indexNave)

const list2 = $.get("https://swapi.co/api/starships/?page=1", data => {
    this.data = data
    mudarNave()
})

next = () => {
    console.log('Antes', indexNave)
    indexNave ++ 
    mudarNave()    
    console.log('Depois', indexNave)
}


previous = () => {
    console.log('Antes', indexNave)
    indexNave -= 1
    mudarNave()    
    console.log('Depois', indexNave)
}

function mudarNave(){
    document.getElementById("nave").innerHTML = data.results[indexNave].name
    document.getElementById("modelo").innerHTML = data.results[indexNave].model
    document.getElementById("passageiro").innerHTML = data.results[indexNave].passengers
    document.getElementById("carga").innerHTML = data.results[indexNave].cargo_capacity
    document.getElementById("filme").innerHTML = data.results[indexNave].films.length
}
