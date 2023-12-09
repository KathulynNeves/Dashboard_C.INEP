var menubut = document.getElementById("menubut")
var menu = document.getElementById("menu")
var filtros = document.getElementById("filtros")

menubut.addEventListener("click", function(){
    if(menu.style.display === "block"){
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
})

menubut.addEventListener("click", function(){
    if(filtros.style.display === "none"){
        filtros.style.display = "block"
    } else {
        filtros.style.display = "none"
    }
})

//Gráfico de barrar - Graf1 

var csvFilePath = 'https://raw.githubusercontent.com/KathulynNeves/Dashboard_C.INEP/main/Tur_publi_priv.csv'; // atribuindo link do csv a uma variavel

fetch(csvFilePath)
  .then(response => response.text())
  .then(csv => {
    var parsedData = Papa.parse(csv, {
      header: true,
      dynamicTyping: true,
      complete: function(result) {
        var dados = result.data;

        var labels = dados.map(function(item) {
          return item.N_tur; 
        });

        var valoresPublicas = dados.map(function(item) {
          return item.Tur_Publica;
        });

        var valoresPrivadas = dados.map(function(item) {
          return item.Tur_Privada;
        });

        var ctx = document.getElementById('myChart').getContext('2d'); // Gerando o gráfico
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ["Infantil", "Fundamental", "Medio"], 
            datasets: [{
              label: 'Publicas',
              data: valoresPublicas,
              borderColor: 'rgba(254, 192, 0)',
              backgroundColor: 'rgba(254, 192, 0)',
              borderWidth: 1
            },
            {
              label: 'Privadas',
              data: valoresPrivadas,
              borderColor: 'rgba(0, 172, 141, 1)',
              backgroundColor: 'rgba(0, 172, 141, 1)',
              borderWidth: 1
            }]
          },
          options: {
            plugins: {
              legend: {
                labels: {
                  fontColor: 'purple'
                }
              }
            },
            scales: {
              y: {
                ticks: {
                  color: 'white'
                }
              },
              x: {
                ticks: {
                  color: 'white'
                }
              }
            }
          }
        });
      }
    });
  })
  .catch(error => console.error('Erro ao carregar o arquivo:', error));


//Gráfico de barrar - Graf2  -- OK

var csvFilePath = 'https://raw.githubusercontent.com/KathulynNeves/Dashboard_C.INEP/main/T_Publica_Privada.csv'; // atribuindo link do csv a uma variavel

fetch(csvFilePath)
  .then(response => response.text())
  .then(csv => {
    var parsedData = Papa.parse(csv, {
      header: true,
      dynamicTyping: true,
      complete: function(result) {
        var dados = result.data;

        var labels = dados.map(function(item) { //Definindo a aréa do gráfico
          return ""; 
        });

        var valoresPublicas = dados.map(function(item) { //Atribuindo um coluna do csv a um variavel
          return item.publicas; 
        });

        var valoresPrivadas = dados.map(function(item) {
          return item.privadas; 
        });

        var ctx = document.getElementById('Chart').getContext('2d'); //Gerando o gráfico
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Publicas',
              data: valoresPublicas,
              borderColor: 'rgba(254, 192, 0)',
              backgroundColor: 'rgba(254, 192, 0)',
              borderWidth: 1
            },
            {
              label: 'Privadas',
              data: valoresPrivadas,
              borderColor: 'rgba(0, 172, 141, 1)',
              backgroundColor: 'rgba(0, 172, 141, 1)',
              borderWidth: 1
            }]
          },
          options: {
            legend: {
              labels: {
                fontColor: 'white' 
              }
            },
            scales: {
              x: {
                ticks: {
                  color: 'white' 
                }
              },
              y: {
                ticks: {
                  color: 'white' 
                }
              }
            }
          }
        });
      }
    });
  })
  .catch(error => console.error('Erro ao carregar o arquivo:', error));



//Gráfico de pizza - Graf3

var csvFilePath = 'https://raw.githubusercontent.com/KathulynNeves/Dashboard_C.INEP/main/T_tur_p%C3%BAblicas_privadas.csv';

fetch(csvFilePath)
  .then(response => response.text())
  .then(csv => {
    var parsedData = Papa.parse(csv, {
      header: true,
      dynamicTyping: true
    });

    var dados = parsedData.data[0]; // Pega os dados da primeira linha 

    var labels = ['Publicas', 'Privadas']; // Define o nome de cada "pedaço" do gráfico

    var valores = [dados['t_tur_publicas'], dados['t_tur_privadas']]; // Pega os valores do total de turmas de escola publica e privada

    var ctx = document.getElementById('Chart3').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: valores,
          backgroundColor: ['rgba(254, 192, 0)', 'rgba(0, 172, 141)'],
          borderColor: ['rgba(254, 192, 0)', 'rgba(0, 172, 141)'],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          labels: {
            fontColor: 'white'
          }
        }
      }
    });
  })
  .catch(error => console.error('Erro ao carregar o arquivo:', error));


//Gráfico de barrar lateral- Graf4 
var csvFilePath = 'https://raw.githubusercontent.com/KathulynNeves/Dashboard_C.INEP/main/T_Doc.csv'; 

fetch(csvFilePath)
  .then(response => response.text())
  .then(csv => {
    var parsedData = Papa.parse(csv, {
      header: true,
      dynamicTyping: true
    });

    var dados = parsedData.data;

    var labels = dados.map(item => ""); // Lista vazia de labels

    var valoresPublicas = dados.map(item => item.publica); // atribuindo valores da coluna 'publicas' a uma variavel
    var valoresPrivadas = dados.map(item => item.privada); // atribuindo valores da coluna 'privadas' a uma variavel

    var ctx = document.getElementById('Chart4').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Públicas',
          data: valoresPublicas,
          backgroundColor: 'rgba(254, 192, 0)',
          borderColor: 'rgba(254, 192, 0)',
          borderWidth: 1
        },
        {
          label: 'Privadas',
          data: valoresPrivadas,
          backgroundColor: 'rgba(0, 172, 141, 1)',
          borderColor: 'rgba(0, 172, 141, 1)',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        plugins: {
          legend: {
            labels: {
              fontColor: 'white'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: 'white'
            }
          },
          y: {
            ticks: {
              color: 'white'
            }
          }
        }
      }
    });
  })
  .catch(error => console.error('Erro ao carregar o arquivo:', error));



  

//Gráfico de rosca - Graf5
var csvFilePath = 'https://raw.githubusercontent.com/KathulynNeves/Dashboard_C.INEP/main/Esc_Reg.csv';

fetch(csvFilePath)
  .then(response => response.text())
  .then(csv => {
    var parsedData = Papa.parse(csv, {
      header: true,
      dynamicTyping: true
    });

    var dados = parsedData.data[0]; // Pega dados da primeira linha

    var labels = ['Norte', 'Sul', 'Nordeste', 'Sudeste', 'Centro-Oeste']; // Nome de cada pedaço do gráfico

    var valores = [dados['escolas_norte'], dados['escolas_sul'], dados['escolas_nordeste'], dados['escolas_sudesde'], dados['escolas_centro']]; // Pega os valores de cada região

    var ctx = document.getElementById('Chart5').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'doughnut', 
      data: {
        labels: labels,
        datasets: [{
          data: valores,
          backgroundColor: ['rgba(254, 192, 0)', 'rgba(0, 172, 141)', 'rgba(0, 69, 172, 1)', 'rgba(148, 0, 172, 1)', 'rgba(170, 161, 161, 1)'],
          borderColor: ['rgba(254, 192, 0)', 'rgba(0, 172, 141)', 'rgba(0, 69, 172, 1)', 'rgba(148, 0, 172, 1)', 'rgba(170, 161, 161, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        cutout: '50%', //Ajusta o tamanho do buraco(Espessura da rosca)
        legend: {
          labels: {
            fontColor: 'white'
          }
        }
      }
    });
  })
  .catch(error => console.error('Erro ao carregar o arquivo:', error));
