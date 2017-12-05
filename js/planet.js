// nas funções do obj da API, não pude usar as arrow functions por causa das regras do escopo delas
// em outras palavras, não poderia manipular o atributo indexPlanet usando o 'this'.

const API = {
    endPoint: "https://swapi.co/api/planets/?page=1",
    indexPlanet: 0,
    currentData: null,
    configBtnStart: function() {
      if (!this.indexPlanet) document.getElementById("btnPrevious").setAttribute("disabled","disabled")
    },
    list: function() {
      // busca os dados de um determinado endpoint
      // que retorna uma promise
      $.get(this.endPoint)
        .then(data => {
          this.currentData = data
          loadPlanet(data, this.indexPlanet)
        })
    },
    next: function() { 
      // incrementa 
      this.indexPlanet++
  
      // chama novamente a função e atualiza os dados da página
      loadPlanet(this.currentData, this.indexPlanet)
  
      // configura a 'paginação' dos botões
      this.indexPlanet <= 8 ? document.getElementById("btnPrevious").removeAttribute("disabled") : document.getElementById("btnNext").setAttribute("disabled","disabled")
    },
    previous: function() { 
      // decrementa
      this.indexPlanet--
  
      // chama novamente a função e atualiza os dados da página
      loadPlanet(this.currentData, this.indexPlanet)
  
      // configura a 'paginação' dos botões
      if (this.indexPlanet === 0) {
        document.getElementById("btnNext").removeAttribute("disabled")
        document.getElementById("btnPrevious").setAttribute("disabled","disabled")
      } else {
        document.getElementById("btnPrevious").removeAttribute("disabled")
      }
    }
  }
  
  API.configBtnStart()
  API.list()
  
  loadPlanet = (data, indexPlanet) => {
    // renderiza os campos no html de acordo com a resposta da API
    document.getElementById("planeta").innerHTML = data.results[indexPlanet].name
    document.getElementById("populacao").innerHTML = data.results[indexPlanet].population
    document.getElementById("clima").innerHTML = data.results[indexPlanet].climate
    document.getElementById("terreno").innerHTML = data.results[indexPlanet].terrain
    document.getElementById("filme").innerHTML = data.results[indexPlanet].films.length
  };