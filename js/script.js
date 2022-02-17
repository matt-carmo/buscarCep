const cep = document.querySelector("#cep");
const rua = document.querySelector("#rua");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const uf = document.querySelector("#uf");
const ibge = document.querySelector("#ibge");

const btn = document.querySelector(".btn");

const getCep = async () => {
      const cep = await fetch(url);
      const userData = await cep.json();
      return userData;
  };


const completAdress = async () => {
    adress = await getCep();
    rua.value = adress.logradouro;
    bairro.value = adress.bairro;
    cidade.value = adress.localidade;
    uf.value = adress.uf;
    ibge.value = adress.ibge;
};




btn.addEventListener("click", () => {
     const cepInt = parseInt(cep.value)
      


      if (isNaN(cepInt)){
            console.log(cepInt + 'falso')
      }else {
            if(!cep.value.includes(cepInt)){
                  return console.error('');
                  //Criar função que retorne um erro
                  
            }else {cepInput()}
                
      }
});


const cepInput = () => {
    cepNumber = cep.value;

    
    url = `https://viacep.com.br/ws/${cepNumber}/json/`;
    cepNumber.includes(cepNumber)

    console.log(cepNumber)
    
    andress = completAdress();
};



