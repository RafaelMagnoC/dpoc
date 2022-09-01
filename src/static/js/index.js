let homens = 10803
let mulheres = 8413
let nao_informado = 1
let total = homens + mulheres + nao_informado


let Acre = 69 / total
let Alagoas = 450 / total
let Amapa = 24 / total
let Amazonas = 143 / total
let Bahia = 859 / total
let Ceara = 378 / total
let DF = 91 / total
let Espirito_Santo = 303 / total
let Goias = 428 / total
let Maranhao = 145 / total
let Mato_Grosso = 252 / total
let Mato_Grosso_Do_Sul = 325 / total
let Minas_Gerais = 2874 / total
let Para = 290 / total
let Paraiba = 346 / total
let Parana = 1440 / total
let Pernambuco = 735 / total
let Piaui = 84 / total
let Rio_De_Janeiro = 1237 / total
let Rio_Grande_Do_Norte = 251 / total
let Rio_Grande_Do_Sul = 2521 / total
let Rondonia = 140 / total
let Roraima = 17 / total
let Santa_Catarina = 1389 / total
let Sao_Paulo = 4184 / total
let Sergipe = 207 / total
let Tocatins = 35 / total


document.querySelector("#card-numero-cid").innerHTML =  total
document.querySelector("#card-numero-genero").innerHTML =  2
document.querySelector("#card-numero-uf").innerHTML =  27


// Data retrieved from https://netmarketshare.com
Highcharts.chart('graficoPizza', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Beneficiários por UF'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'AC',
            y: Acre,
            sliced: true,
            selected: true
        }, {
            name: 'AL',
            y: Alagoas
        },  {
            name: 'AP',
            y: Amapa
        }, {
            name: 'AM',
            y: Amazonas
        }, {
            name: 'BA',
            y: Bahia
        },  {
            name: 'CE',
            y: Ceara
        }, {
            name: 'DF',
            y: DF
        }, {
            name: 'ES',
            y: Espirito_Santo
        }, {
            name: 'GO',
            y: Goias
        },{
          name: 'MA',
          y: Maranhao
        },  {
          name: 'MT',
          y: Mato_Grosso
        }, {
          name: 'MS',
          y: Mato_Grosso_Do_Sul
        }, {
          name: 'MG',
          y: Minas_Gerais
        }, {
          name: 'PA',
          y: Para
        }, {
          name: 'PB',
          y: Paraiba
        }, {
          name: 'PR',
          y: Parana
        }, {
          name: 'PE',
          y: Pernambuco
        },{
          name: 'PI',
          y: Piaui
        }, {
          name: 'RJ',
          y: Rio_De_Janeiro
        }, {
          name: 'RN',
          y: Rio_Grande_Do_Norte
        },{
          name: 'RS',
          y: Rio_Grande_Do_Sul
        },{
          name: 'RO',
          y: Rondonia
        },{
          name: 'RR',
          y: Roraima
        },{
          name: 'SC',
          y: Santa_Catarina
        },{
          name: 'SP',
          y: Sao_Paulo
        },
        {
          name: 'SE',
          y: Sergipe
        },{
          name: 'TO',
          y: Tocatins
        }]
    }]
});

//Gráfico de barras
document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('graficoBarras', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Beneficiários Por Gênero'
      },
      xAxis: {
          categories: ['Gênero']
      },
      yAxis: {
          title: {
              text: 'Benefício'
          }
      },
      series: [
        {
          name: 'Não Informado',
          data: [nao_informado]
        },
        {
          name: 'Mulheres',
          data: [mulheres]
        },
        {
          name: 'Homens',
          data: [homens]
        },
        {
        name: 'Total',
        data: [total]
        }
      ]
  });
});

