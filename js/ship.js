// nas funções do obj da API, não pude usar as arrow functions por causa das regras do escopo delas
// em outras palavras, não poderia manipular o atributo indexShip usando o 'this'.

const API = {
    endPoint: "https://swapi.co/api/starships/?page=1",
    indexShip: 0,
    currentData: null,
    configBtnStart: function() {
      if (!this.indexShip) document.getElementById("btnPrevious").setAttribute("disabled","disabled")
    },
    list: function() {
      // busca os dados de um determinado endpoint
      // que retorna uma promise
      $.get(this.endPoint)
        .then(data => {
          this.currentData = data
          loadShip(data, this.indexShip)
        })
    },
    next: function() { 
      // incrementa 
      this.indexShip++
  
      // chama novamente a função e atualiza os dados da página
      loadShip(this.currentData, this.indexShip)
  
      // configura a 'paginação' dos botões
      this.indexShip <= 8 ? document.getElementById("btnPrevious").removeAttribute("disabled") : document.getElementById("btnNext").setAttribute("disabled","disabled")
    },
    previous: function() { 
      // decrementa
      this.indexShip--
  
      // chama novamente a função e atualiza os dados da página
      loadShip(this.currentData, this.indexShip)
  
      // configura a 'paginação' dos botões
      if (this.indexShip === 0) {
        document.getElementById("btnNext").removeAttribute("disabled")
        document.getElementById("btnPrevious").setAttribute("disabled","disabled")
      } else {
        document.getElementById("btnPrevious").removeAttribute("disabled")
      }
    }
  }
  
  API.configBtnStart()
  API.list()
  
  loadShip = (data, indexShip) => {
    // renderiza os campos no html de acordo com a resposta da API
    document.getElementById("nave").innerHTML = data.results[indexShip].name
    document.getElementById("modelo").innerHTML = data.results[indexShip].model
    document.getElementById("passageiro").innerHTML = data.results[indexShip].passengers
    document.getElementById("carga").innerHTML = data.results[indexShip].cargo_capacity
    document.getElementById("filme").innerHTML = data.results[indexShip].films.length
  };
