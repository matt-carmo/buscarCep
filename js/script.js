const cep = document.querySelector("#cep");
const rua = document.querySelector("#rua");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const uf = document.querySelector("#uf");
const ibge = document.querySelector("#ibge");
const btn = document.querySelector(".btn");

      
btn.addEventListener('click' , () => {
      const cepLength = cep.value.length     
      if (cepLength == 8 && /^[0-9]+$/.test(cep.value)){
            getCepsForHtml()
      } else limparCep(); console.log('oi')
      
})
/*
const getPosts = () => fetch(url)

getPosts().then(response => {
      console.log(response)
}) */

limparCep = () => {
      rua.value = ''
      bairro.value = ''
      cidade.value = ''
      uf.value = ''
      ibge.value =''
}

const getPosts = async() => {          
      try{             
            const cepValue = cep.value
            url = `https://viacep.com.br/ws/${cepValue}/json/`
            const response  = await  axios.get(url)
            return response.data            
      }catch(error){
            console.log(alert('Conexão Recusada pelo Servidor'), error)
      }
}

const getCepsForHtml = () =>  getPosts().then( value => {
      console.log(value.erro)      
      if(value.erro == true) {
            console.log('Cep não existe(Ou não encontrado)')
      }else{
            console.log(value.erro)
            rua.value = value.logradouro      
            bairro.value = value.bairro
            cidade.value = value.localidade
            uf.value = value.uf
            ibge.value = value.ibge
      }  
})

