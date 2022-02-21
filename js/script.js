const cep = document.querySelector("#cep");
const rua = document.querySelector("#rua");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const uf = document.querySelector("#uf");
const ibge = document.querySelector("#ibge");
const btn = document.querySelector(".btn");
const form = document.querySelector(".form")
const clear = document.querySelector('.clear')


clearCep = cep
clear.addEventListener('click', () => {
      cep.value = ''
      limparCep()
})

cep.addEventListener('keypress', (e) => {
      if(e.which == 13){
            getCepsForHtml();
      }
})
btn.addEventListener("click", () => {
    const cepLength = cep.value.length;
    if (cepLength == 8 && /^[0-9]+$/.test(cep.value)) {
        
      getCepsForHtml();
    } else
    swal.fire({
      icon: "error",
      title: "400: Bad Request",
      text: "CEP deve conter 8 dígitos e SOMENTE números",
      heightAuto: false,
  });
  
});
/*
const getPosts = () => fetch(url)

getPosts().then(response => {
      console.log(response)
}) */

limparCep = () => {
    rua.value = "";
    bairro.value = "";
    cidade.value = "";
    uf.value = "";
    ibge.value = "";
};

const getPosts = async () => {
    try {
        const cepValue = cep.value;
        url = `https://viacep.com.br/ws/${cepValue}/json/`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
      swal.fire({
            icon: "error",
            title: "503: Serviço Indisponível",
            text: "Falha na conexão com ViaCEP",
            heightAuto: false,
    })}
};

const getCepsForHtml = () =>
    getPosts().then((value) => {
       
        if (value.erro == true) {
            swal.fire({
                icon: "question",
                title: "CEP Inválido",
                text: "O CEP que você digitou não existe ou não está cadastrado no banco de dados.",
                heightAuto: false,
            });
            limparCep();
        } else {
           

                


            rua.value = value.logradouro;
            bairro.value = value.bairro;
            cidade.value = value.localidade;
            uf.value = value.uf;
            ibge.value = value.ibge;
        }
    });
