// nas funções do obj da API, não pude usar as arrow functions por causa das regras do escopo delas
// em outras palavras, não poderia manipular o atributo indexPerson usando o 'this'.

const API = {
    endPoint: 'https://swapi.co/api/people/?page=1',
    indexPerson: 0,
    currentData: null,
    configBtnStart: function() {
      if (!this.indexPerson) document.getElementById("btnPrevious").setAttribute("disabled","disabled")
    },
    list: function() {
      // busca os dados de um determinado endpoint
      // que retorna uma promise
      $.get(this.endPoint)
        .then(data => {
          this.currentData = data
          loadPerson(data, this.indexPerson)
        })
    },
    next: function() { 
      // incrementa 
      this.indexPerson++
  
      // chama novamente a função e atualiza os dados da página
      loadPerson(this.currentData, this.indexPerson)
  
      // configura a 'paginação' dos botões
      this.indexPerson <= 8 ? document.getElementById("btnPrevious").removeAttribute("disabled") : document.getElementById("btnNext").setAttribute("disabled","disabled")
    },
    previous: function() { 
      // decrementa
      this.indexPerson--
  
      // chama novamente a função e atualiza os dados da página
      loadPerson(this.currentData, this.indexPerson)
  
      // configura a 'paginação' dos botões
      if (this.indexPerson === 0) {
        document.getElementById("btnNext").removeAttribute("disabled")
        document.getElementById("btnPrevious").setAttribute("disabled","disabled")
      } else {
        document.getElementById("btnPrevious").removeAttribute("disabled")
      }
    }
  }
  
  API.configBtnStart()
  API.list()
  
  // uma função que recebe um argumento para ser injetado
  fetchNamePlanet = (pathToHomeworld) => {
      // busca o caminho para o homeworld
      // que retorna uma promise
      return $.get(pathToHomeworld) 
      // no caso de sucesso: então trata a promessa
      .then(data => document.getElementById("planeta").innerHTML = data.name)
      // no caso de erro: então trata o erro da promessa (no caso só dei um log)
      .catch(error => console.log(error))
  }
  
  loadPerson = (data, indexPerson) => {
    // renderiza os campos no html de acordo com a resposta da API
    document.getElementById("nome").innerHTML = data.results[indexPerson].name
    document.getElementById("altura").innerHTML = data.results[indexPerson].height
    document.getElementById("birth").innerHTML = data.results[indexPerson].birth_year
    document.getElementById("filme").innerHTML = data.results[indexPerson].films.length
    // armazena na constante um determinado valor vindo da API (homeworld)
    const pathToHomeworld = data.results[indexPerson].homeworld
    // chama a função fetchNamePlanet
    fetchNamePlanet(pathToHomeworld)
  }
  
