let url = `http://127.0.0.1:5000/dados`
let cid = document.querySelector("#card-numero-cid").innerHTML
let homens = [];
let mulheres = [];
let municipio = [];
let uf = [];
let total;
function consumirApi(url){
  fetch(url)
  .then((data) => data.json())
  .then((response) => {
    response.forEach(element => {
      let nCid = [];
      nCid.push(element.cid)
      cid = nCid.length   
    });
    console.log(cid)
  })  
}
consumirApi(url);
